import React, { useContext, useEffect, useState } from "react";
import { Helper, messages } from "../Helper/Helper";
import "../App.css";
import { Form } from "react-bootstrap";
import Header from "./Header/Header";
import NextAndPRev from "./NextAndPrev/NextAndPRev";
import Options from "./Options/Options";
import QuestionPortion from "./QuestionPortion/QuestionPortion";

import DropDown from "./Dropdown/DropDown";
import SubmitButton from "./SubmitButton/SubmitButton";
import ChooseOptionIsNotRight from "./SubmitPortion/Submit Portion Depn/ChooseOptionIsNotRight";
import ShowSolution from "./SubmitPortion/Submit Portion Depn/ShowSolution";

export default function Quiz() {

    console.log("11111111111111111111111111111111")

    const {
        QusetionBank,
        score,
        setScore,
        setQusetionBank,
        CurrQuestion,
        NumAnswer,
        setNumAnswer,
        QuestionType,
        setQuestionType,
        optionChoosen,
        correctOptionId,
        submitisClick,
        setCurrQuestion,
        setOptionChoosen,
        setcorrectOptionId,
        setSubmitisClick,
        Alpoption
    } = useContext(Helper);

    const [OptionIsRight, setOptionIsRight] = useState(false); // option is right or not

    const [AfterWrongAnswerShow, setAfterWrongAnswerShow] = useState(false); // After Wrong answer want to show

    const [showSolutionClick, setshowSolutionClick] = useState(false); // After show soltuion is click

    const [btnDisable, setbtnDisable] = useState(false);

    const [message, setMessage] = useState(false);
    


    // // console.log("optionChoosen", optionChoosen);

    useEffect(() => {
        if (QusetionBank[CurrQuestion] && QusetionBank[CurrQuestion].is_solved) {
            const data = QusetionBank[CurrQuestion].is_solved;

            setcorrectOptionId(data.correctOptionId);
            setOptionIsRight(data.OptionIsRight);
            setSubmitisClick(data.submitisClick);
            setOptionChoosen(data.optionChoosen);
            setbtnDisable(data.btnDisable);
            setMessage(data.message);
            setNumAnswer(data.NumAnswer);
            //   setMessage(data.message)
            // // console.log("under the useEffect");
        }
    }, [CurrQuestion]);

    function handlingAnswerState() {
        let temp = [...QusetionBank];
        temp[CurrQuestion].is_solved = {
            optionChoosen: optionChoosen,
            correctOptionId: correctOptionId,
            OptionIsRight: OptionIsRight,
            submitisClick: submitisClick,
            btnDisable: btnDisable,
            message: message,
            NumAnswer: NumAnswer,
        };
        // // console.log("temp[CurrQuestion]", temp);
        setQusetionBank(temp);
    }

    //set the correctoptionId
    useEffect(() => {
        if (QusetionBank[CurrQuestion].question_type === "numerical") {
            setQuestionType(QusetionBank[CurrQuestion].question_type);

            let rangeAnswer = QusetionBank[CurrQuestion];

            setcorrectOptionId([rangeAnswer.correct_answer]);

        } else {
            const Options = QusetionBank[CurrQuestion].options;

            let tempAnswer = [];

            for (let i = 0; i < QusetionBank[CurrQuestion].options.length; i++) {
                if (Options[i]?.is_solution == true) {
                    // // console.log("before", tempAnswer);
                    tempAnswer = [...tempAnswer, Alpoption[i]];
                    // setcorrectOptionId(temp)
                    // // console.log("after", tempAnswer);
                }
                // // console.log("before tempAnswer", correctOptionId);
            }
            setcorrectOptionId(tempAnswer);
            // // console.log("after tempAnswer", correctOptionId);
        }
    }, [CurrQuestion]);


    // // console.log(" correctOptionId", correctOptionId);
    // // console.log(" optionChoosen", optionChoosen);


    function QuestionChecker() {

        let answers = true;

        if (QuestionType == "numerical") {
            if (NumAnswer == undefined || NumAnswer.length == 0) {
                alert("First type the answer.");
            } else {
                // // console.log("under the Numerical poriton.");

                // // console.log('type of range',typeof  rangeAns[0], 'type of answer',rangeAns[0]<=Number(NumAnswer)<=rangeAns[1] )
                // // console.log("rangeAns", correctOptionId[0]);
                if (correctOptionId[0] == Number(NumAnswer)) {
                    // // console.log("under the range Numberical if state");
                } else {
                    answers = false;
                }

                setSubmitisClick(true);
            }
        } else {
            if (optionChoosen.length == 0) {
                alert("no any option is choose.");
            }
            else if (optionChoosen.length !== correctOptionId.length) {
                answers = false;
                setSubmitisClick(true);     
            } 
            else {
                setbtnDisable(true); // disabling the buttons
                setMessage(true);

                for (let i = 0; i < correctOptionId.length; i++) {
                    if (optionChoosen.includes(correctOptionId[i])) {
                        // // console.log("setOptionIsRight(true)");
                    } else {
                        answers = false;
                        break;
                    }
                }
                setSubmitisClick(true);
            }
        }

        if (answers == true) {
            setScore(score + 1);
            setOptionIsRight(true);
      

        } else {
            setOptionIsRight(false);

        }

        handlingAnswerState();

    }


    // // console.log("OptionIsRight", OptionIsRight);

    function ShowingFullTextSoluiton() {
        setshowSolutionClick(true);
        const answer = document.getElementById("showingSolution");
        answer.innerHTML = `<h3> Solution :- </h3>${QusetionBank[CurrQuestion].solution}`;

        // setallbButtonisClick(true)
    }
 


    return (
        <div className="Quiz">
            {/* /*------------------------------------Header-----------------------------------------*/}
            {/* <DropDown /> */}
            <Header  
            handlingAnswerState={handlingAnswerState}
            setAfterWrongAnswerShow={setAfterWrongAnswerShow}
            setshowSolutionClick={setshowSolutionClick}
            setbtnDisable={setbtnDisable}
             />

            {/* /*------------------------------------Question portion-----------------------------------------*/}

            <QuestionPortion
                btnDisable={btnDisable}
            />

            {/* /*------------------------------------submit Portion-----------------------------------------*/}
            {!submitisClick ?

                <SubmitButton QuestionChecker={QuestionChecker} />
                :
                <div className="AfterSubmit">
                    {OptionIsRight == true && (
                        <div className="AfterSubmit">
                            <div id="message" className="text-success">

                                {messages.right}

                            </div>

                            {!showSolutionClick && <ShowSolution ShowingFullTextSoluiton={ShowingFullTextSoluiton} />}

                        </div>
                    )}

                    {OptionIsRight == false && (
                        <ChooseOptionIsNotRight
                            AfterWrongAnswerShow={AfterWrongAnswerShow}
                            showSolutionClick={showSolutionClick}
                            // IwillTryAgain={IwillTryAgain}
                            setshowSolutionClick={setshowSolutionClick}
                            setMessage={setMessage}
                            setbtnDisable={setbtnDisable}
                            setAfterWrongAnswerShow={setAfterWrongAnswerShow}
                            ShowingFullTextSoluiton={ShowingFullTextSoluiton}
                        />
                    )}
                </div>
            }

            <div id="showingSolution"> </div>

            {/* /*------------------------------------------ Next and Previous Buttons -------------------------------*/}

            <NextAndPRev CurrQuestion={CurrQuestion} setAfterWrongAnswerShow={setAfterWrongAnswerShow} setshowSolutionClick={setshowSolutionClick} handlingAnswerState={handlingAnswerState} setbtnDisable={setbtnDisable} />
        </div>
    );
}
