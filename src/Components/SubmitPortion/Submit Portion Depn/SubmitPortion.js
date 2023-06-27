import React from 'react'

export default function SubmitButton({ QuestionChecker }) {
    return (
        <div className="submit">
            <button className="btn btn-primary" onClick={QuestionChecker}>
                Submit
            </button>
        </div>
    )
}
