import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'

export default function Numerical() {

    const {NumAnswer, setNumAnswer} = useContext(Helper)

    // console.log("NumAnswer",NumAnswer)

  return (
    <input name="myInput" value={NumAnswer} onChange={(e) => setNumAnswer(e.target.value)}/>
  )
}
