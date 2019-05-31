import React from 'react';

import './AverageRating.css';

export default function AverageRating() {
    const rating = 3.625;

    const ratingStars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            ratingStars.push(<a key={i} className="star-selected" ><div style={{ width: "100%" }}>★</div></a>)
        } else if (i - rating < 1) {
            ratingStars.push(<a key={i} className="star-selected"><div style={{ width: `${100 * (rating - Math.floor(rating))}%` }}>★</div></a>)
        } else {
            ratingStars.push(<a key={i} className="star-selected"><div>★</div></a>)
        }
    }

    return (
        <div className="AverageRatingContainer">
            <div className="RatingBoardContainer__Header">Average Rating</div>
            <div className="AverageRatingContainer__Rating">{rating}</div>
            <div>

                {ratingStars}

            </div>
        </div>
    );
}

