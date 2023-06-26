import React, { useContext } from 'react'
import Options from '../Options/Options'
import { Helper } from '../../Helper/Helper'
import MCOptions from '../Options/MCOptions'

export default function QuestionPortion({ Alpoption, optionChooseFun, optionChoosen, btnDisable }) {

    const { CurrQuestion, QusetionBank } = useContext(Helper)

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

                                        {Question.question_type == 'single-correct' ?
                                            <>

                                                <div id={`Options-${index}`}>
                                                    {
                                                        (Question.options).map(
                                                            (option, index) => {
                                                                return <div key={index} className='option'>

                                                                    <Options index={index} Alpoption={Alpoption} optionChooseFun={optionChooseFun} option={option} optionChoosen={optionChoosen} btnDisable={btnDisable} />

                                                                </div>
                                                            }
                                                        )
                                                    }
                                                </div>
                                            </>
                                            :
                                            Question.question_type == 'multiple-correct' ?

                                            <>

                                            <div id={`Options-${index}`}>
                                                {
                                                    (Question.options).map(
                                                        (option, i) => {
                                                            return <div key={i} className='option'>

                                                                <MCOptions index={i} Alpoption={Alpoption}  option={option} optionChoosen={optionChoosen} btnDisable={btnDisable} />

                                                            </div>
                                                        }
                                                    )
                                                }
                                            </div>
                                        </>
                                    :
                                    null
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
