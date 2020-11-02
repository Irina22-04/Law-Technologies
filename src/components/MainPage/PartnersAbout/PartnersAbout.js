import React from "react";
import './PartnersAbout.css';
import {Button} from "../Button/Button";

export const PartnersAbout = () => {
    return (
        <div className='partners-about'>
            <div className='partners-about-article main-text'>
                <div className='partners-about-text'>
                    Оказываем юридические услуги юридическим лицам и индивидуальным предпринимателям. Специализируемся в
                    области хозяйственного права, работаем на всей территории Республики Беларусь, а также за ее
                    пределами, с бизнесом любого масштаба.
                </div>
                <div className='partners-button'>
                    <Button title={'Наши партнеры'}/>
                </div>
            </div>
            <div className='partners-logo'>
                <div className='parner-logo'>
                    <img src={'./images/logo/bau_arenda.jpg'} alt='logo'/>
                </div>
                <div className='parner-logo'>
                    <img src={'./images/logo/titan.jpg'} alt='logo'/>
                </div>
                <div className='parner-logo'>
                    <img src={'./images/logo/favorit.jpg'} alt='logo'/>
                </div>
                <div className='parner-logo'>
                    <img src={'./images/logo/alfa.jpg'} alt='logo'/>
                </div>
                <div className='parner-logo'>
                    <img src={'./images/logo/IBA.jpg'} alt='logo'/>
                </div>
            </div>
        </div>
    )
};