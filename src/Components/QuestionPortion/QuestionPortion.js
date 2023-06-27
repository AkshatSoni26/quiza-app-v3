import React, { useContext, useState } from 'react'
import Options from '../Options/Options'
import { Helper } from '../../Helper/Helper'
import MCOptions from '../Options/MCOptions'
import Numerical from '../Options/Numerical'

export default function QuestionPortion({ btnDisable }) {

    const { CurrQuestion, QusetionBank, setOptionChoosen, Alpoption, optionChoosen } = useContext(Helper)

    
    function optionChooseFun(X) {
        setOptionChoosen(X);
    }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                {
                    console.log('QusetionBank', QusetionBank)
                }
                {QusetionBank.map(

                    (Question, index) => {
                        return (

                            <div key={index} className={`carousel-item ${index === CurrQuestion ? "active" : ''} `}>

                                {
                                    <div>
                                        <h4>{Question.question_type}</h4>

                                        <h3 dangerouslySetInnerHTML={{ __html: Question.question_text }} />

                                        {(Question.question_type == 'single-correct') &&

                                            <div id={`Options-${index}`}>
                                                <Options options={Question.options} Alpoption={Alpoption} optionChooseFun={optionChooseFun} optionChoosen={optionChoosen} btnDisable={btnDisable} />
                                            </div>
                                        }

                                        {
                                            (Question.question_type == 'numerical') &&
                                            <Numerical Alpoption={Alpoption} optionChoosen={optionChoosen} btnDisable={btnDisable} />
                                        }

                                        {
                                        (Question.question_type == 'multiple-correct') &&
                                            <div id={`Options-${index}`}>
                                                <MCOptions options={Question.options} Alpoption={Alpoption} optionChoosen={optionChoosen} btnDisable={btnDisable} />
                                            </div>
                                        }
                                               
                                        
                                    </div>

                                }

                            </div>
                        )
                    }

                )
                }
            </div>

        </div>
    )
}
