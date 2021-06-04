import React from 'react'

//use headline, or any other unique attribute, as key
const MovieReview = ({name, byline, headline, link, summary}) => {
  return (
    <div key={headline} className="review"> 
        <header>
          <a className="review-link" href= {link.url}>
           {headline}
           </a>
             <br/>
           <div className="author"> {byline} </div>
          </header>
          <p> {summary} </p>
      </div>
      )
}

export default MovieReview
