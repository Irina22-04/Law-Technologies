import React from "react";
import './Direction.css';

export const Direction = ({name, image}) => {

    return (
        <div className='direction-item'>
            <div className='direction-name'>{name}</div>
            <div className='direction-link details-link'>ПОДРОБНЕЕ</div>
            <div className='direction-image'><img src={`${image}`} alt='direction'/></div>
        </div>
    )
};