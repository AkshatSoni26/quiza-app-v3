import React, { useContext, useState } from 'react'
import { Helper } from '../../Helper/Helper'
import QuestionPortion from '../QuestionPortion/QuestionPortion'

const MCOptions = ({ index, Alpoption, option, btnDisable, optionChooseFun }) => {

    const { QuestionBank, optionChoosen, setOptionChoosen, CurrQuestion, correctOptionId } = useContext(Helper)

    const [multiple, setMultiple ] = useState([])

    function multipleFun(i,index) {
        if (!multiple?.includes(i)){
        const updatedOptions = [...multiple];
        updatedOptions[index] = i
        setMultiple(updatedOptions)
        console.log('under if condition',correctOptionId)
                console.log('i',i) 
            }
        else {
            const updataeOPtions = [...multiple]
            console.log('updataeOPtions',updataeOPtions)
            updataeOPtions[index] = undefined
            setMultiple(updataeOPtions)
            console.log('under else condition',correctOptionId)
        }
         
    }


    return (
        <button
            // onClick={() => MCoptionChooseFun([Alpoption[index], option.option_id] , index)}
            onClick={() => multipleFun(option.option_id,index)}
            className={`btn ${( multiple[index] == (option.option_id) )? "btn-primary" : "btn-outline-primary"} option`}
            dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }}
            disabled={btnDisable}
        />
    )
}

export default MCOptions
