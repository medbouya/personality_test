import { Component, Fragment } from 'react';
// Import Stepper component for the form steps
import Stepper from 'bs-stepper'
import TestResult from './TestResult'

class PersonalityForm extends Component {

  // Constructor to initiate state
  constructor(props) {
    super(props);

    // Declaring the state variables as an object
    this.state = {
      // Track when radio is clicked
      radio: false,
      // introvert and extrovert count
      introvert: 0,
      extrovert: 0,
      // will hold a string telling if the form result is "Introvert" or "Extrovert"
      result: "",
      // Tracking the current question radio value when user change the response
      currentRadioValue: '',
      // Boolean to allow return to the Home component 
      returnHome: false,
    }

    // Binding two functions to be able to call them from the JSX in the render() function
    this.onFormChange = this.onFormChange.bind(this)
    this.testResult = this.testResult.bind(this)
  }

  // Adding the componentDidMount() to initiate the stepper on the target element in JSX
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      // stepper properties
      linear: false,
      animation: true
    })
  }

  // Preventing the form from submitting
  onSubmit = e => {
    e.preventDefault()
  }

  // Set radio to true and set its value to currentRadioValue
  onFormChange(response_type) {
    this.setState({
      radio: true,
      currentRadioValue: response_type,
    })
  }

  // Reset the radio state and increment introvert or extrovert count
  resetRadioSubmit() {
    if (this.state.currentRadioValue > 0) {
      this.setState({
        radio: false,
        extrovert: this.state.extrovert + 1
      })
    } else {
      this.setState({
        radio: false,
        introvert: this.state.introvert + 1
      })
    }
  }

  // Set the result variable and update the returnHome variable to true
  testResult() {
    this.resetRadioSubmit()
    console.log("Enter function")
    this.setState({
      result: this.state.extrovert > this.state.introvert ? "Extrovert" : "Introvert",
      returnHome: true
    })
  }
 
  render() {
    /*
      Check if the returnHome is true: if true, it will show the result. 
      Otherwise, the form will keep visible
    */
    if (this.state.returnHome) {
      return <TestResult result={this.state.result} showForm={false} showStartButton={false} /> 
    }
    else {
      return (
        <Fragment>
          <div id="stepper1" className="p-5 bs-stepper">
          {this.props.questions.length > 0 && (
            <div key="0" className="bs-stepper-header">
              {this.props.questions.map((question, index) => (
                <Fragment>
                  <div className="step" data-target={"#test-l-" + index}>
                    <button key={question.id} className="step-trigger">
                      <span className="bs-stepper">Question</span>
                      <span className="bs-stepper-circle">{ index + 1}</span>
                    </button>
                  </div>
                  <div className="line"></div>
                </Fragment>
              ))}

            </div>
          )}
            <div className="bs-stepper-content">
              <form onSubmit={this.onSubmit}>
                
                {this.props.questions.length > 0 && (
                  <Fragment>
                    {this.props.questions.map((question, index) => (
                        <div key={question.id} id={"test-l-" + index} className="content">
                          <div className="form-group">
                            <h3 className="font-italic">{question.title + this.state.extrovert}</h3>
                            {question.responses_set.map((answer, i) => (
                              <Fragment key={i}>
                                <input 
                                  type="radio"
                                  name="radio-input"
                                  value={this.state.radio}
                                  onChange={() => this.onFormChange(answer.response_type)} 
                                  className="form-check-input" 
                                  id={"radio-" + i} />
                                <label className="form-check-label" forhtml={"radio-" + i}>{answer.title}</label><br />
                              </Fragment>
                            ))}
                          </div>
                          {index === this.props.questions.length -1 
                          ? <button 
                              type="submit"
                              onClick={() => {this.testResult(); this.props.updateContent();}} 
                              className="btn btn-primary mt-5">Finish</button> 
                          : <button 
                              className="btn btn-primary mt-5" 
                              disabled={!this.state.radio}
                              onClick={() => 
                              { this.stepper.next(); this.resetRadioSubmit(); }}>Next</button>}
                        </div>
                    ))}
                  </Fragment>
                )}

              </form>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default PersonalityForm;