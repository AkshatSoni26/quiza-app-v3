import React, { useContext, useState } from 'react'
import { Helper } from '../../Helper/Helper'
import QuestionPortion from '../QuestionPortion/QuestionPortion'

const MCOptions = ({  Alpoption, btnDisable, optionChooseFun,  options}) => {

  const { optionChoosen, setOptionChoosen } = useContext(Helper)

  console.log('multiple under th MCoption', optionChoosen)

  function multipleFun(i) {

    if (!optionChoosen.includes(i)) {
      // console.log('multiple under multipleFun', optionChoosen)

      // Add the element to the array if it's not already present
      // console.log(' multipleFun Add the element to the array if its not already present', [...optionChoosen, i])
      setOptionChoosen([...optionChoosen, i]);
    } else {
      // Remove the element from the array if it's already present
      const updatedOptions = optionChoosen.filter((option) => option !== i);
      setOptionChoosen(updatedOptions);
      // console.log('multipleFun Remove the element from the array if its already present', updatedOptions)
    }
  }



  return (

    (options).map(
      (option, i) => {
        return <div key={i} className='option'>
          <button
            // onClick={() => MCoptionChooseFun([Alpoption[index], option.option_id] , index)}
            onClick={() => multipleFun(Alpoption[i])}
            className={`btn ${(optionChoosen.includes(Alpoption[i])) ? "btn-primary" : "btn-outline-primary"} option`}
            dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[i]}.)</span>` + option.option_value }}
            disabled={btnDisable}
          />
        </div>
      }
    )
  )
}


{/* <button

onClick={() => optionChooseFun(Alpoption[index]) }

className={`btn ${((optionChoosen == Alpoption[index])) ? "btn-primary" : "btn-outline-primary"} option`}
dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }}
disabled={btnDisable}

/> */}

export default MCOptions
