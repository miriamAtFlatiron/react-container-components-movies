import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'puYTTlSpsHu4HmA4bx9i29WG6nMvbrxg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInputChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL + this.state.searchTerm)
            .then(res => res.json())
            .then(response => this.setState({
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
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
