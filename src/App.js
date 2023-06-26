import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Quiz';
import { useEffect, useState } from 'react';
import EndScreen from './Components/EndScreen';
import axios from 'axios';
import { Helper } from './Helper/Helper';
// import Helper from './Helper/Helper';


export const Api = "https://api.esaral.com/v2/quizes/get-quiz-question-details?quiz_id=42"


function App() {

  const [QusetionBank, setQusetionBank] = useState();

  const [score, setScore] = useState(0);

  const [gamestate, setGamestate] = useState('quiz-screen')

  const [CurrQuestion, setCurrQuestion] = useState(0)  // for setting the Question
  const [optionChoosen, setOptionChoosen] = useState([]) // for OPtion choose
  const [correctOptionId, setcorrectOptionId] = useState([]) // for correct option id
  


  const [selectedOption, setSelectedOption] = useState()

  const [submitisClick, setSubmitisClick] = useState(false) // submit button is click

  
  useEffect(
    () => {
      axios.get(Api).then(
        (Response) => {
          // setQuizData(Response.data.data)

          setQusetionBank(Response.data.data)

          console.log(Response.data.data)
        }
      ).catch(
        (error) => {
          return <h1>{error}</h1>
        }
      )

    }, []
  )

  return (
    !QusetionBank ?

      <h2>Loading...</h2>
      :
      
      <Helper.Provider value={{ score, setScore, setGamestate, QusetionBank, setQusetionBank, CurrQuestion,   
  optionChoosen,correctOptionId,selectedOption, submitisClick, setCurrQuestion,setOptionChoosen,setcorrectOptionId, setSelectedOption, setSubmitisClick

       }} >

        {(gamestate === 'quiz-screen') && <Quiz />}
        {(gamestate === 'end-screen') && <EndScreen />}

      </Helper.Provider>
//   <div>
// success
//   </div>
  )
}

export default App;
