import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'
import '../../App.css'

export default function NextAndPRev({CurrQuestion, pageHandler}) {

    const {QusetionBank, setGamestate} = useContext(Helper)

  return (
    
      <footer>
      {(CurrQuestion < (QusetionBank.length - 1)) ?
        
        (CurrQuestion == 0) ?
        <div className=' NextandPrev'>
        <button className='btn btn-success' onClick={() => pageHandler('+')} > Next </button>
        </div>
        
        : <div className='NextandPrev'>
        <button className='btn btn-success'  onClick={() => pageHandler('-')} > Prev </button>
        <button className='btn btn-success'  onClick={() => pageHandler('+')} > Next </button>
        </div>
        
        
        :
        
        <div className='NextandPrev'>
        <button className='btn btn-success'  onClick={() => setGamestate("end-screen")} > submit Quiz </button>
        </div>
    }

    </footer>
    
  )
}
