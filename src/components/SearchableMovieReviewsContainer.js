import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'puYTTlSpsHu4HmA4bx9i29WG6nMvbrxg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ''
    }
    
    handleSearchInputChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className = "searchable-movie-reviews">
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" onChange = {this.handleSearchInputChange}/>
                    <button type="submit">Submit</button>
                    <MovieReviews reviews={this.state.reviews}/>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
