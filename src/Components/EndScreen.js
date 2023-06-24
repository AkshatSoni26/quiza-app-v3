import React, { useContext } from 'react'
import { Helper } from '../Helper/Helper'

export default function EndScreen() {

    const { QusetionBank, score, setScore, setGamestate } = useContext(Helper)

  return (
    <div>{score}</div>
  )
}
