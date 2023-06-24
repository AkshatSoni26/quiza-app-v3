import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'

export default function Header({headerButRedirect}) {
    const { QusetionBank,CurrQuestion } = useContext(Helper)
  return (
    
    <div className='header'>
    {
        QusetionBank.map(
            (ob, i) => {
                return <button key={i} className={` ${i === CurrQuestion ? "btn btn=primary headerbtn" : '"btn btn-outline=primary'} `} onClick={() => headerButRedirect(i)}>{i + 1}</button>
            }
        )
    }
</div>
  )
}
