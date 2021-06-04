import React from 'react'

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
          <blockquote> {summary} </blockquote>
      </div>
      )
}

export default MovieReview
