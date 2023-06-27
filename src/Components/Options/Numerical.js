import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'

export default function Numerical() {

    const {NumAnswer, setNumAnswer} = useContext(Helper)

    console.log("NumAnswer",NumAnswer)

  return (
    <input name="myInput" value={NumAnswer} onChange={(e) => setNumAnswer(e.target.value)}/>
  )
}


{/* <button

onClick={() => optionChooseFun(Alpoption[index]) }

className={`btn ${((optionChoosen == Alpoption[index])) ? "btn-primary" : "btn-outline-primary"} option`}
dangerouslySetInnerHTML={{ __html: `<span>${Alpoption[index]}.)</span>` + option.option_value }}
disabled={btnDisable}

/> */}