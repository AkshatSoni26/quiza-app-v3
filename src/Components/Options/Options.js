import React from 'react'

export default function Options( { index, Alpoption, option, optionChoosen, btnDisable, optionChooseFun } ) {
  return (
    <button

    onClick={() => optionChooseFun([Alpoption[index], option.option_id]) }

    className={`btn ${((optionChoosen[1] == option.option_id)) ? "btn-primary" : "btn-outline-primary"} option`}
    dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }}
    disabled={btnDisable}
    
/>
  )
}
