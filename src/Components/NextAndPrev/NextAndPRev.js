import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'
import '../../App.css'

export default function NextAndPRev({ setshowSolutionClick,setAfterWrongAnswerShow, handlingAnswerState, setbtnDisable}) {

    const {QusetionBank, setSubmitisClick,setOptionChoosen, optionChoosen, setcorrectOptionId, setCurrQuestion, setGamestate, CurrQuestion, setQuestionType} = useContext(Helper)

    function pageHandler(i) {
      setQuestionType();

      // console.log("optionChoosen", optionChoosen);

      // QuestionChecker()
      setbtnDisable(false);

      if (i == "+") {
          handlingAnswerState();
          setshowSolutionClick(false);
          // submitisClick
          setSubmitisClick(false);
          setCurrQuestion(CurrQuestion + 1);

          setcorrectOptionId([]);
          setOptionChoosen([]);
          setAfterWrongAnswerShow(false);

          const answer = document.getElementById("showingSolution");
          answer.innerHTML = "";
      } else if (i == "-") {
          setshowSolutionClick(false);
          handlingAnswerState();
          setSubmitisClick(false);
          setcorrectOptionId([]);
          setOptionChoosen([]);
          setAfterWrongAnswerShow(false);

          const answer = document.getElementById("showingSolution");
          answer.innerHTML = "";
          setCurrQuestion(CurrQuestion - 1);
      }
  }

  return (
    
      <footer>
      {(CurrQuestion < (QusetionBank.length - 1)) ?
        
        (CurrQuestion == 0) ?
        <div className=' NextandPrev'>
        <button className='btn btn-success' onClick={() => pageHandler('+')} > Next </button>
        </div>
        
        : <div className='NextandPrev'>
        <button className='btn btn-success'  onClick={() => pageHandler('-')} > Prev </button>
        <button className='btn btn-success'  onClick={() => pageHandler('+')} > Next </button>
        </div>
        
        
        :
        
        <div className='NextandPrev'>
        <button className='btn btn-success'  onClick={() => setGamestate("end-screen")} > submit Quiz </button>
        </div>
    }

    </footer>
    
  )
}
