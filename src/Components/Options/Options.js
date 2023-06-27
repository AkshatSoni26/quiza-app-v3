import React from 'react'

export default function Options({ options, Alpoption, option, optionChoosen, btnDisable, optionChooseFun }) {
  return (
    (options).map(
      (option, index) => {
        return <div key={index} className='option'>
          <button

            onClick={() => optionChooseFun(Alpoption[index])}

            className={`btn ${((optionChoosen == Alpoption[index])) ? "btn-primary" : "btn-outline-primary"} option`}
            dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }}
            disabled={btnDisable}/>
    </div>
      }
    )
    
  )
}
