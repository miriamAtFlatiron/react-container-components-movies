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



    componentWillMount() {
        fetch(URL)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(response => 
                this.setState({
                reviews: response.results.map(
                    review => ({
                        name: review.display_title,
                        byline: review.byline,
                        headline: review.headline,
                        link: review.link.url,
                        summary: review.summary_short,
                    })
                )
            }));
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer


