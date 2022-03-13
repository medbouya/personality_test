import { Fragment, useState } from 'react';
import { Header, Content, Footer } from './layout';
import PersonalityForm from './PersonalityForm';
import GetQuestions from './services/GetQuestions';

function AppLayout() {

  // Getting the personality test questions from the Restful API
  const [questions] = GetQuestions()
  // Show the personality test form dynamically 
  let [showForm, setShowForm] = useState(false)
  // Hide the start button once clicked 
  let [showStartButton, setStartButton] = useState(true)
  // Hide main header content when showing the test results
  let [showContent, setShowContent] = useState(true)
  
  // Dsiplay the test form 
  const updateShowForm = () => {
    setShowForm(true)
    setStartButton(false)
  }

  // Hide the main content when the submit button is clicked
  const updateContent = () => {
    setShowContent(false)
  }

  return (
    <Fragment>
      {showContent 
        ? 
        <Fragment>  
          <Header /> 
          <Content /> 
        </Fragment>
        : 
          null}
      {showStartButton ? <div className='p text-center bg-light'>
            <button className='btn btn-primary btn-lg' onClick={updateShowForm} >
              Start the test
            </button>
        </div> : null}
      {showForm ? <PersonalityForm questions={questions} updateContent={updateContent} /> : null}
      <Footer/>
    </Fragment>
  );
}

export default AppLayout;


