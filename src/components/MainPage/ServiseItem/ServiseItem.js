import React from "react";
import './ServiseItem.css';

export const ServiseItem = ({name, line, position}) => {
    return (
        <div className={`servise-item ${line}-${position}-item`}>
            <div className={`servise-side ${line}-side`}/>
            <div className='servise-name'>{name}</div>
            <div className='details-link servise-link'>ПОДРОБНЕЕ</div>
        </div>
    )
};