import React, { useContext } from 'react'
import '../../../App.css'
import { Helper, messages } from '../../../Helper/Helper'

export default function ChooseOptionIsNotRight({  setshowSolutionClick, AfterWrongAnswerShow,setMessage, setbtnDisable, setAfterWrongAnswerShow, showSolutionClick, IwillTryAgain, ShowingFullTextSoluiton}) {
   
    const {QuestionType, setNumAnswer,   correctOptionId, setSubmitisClick, setOptionChoosen, CurrQuestion} = useContext(Helper)


    function ShowingCorrectOption() {
        setAfterWrongAnswerShow(true);
    }


    function IwillTryAgain(j) {
        setAfterWrongAnswerShow(false);
        setbtnDisable(false);
        setMessage(false);
        setOptionChoosen([]);
        setSubmitisClick(false);
        setshowSolutionClick(false);

        // Reset the class of buttons
        const options = document.getElementById(j);
        //   console.log('Optios',options)

        if (QuestionType == "numerical") {
            setNumAnswer("");
        } else {
            // Get the button element
            var button = options.querySelector(".btn-primary");

            if (button == null) {
                setSubmitisClick(false);
            } else {
                // Remove the "btn-primary" class
                button.classList.remove("btn-primary");

                // Add the "btn-outline-primary" class
                button.classList.add("btn-outline-primary");
            }
        }

        console.log("button", button);

        const answer = document.getElementById("showingSolution");
        answer.innerHTML = "";

        const mess = document.getElementById("message");
        mess.innerHTML = "";

    }
   
    return (
        <div>
            <div id='message' className='text-danger'> {messages.wrong} </div>

            {AfterWrongAnswerShow == true && <div id='showungCorrectOption'> Correct Answer is <b> {( QuestionType == 'numerical')? null :'Option' }  {correctOptionId.join(',')}</b></div>}

            {!showSolutionClick && <button className='btn btn-primary IwillTryAgain' onClick={() => IwillTryAgain(`Options-${CurrQuestion}`)} > I will Try Again </button>}

            {
                AfterWrongAnswerShow == false &&
                !showSolutionClick && <button className='btn btn-primary ShowingCorrectOption' onClick={ShowingCorrectOption} > Show Correct Answer </button>}


            {
                !showSolutionClick && AfterWrongAnswerShow == true &&
                <div>
                    {<button className='btn btn-primary ShowingCorrectOption' onClick={ShowingFullTextSoluiton} > Show Solution </button>}
                </div>
            }
        </div>
    )
}
