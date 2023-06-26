import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'
import QuestionPortion from '../QuestionPortion/QuestionPortion'

const MCOptions = ({ index, Alpoption, option, btnDisable, optionChooseFun }) => {

    const { QuestionBank,optionChoosen, setOptionChoosen, CurrQuestion } = useContext(Helper)

    function MCoptionChooseFun(x) {
        console.log('McOPtionChoosen', x)

        optionChoosen[index] = x    
        console.log("optionChoosen", optionChoosen)             // Options choose Array =[[], [], [], []]

        console.log("QuestionBank", QuestionBank)
    }


    return (
        <button

            onClick={() => MCoptionChooseFun([Alpoption[index], option.option_id])}

            className={`btn ${((optionChoosen[1] == option.option_id)) ? "btn-primary" : "btn-outline-primary"} option`}
            dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }}
            disabled={btnDisable}

        />
    )
}

export default MCOptions
