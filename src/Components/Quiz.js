import React, { useContext, useEffect, useState } from 'react'
import { Helper, messages } from '../Helper/Helper'
import '../App.css'
import { Form } from "react-bootstrap";
import Header from './Header/Header';
import NextAndPRev from './NextAndPrev/NextAndPRev';
// import SubmitButton from './SubmitButton/SubmitButton';



export default function Quiz() {
    const { QusetionBank, score, setScore, setQusetionBank, CurrQuestion,
        optionChoosen,correctOptionId,selectedOption, submitisClick, setCurrQuestion,setOptionChoosen,setcorrectOptionId, setSelectedOption, setSubmitisClick
       } = useContext(Helper)

       const [OptionIsRight, setOptionIsRight] = useState(false) // option is right or not

       const [AfterWrongAnswerShow, setAfterWrongAnswerShow] = useState(false) // After Wrong answer want to show

    //    const [allbButtonisClick,setallbButtonisClick] = useState(false)

    const [message, setMessage ] = useState(false)

    


    const Alpoption = ['A', 'B', 'C', 'D']


    console.log('optionChoosen', optionChoosen)


    const [answer, setAnswer] = useState({})

    useEffect(
        () => {
if (QusetionBank[CurrQuestion] && QusetionBank[CurrQuestion].is_solved) {
    
    const data = QusetionBank[CurrQuestion].is_solved

          setcorrectOptionId(data.correctOptionId)
          setOptionIsRight(data.OptionIsRight)
          setSubmitisClick(data.submitisClick)
          setOptionChoosen(data.optionChoosen)
        //   setMessage(data.message)
          console.log("under the useEffect")
}

        }, [CurrQuestion, setOptionChoosen]
    )

  function handlingAnswerState() {

      let temp = [...QusetionBank]
      temp[CurrQuestion].is_solved = {
          optionChoosen:optionChoosen,
          correctOptionId:correctOptionId,
          OptionIsRight: OptionIsRight,
          submitisClick: submitisClick,
        //   message : message
          
      }
      console.log('temp[CurrQuestion]',temp)
      setQusetionBank(temp)

    //   console.log("answer",answer)
  }




    //set the correctoptionId
    useEffect(
        () => {
            (QusetionBank[CurrQuestion].options).map(
                (option, index) => {
                    if (option.is_solution == true) {
                        setcorrectOptionId([Alpoption[index], option.option_id])
                        console.log('correctOptionId under useEffect', [Alpoption[index], option.option_id])
                    }
                }
            )
        }, [CurrQuestion]
    )



    console.log(' correctOptionId', correctOptionId)
    console.log(' optionChoosen', optionChoosen)


    function QuestionChecker() {
        if (optionChoosen.length == 0) {
            alert('now any opton is choose.')
        }
        else {

            if (correctOptionId[1] == optionChoosen[1]) {
                setScore(score + 1)
                setOptionIsRight(true)

                console.log( "setOptionIsRight(true)")

                
            }
            else {
                setOptionIsRight(false)
            }

            setSubmitisClick(true)

        }
        handlingAnswerState()

  
    }

    console.log('OptionIsRight', OptionIsRight)

    // console.log('score', score)


    function pageHandler(i) {

        console.log("optionChoosen", optionChoosen)

        // QuestionChecker()

        if (i == '+') {

            handlingAnswerState()

            // setQusetionBank(
            //     QusetionBank[i-1] = {
            //         ...QusetionBank[i-1],
            //         is_answerd: optionChoosen
            //     }
            // )
            // submitisClick
            setSubmitisClick(false)
            setCurrQuestion(CurrQuestion + 1)

            setcorrectOptionId([])
            setOptionChoosen([])

            const answer = document.getElementById('showingSolution')
            answer.innerHTML = ''
        }
        else if (i == '-') {

            handlingAnswerState()

            setSubmitisClick(false)
            setcorrectOptionId([])
            setOptionChoosen([])
            
            
            const answer = document.getElementById('showingSolution')
            answer.innerHTML = ''
            setCurrQuestion(CurrQuestion - 1)
        }

    }

    function ShowingFullTextSoluiton() {
        const answer = document.getElementById('showingSolution')
        answer.innerHTML = `<h3> Solution :- </h3>${QusetionBank[CurrQuestion].solution}`

        // setallbButtonisClick(true)
    }
    // console.log("QuestionChecker[CurrQuestion].solution",QusetionBank[CurrQuestion].solution)

    function IwillTryAgain(j) {
        setOptionChoosen([])
        setSubmitisClick(false)

          // Reset the class of buttons
  const options = document.getElementById(j);
//   console.log('Optios',options)

  // Get the button element
var button = options.querySelector('.btn-primary');

if (button == null) {
    setSubmitisClick(false)
}
else{
    // Remove the "btn-primary" class
    button.classList.remove('btn-primary');
    
    // Add the "btn-outline-primary" class
    button.classList.add('btn-outline-primary');

}
console.log('button',button)

//   options.classList.replace("btn-primary", "btn-outline-primary");

  //   for (let i = 0; i < options.length; i++) {
//     options[i].classList.remove("btn-primary");
//     options[i].classList.add("btn-outline-primary");
//   }
  
        const answer = document.getElementById('showingSolution')
        answer.innerHTML = ''
    }

    function ShowingCorrectOption() {
        const answer = document.getElementById('showingSolution')
        answer.innerHTML = `<h3> Solution :- </h3>Correct Option is ${correctOptionId[0]}`
        setAfterWrongAnswerShow(true)

    }

    function headerButRedirect(j) {

        setCurrQuestion(j)
     
        setSubmitisClick(false)
        setcorrectOptionId([])
        setOptionChoosen([])   
        
        const answer = document.getElementById('showingSolution')
        answer.innerHTML = ''
    }


    return (
        <div className='Quiz'>


            {/* /*------------------------------------Header-----------------------------------------*/}

            <Header headerButRedirect={headerButRedirect} />


            {/* /*------------------------------------Question portion-----------------------------------------*/}

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    {
                        console.log('QusetionBank', QusetionBank)
                    }
                    {QusetionBank.map(

                        (Question, index) => {
                            return (

                                <div key={index} className={`carousel-item ${index === CurrQuestion ? "active" : ''} `}>

                                    <h3 dangerouslySetInnerHTML={{ __html: Question.question_text }} />

                                    <div id={`Options-${index}`}>
                                        {
                                            (Question.options).map(
                                                (option, index) => {
                                                    return <div key={index} className='option'>
                                                        <button
                                                            onClick={() => setOptionChoosen([Alpoption[index], option.option_id])}
                                                            className={`btn ${( (Question.is_solved && Question.is_solved.optionChoosen[1] == option.option_id) || (optionChoosen[1] == option.option_id) ) ? "btn-primary" : "btn-outline-primary"} option`}
                                                            dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }} /> </div>
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                    }
                </div>

            </div>



            {/* /*------------------------------------submit Portion-----------------------------------------*/}
{/* <SubmitButton submitisClick={submitisClick} QuestionChecker={QuestionChecker} OptionIsRight={OptionIsRight} ShowingFullTextSoluiton={ShowingFullTextSoluiton} IwillTryAgain={IwillTryAgain} ShowingCorrectOption={ShowingCorrectOption} /> */}
     
     
            {
                (   !submitisClick && (!QusetionBank[CurrQuestion]?.is_solved?.submitisClick) ) 
                
                ?
                
                <div className='submit'>
                {/* {console.log("QusetionBank[CurrQuestion].is_solved.submitisClick",QusetionBank[CurrQuestion].is_solved.submitisClick)} */}
                        <button className='btn btn-primary' onClick={QuestionChecker}>Submit</button>
                    </div>
                    :
                    <div className='AfterSubmit'>

                        {OptionIsRight == true &&

                            <div className='AfterSubmit'>
                                <div className='text-success'> {messages.right} </div>
                                <button className='container text-center btn btn-outline-primary ShowSolution' onClick={ShowingFullTextSoluiton}>Show Solution</button>
                            </div>}
                        {OptionIsRight == false &&
                            <div>

<div className='text-danger'> {messages.wrong} </div>
                                <button className='btn btn-primary IwillTryAgain' onClick={() => IwillTryAgain(`Options-${CurrQuestion}`)} > I will Try Again </button>
                                {
                                    AfterWrongAnswerShow == false &&
                                    <button className='btn btn-primary ShowingCorrectOption' onClick={ShowingCorrectOption} > Show Correct Answer </button>

                                }
                        {
                            AfterWrongAnswerShow == true &&
                            <div>
                                <button className='btn btn-primary ShowingCorrectOption' onClick={ShowingFullTextSoluiton} > Show Solution </button>
                            </div>
                        }
                            </div>}



                    </div>
            }
<div id="showingSolution"></div>


            {/* /*------------------------------------------ Next and Previous Buttons -------------------------------*/}
 

            <NextAndPRev CurrQuestion={CurrQuestion} pageHandler={pageHandler} />


        </div >
    )
}
