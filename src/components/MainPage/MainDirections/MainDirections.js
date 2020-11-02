import React from "react";
import './MainDirections.css';
import {Direction} from "../Direction/Direction";
import {Button} from "../Button/Button";
import {DirectionArticle} from "../DirectionsArticle/DirectionsArticle";

export const MainDirections = () => {
    const title = 'Основные направления деятельности';
    return (
        <div className='directions-wrapper'>
            <div className='directions-title main-title'>
                {title}
            </div>
            <div className='direction-board'>
                <Direction name='Взыскание долгов' image={'./images/icons/debt.svg'}/>
                <Direction name='Реорганизация бизнеса' image={'./images/icons/reorganisation.svg'}/>
                <Direction name='Продажа бизнеса' image={'./images/icons/sale.svg'}/>
                <Direction name='Юридические консультации' image={'./images/icons/consultation.svg'}/>
                <Direction name='Ликвидация организаций' image={'./images/icons/liquidation.svg'}/>
                <Direction name='Разработка договоров' image={'./images/icons/contract.svg'}/>
                <Direction name='Регистрация бизнеса' image={'./images/icons/registration.svg'}/>
                <Direction name='Юридический аутсорсинг' image={'./images/icons/outsourcing.svg'}/>
                <Direction name='Аттестация в сторительстве' image={'./images/icons/certification.svg'}/>
            </div>
            <Button title={'Все услуги'}/>
            <DirectionArticle title={title}/>
        </div>
    )
};