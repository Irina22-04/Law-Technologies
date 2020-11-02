import React from "react";
import './HeaderContacts.css';

export const HeaderContacts = () => {
    return (
        <div className='header-contacts-wrapper'>
            <span className='header-phone first-header-phone'>+ 375 (44) 755-01-01</span>
            <img className='phone-icon' src={'./images/icons/a1.svg'} alt={'a1'}/>
            <img className='phone-icon' src={'./images/icons/viber.svg'} alt={'viber'}/>
            <img className='phone-icon' src={'./images/icons/whatsapp.svg'} alt={'whatsapp'}/>
            <span className='header-phone'>+375 (29) 550-01-01</span>
            <img className='phone-icon-right' src={'./images/icons/mts.svg'} alt={'mts'}/>
        </div>
    )
};