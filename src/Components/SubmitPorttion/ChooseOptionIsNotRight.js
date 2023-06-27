import React, { useContext } from 'react'
import '../../App.css'
import { Helper } from '../../Helper/Helper'

export default function ChooseOptionIsNotRight({ messages, AfterWrongAnswerShow, correctOptionId, showSolutionClick, IwillTryAgain, CurrQuestion, ShowingCorrectOption, ShowingFullTextSoluiton}) {
   
    const {QuestionType} = useContext(Helper)
   
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
