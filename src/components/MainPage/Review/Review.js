import React from "react";
import './Review.css';

export const Review = ({review}) => {
    return (
        <div className='review'>
            <div className='review-image' />
            <div className='review-wrapper'>
                <div className='review-job review-content main-text'>{review.job}</div>
                <div className='review-name review-content'>{review.name}</div>
                <div className='review-text review-content'>{review.text}</div>
                <div className='review-link'>ЧИТАТЬ ДАЛЕЕ</div>
            </div>
        </div>
    )
};