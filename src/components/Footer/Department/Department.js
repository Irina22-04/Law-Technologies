import React from "react";
import './Department.css';

export const Department = ({contacts}) => {
    return (
        <div className='department'>
            <div className='subtitle'>{contacts.title}</div>
            <div className='important-text adress'>Адрес</div>
            <div className='simple-text department-adress'>{contacts.adress}</div>
            <div className='important-text'>{contacts.email}</div>
        </div>
    )
};