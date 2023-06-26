import React from 'react'

const ShowingSoltution = ({showSolutionClick, solution}) => {
  return (
   showSolutionClick ?
    <div>
      <h3> Solution :- </h3>

      {solution}
    </div>

    :
    null
  )
}

export default ShowingSoltution;
