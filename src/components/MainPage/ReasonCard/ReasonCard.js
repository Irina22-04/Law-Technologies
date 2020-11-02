import React from "react";
import './ReasonCard.css';

export const ReasonCard = ({reason}) => {
    return (
        <div className='reason-card'>
            <div className='reason-article'>
                <div className='reason-title main-title'>
                    {reason.title}
                </div>
                <div className='reason-text main-text'>
                    {reason.text}
                </div>
            </div>
            <div className='reason-goals'>
                {reason.reasons.map((item, index) => {
                    return (
                        <div key={`goal${index}`} className='goal'>
                            <div className='goal-image'><img src={'./images/icons/goal.svg'} alt='goal'/></div>
                            <div className='goal-text'>{item}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};