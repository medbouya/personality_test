import { Component } from 'react'
import Home from './Home'

class TestResult extends Component {

  constructor(props) {
    super(props);
    /*
      Initiate a newTest variable in the state object to track whether 
      user will start new personality (set to false)
    */
    this.state = {
      newTest: false,
    }
    // binding the restartTest function to use it inside JSX
    this.restartTest = this.restartTest.bind(this)
  }

  // Set newTest value to true
  restartTest = () => {
    this.setState({
      newTest: true
    })
  }

  render() {
    /* 
      Check if newTest is true. If it is true, call the Home component. Otherwise, keep showing the result
    */
    if (this.state.newTest ) {
      return <Home /> 
    } else {
      return (
        <div>
          <div className='p-5 text-center bg-light'>
            <h1 className='mb-3'>You are an {this.props.result}</h1>
            <h4 className='mb-3'><i>Take another test ?</i></h4>
            <button className='btn btn-primary btn-lg' onClick={this.restartTest} >
              Retake the test
            </button>
          </div>
        </div>
      );
    }
  }
}

export default TestResult