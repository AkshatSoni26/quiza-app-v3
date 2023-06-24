import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'

export default function Header({headerButRedirect}) {
    const { QusetionBank} = useContext(Helper)
  return (
    
    <div className='header'>
    {
        QusetionBank.map(
            (ob, i) => {
                return <button key={i} className='btn btn-primary headerBtn' onClick={() => headerButRedirect(i)}>{i + 1}</button>
            }
        )
    }
</div>
  )
}
