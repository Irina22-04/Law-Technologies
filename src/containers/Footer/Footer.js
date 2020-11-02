import React from "react";
import './Footer.css';
import {FooterAbout} from "../../components/Footer/FooterAbout/FooterAbout";
import {FooterStructure} from "../../components/Footer/FooterStructure/FooterStructure";
import {FooterWorkHours} from "../../components/Footer/FooterWorkHours/FooterWorkHours";

export const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <hr/>
            <div className='footer'>
                <FooterAbout/>
                <FooterStructure/>
                <FooterWorkHours/>
            </div>
            <div className='develop simple-text'>
                <div>
                    Разработка и продвижение сайта - Digital агентство «Веб Фокус»
                </div>
            </div>
        </div>
    )
};