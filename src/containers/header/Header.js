import React from "react";
import './Header.css';
import {HeaderContent} from "../../components/header/HeaderContent/HeaderContent";
import {HeaderLogo} from "../../components/header/HeaderLogo/HeaderLogo";
import {HeaderNavigation} from "../../components/header/HeaderNavigation/HeaderNavigation";

export const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <HeaderContent/>
                <div className='header-main-content'>
                    <HeaderLogo/>
                    <div className='header-navigation'>
                        <HeaderNavigation/>
                    </div>
                </div>
            </div>
        </header>
    );
};