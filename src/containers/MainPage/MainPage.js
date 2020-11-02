import React from "react";
import './MainPage.css';
import {Slider} from "../../components/MainPage/Slider/Slider";
import {Advantages} from "../../components/MainPage/Advantages/Advantages";
import {Article} from "../../components/MainPage/Article/Article";
import {MainDirections} from "../../components/MainPage/MainDirections/MainDirections";
import {Partners} from "../../components/MainPage/Partners/Partners";
import {AboutUs} from "../../components/MainPage/AboutUs/AboutUs";
import {Servises} from "../../components/MainPage/Servises/Servises";
import {Reason} from "../../components/MainPage/Reason/Reason";
import {AdvantagesBottom} from "../../components/MainPage/AdvanragesBottom/AdvantagesBottom";
import {Partnership} from "../../components/MainPage/Partnership/Partnership";
import {CostService} from "../../components/MainPage/CostServiсe/CostService";
import {AddSlider} from "../../components/MainPage/AddSlider/AddSlider";

export const MainPage = () => {
    return (
        <div className='main-page'>
            <Slider/>
            <div className='color-background'>
                <Advantages/>
                <Article/>
                <MainDirections/>
                <AddSlider/>
            </div>
            <Partners/>
            <div className='color-background about-section'>
                <AboutUs/>
                <div className='background'/>
                <Servises/>
            </div>
            <Reason/>
            <div className='color-background'>
                <AdvantagesBottom/>
                <Partnership/>
                <CostService/>
            </div>
        </div>
    )
};