import React from 'react'

export default function ShowSolution({ShowingFullTextSoluiton}) {
    return (
        <button
            className="container text-center btn btn-outline-primary ShowSolution"
            onClick={ShowingFullTextSoluiton}
        >
            Show Solution
        </button>
    )
}
