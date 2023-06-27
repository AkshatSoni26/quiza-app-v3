import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'
import '../../App.css'

export default function Header({setAfterWrongAnswerShow, setshowSolutionClick, setbtnDisable, handlingAnswerState}) {
    const { QusetionBank,CurrQuestion, setOptionChoosen, setCurrQuestion, setSubmitisClick, setcorrectOptionId, setQuestionType } = useContext(Helper)


    function headerButRedirect(j) {
      setbtnDisable(false);
      setAfterWrongAnswerShow(false);
      setQuestionType();
      setshowSolutionClick(false);
      setCurrQuestion(j);
      setSubmitisClick(false);
      setcorrectOptionId([]);
      setOptionChoosen([]);

      const answer = document.getElementById("showingSolution");
      answer.innerHTML = "";

      handlingAnswerState();
  }


  return (
    
    // if QusetionBank is contain the is_solved then adding color to the paritcular portion

    <div className='header'>
    {
        QusetionBank.map(
            (ob, i) => {
                return <button key={i} className={` ${i === CurrQuestion ? "btn btn-primary headerbtn" : 'btn btn-outline-primary'}  `} onClick={() => headerButRedirect(i)}>{i + 1}</button>
            }
        )
    }
</div>
  )
}
