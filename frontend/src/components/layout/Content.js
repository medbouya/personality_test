import { Component } from 'react';

// Rendering main header text
class Content extends Component {
  
  render() {
      return (
        <div className='p-5 text-center bg-light'>
            <h1 className='mb-3'>Are you introvert or extrovert ?</h1>
            <h4 className='mb-3'>Take this test to find out</h4>
        </div>
      );
    }
}

export default Content;

