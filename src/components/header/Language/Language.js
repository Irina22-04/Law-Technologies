import React from "react";
import './Language.css';

export const Language = () => {
    return (
        <div className='language-wrapper'>
            <div className='language'>Язык</div>
            <div className='choosen-language'>русский</div>
            <img className='language-arrow' src={'./images/icons/arrow-down.svg'} alt={'arrow'}/>
        </div>
    )
};