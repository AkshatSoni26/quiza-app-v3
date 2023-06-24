import React, { useContext } from 'react'
import { Helper } from '../../Helper/Helper'

export default function NextAndPRev({CurrQuestion, pageHandler}) {

    const {QusetionBank, setGamestate} = useContext(Helper)

  return (
    
        (CurrQuestion < (QusetionBank.length - 1)) ?

            (CurrQuestion == 0) ?
                <div className='NextandPrev'>
                    <button onClick={() => pageHandler('+')} > Next </button>
                </div>

                : <div className='NextandPrev'>
                    <button onClick={() => pageHandler('-')} > Prev </button>
                    <button onClick={() => pageHandler('+')} > Next </button>
                </div>


            :

            <div className='NextandPrev'>
                <button onClick={() => setGamestate("end-screen")} > submit Quiz </button>
            </div>

    
  )
}
