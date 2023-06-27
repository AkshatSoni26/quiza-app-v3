import React, { useContext, useEffect, useState } from "react";
import { Helper, messages } from "../Helper/Helper";
import "../App.css";
import { Form } from "react-bootstrap";
import Header from "./Header/Header";
import NextAndPRev from "./NextAndPrev/NextAndPRev";
import Options from "./Options/Options";
import QuestionPortion from "./QuestionPortion/QuestionPortion";
import ChooseOptionIsNotRight from "./SubmitPorttion/ChooseOptionIsNotRight";
// import SubmitButton from './SubmitButton/SubmitButton';

export default function Quiz() {
  const {
    rangeAns,
    setRange,
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
    selectedOption,
    submitisClick,
    setCurrQuestion,
    setOptionChoosen,
    setcorrectOptionId,
    setSelectedOption,
    setSubmitisClick,
  } = useContext(Helper);

  const [OptionIsRight, setOptionIsRight] = useState(false); // option is right or not

  const [AfterWrongAnswerShow, setAfterWrongAnswerShow] = useState(false); // After Wrong answer want to show

  const [showSolutionClick, setshowSolutionClick] = useState(false); // After show soltuion is click

  const [btnDisable, setbtnDisable] = useState(false);

  const [message, setMessage] = useState(false);

  const Alpoption = ["A", "B", "C", "D"];

  console.log("optionChoosen", optionChoosen);

  const [answer, setAnswer] = useState({});

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
      console.log("under the useEffect");
    }
  }, [CurrQuestion, setOptionChoosen]);

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
      //   message : message
    };
    console.log("temp[CurrQuestion]", temp);
    setQusetionBank(temp);

    //   console.log("answer",answer)
  }

  //set the correctoptionId
  useEffect(() => {
    if (QusetionBank[CurrQuestion].question_type === "numerical") {
      setQuestionType(QusetionBank[CurrQuestion].question_type);

      let rangeAnswer = QusetionBank[CurrQuestion];

      setcorrectOptionId([rangeAnswer.correct_answer]);

      // console.log('Range', typeof rangeAnswer.range_from)
    } else {
      const Options = QusetionBank[CurrQuestion].options;

      let tempAnswer = [];

      for (let i = 0; i < QusetionBank[CurrQuestion].options.length; i++) {
        if (Options[i]?.is_solution == true) {
          console.log("before", tempAnswer);
          tempAnswer = [...tempAnswer, Alpoption[i]];
          // setcorrectOptionId(temp)
          console.log("after", tempAnswer);
        }
        console.log("before tempAnswer", correctOptionId);
      }
      setcorrectOptionId(tempAnswer);
      console.log("after tempAnswer", correctOptionId);
    }
  }, [CurrQuestion]);

  console.log(" correctOptionId", correctOptionId);
  console.log(" optionChoosen", optionChoosen);

  function QuestionChecker() {
    // console.log('setcorrectOptionId under Question checker',setcorrectOptionId)

    // || (NumAnswer.length == 0)

    let answers = true;

    if (QuestionType == "numerical") {
      if (NumAnswer == undefined || NumAnswer.length == 0) {
        alert("First type the answer.");
      } else {
        console.log("under the Numerical poriton.");

        // console.log('type of range',typeof  rangeAns[0], 'type of answer',rangeAns[0]<=Number(NumAnswer)<=rangeAns[1] )
        console.log("rangeAns", correctOptionId[0]);
        if (correctOptionId[0] == Number(NumAnswer)) {
          console.log("under the range Numberical if state");
        } else {
          answers = false;
        }

        setSubmitisClick(true);
      }
    } else {
      if (optionChoosen.length == 0) {
        alert("now any option is choose.");
      } else {
        setbtnDisable(true); // disabling the buttons
        setMessage(true);

        for (let i = 0; i < correctOptionId.length; i++) {
          if (optionChoosen.includes(correctOptionId[i])) {
            console.log("setOptionIsRight(true)");
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

  console.log("OptionIsRight", OptionIsRight);

  function pageHandler(i) {
    setQuestionType();

    console.log("optionChoosen", optionChoosen);

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

  function ShowingFullTextSoluiton() {
    setshowSolutionClick(true);
    const answer = document.getElementById("showingSolution");
    answer.innerHTML = `<h3> Solution :- </h3>${QusetionBank[CurrQuestion].solution}`;

    // setallbButtonisClick(true)
  }
  // console.log("QuestionChecker[CurrQuestion].solution",QusetionBank[CurrQuestion].solution)

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

    // const corrOpt = document.getElementById('showungCorrectOption')
    // corrOpt.innerHTML = ''
  }

  function ShowingCorrectOption() {
    // const answer = document.getElementById('showungCorrectOption')
    // answer.innerHTML = `Correct Answer is <b>Option ${correctOptionId[0]}</b>`
    setAfterWrongAnswerShow(true);
  }

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

  function optionChooseFun(X) {
    setOptionChoosen(X);
  }

  return (
    <div className="Quiz">
      {/* /*------------------------------------Header-----------------------------------------*/}

      <Header headerButRedirect={headerButRedirect} />

      {/* /*------------------------------------Question portion-----------------------------------------*/}

      <QuestionPortion
        Alpoption={Alpoption}
        optionChooseFun={optionChooseFun}
        optionChoosen={optionChoosen}
        btnDisable={btnDisable}
      />

      {/* /*------------------------------------submit Portion-----------------------------------------*/}
      {!submitisClick ? (
        <div className="submit">
          {/* {console.log("QusetionBank[CurrQuestion].is_solved.submitisClick",QusetionBank[CurrQuestion].is_solved.submitisClick)} */}
          <button className="btn btn-primary" onClick={QuestionChecker}>
            Submit
          </button>
        </div>
      ) : (
        <div className="AfterSubmit">
          {OptionIsRight == true && (
            <div className="AfterSubmit">
              <div id="message" className="text-success">
                {" "}
                {messages.right}{" "}
              </div>
              {!showSolutionClick && (
                <button
                  className="container text-center btn btn-outline-primary ShowSolution"
                  onClick={ShowingFullTextSoluiton}
                >
                  Show Solution
                </button>
              )}
            </div>
          )}

          {OptionIsRight == false && (
            <ChooseOptionIsNotRight
              messages={messages}
              AfterWrongAnswerShow={AfterWrongAnswerShow}
              correctOptionId={correctOptionId}
              showSolutionClick={showSolutionClick}
              IwillTryAgain={IwillTryAgain}
              CurrQuestion={CurrQuestion}
              ShowingCorrectOption={ShowingCorrectOption}
              ShowingFullTextSoluiton={ShowingFullTextSoluiton}
            />
          )}
        </div>
      )}

      <div id="showingSolution"> </div>

      {/* /*------------------------------------------ Next and Previous Buttons -------------------------------*/}

      <NextAndPRev CurrQuestion={CurrQuestion} pageHandler={pageHandler} />
    </div>
  );
}
