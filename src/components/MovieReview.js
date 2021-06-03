import React from 'react'

const MovieReview = ({keyIndex, name, byline, headline, link, summary}) => {
    return (
        <div key={keyIndex} className="review">
            <h1>{name}</h1>
        </div>
    )
}

export default MovieReview
