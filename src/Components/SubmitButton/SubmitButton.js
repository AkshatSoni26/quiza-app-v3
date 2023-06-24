import React from 'react'

export default function SubmitButton({submitisClick, QuestionChecker, OptionIsRight, ShowingFullTextSoluiton, IwillTryAgain,ShowingCorrectOption}) {
  return (
    
        (!submitisClick)
            ?

            <div className='submit'>
                <button className='btn btn-primary' onClick={() => QuestionChecker()}>Submit</button>
            </div>
            :
            <div className='AfterSubmit'>


                {OptionIsRight == true &&
                    <div className='AfterSubmit'>
                        <button className='container text-center btn btn-outline-primary ShowSolution' onClick={() => ShowingFullTextSoluiton()}>Show Solution</button>
                    </div>}
                {OptionIsRight == false &&
                    <div>
                        <button className='btn btn-primary IwillTryAgain' onClick={() => IwillTryAgain()} > I will Try Again </button>
                        <button className='btn btn-primary ShowingCorrectOption' onClick={() =>ShowingCorrectOption()} > Show Solution </button>
                    </div>}

            </div>
    
  )
}
