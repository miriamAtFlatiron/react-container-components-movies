// Code MovieReviews Here
import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({ reviews }) => 
<div className = "review-list">
    {reviews.map(review => 
        <MovieReview 
            key = {review.index}
            byline = {review.byline}
            headline = {review.headline}
            link = {review.link.url}
            summary = {review.summary_short}
            name = {review.display_title}
        />
        )}

</div>

export default MovieReviews