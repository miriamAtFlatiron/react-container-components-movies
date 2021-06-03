// Code MovieReviews Here
import React from 'react'
// import MovieReview from './MovieReview'

const MovieReviews = ({ reviews }) => {

    (console.log(reviews)) 
    return (


        <div  className="review">
            {reviews.map(review => {
                
                    // keyIndex={review.link.url}
                    {review.byline}
                    // headline={review.headline}
                    // link={review.link.url}
                    // summary={review.summary_short}
                    // name={review.display_title}
            }
            )}
        </div>




    )
}

export default MovieReviews

