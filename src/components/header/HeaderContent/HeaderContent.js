import React from "react";
import {Language} from "../Language/Language";
import './HeaderContent.css';
import {HeaderContacts} from "../HeaderContacts/HeaderContacts";

export const HeaderContent = () => {
    return (
        <div className='header-content-wrapper'>
            <div className='header-add-info'>
                <Language/>
                <img className='header-eye' src={'./images/icons/eye.svg'} alt={'eye'}/>
                <HeaderContacts />
            </div>
        </div>
    )
};