import React from "react";
import './AboutUsCard.css';

export const AboutUsCard = ({content, choosen}) => {
    return (
        <div className='about-us-card'>
            <div className='about-card-title about-title'>
                {content.title}
            </div>
            <div className='about-card-text'>
                {content.text}
            </div>
            {choosen ? (
                <div className='choosen-card'>
                    <img alt='triangle' src={'./images/icons/triangle.svg'}/>
                </div>
            ) : null}
        </div>
    )
};