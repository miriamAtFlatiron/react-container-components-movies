import React from 'react'
import MovieReview from './MovieReview'



const MovieReviews = ({reviews}) => {
  
    console.log("Reviews", reviews)
  
    return (
      <div className="review-list">
      {reviews.map(MovieReview)}
    </div>
    )
  }


  MovieReviews.defaultProps = {
      reviews: []
    };


export default MovieReviews

