import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'puYTTlSpsHu4HmA4bx9i29WG6nMvbrxg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }
//changed from componentWillMount -- deprecated  
    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            
            .then(response => {
              this.setState({reviews: response.results})
            })
    }

    render() {
      
        return (

            <div className="latest-movie-reviews">
              <p>Reviews</p>
              <MovieReviews reviews={this.state.reviews} />
              
            </div>
        )
    }
}

export default LatestMovieReviewsContainer

