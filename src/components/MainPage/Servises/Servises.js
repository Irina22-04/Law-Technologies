import React from "react";
import './Servises.css';
import {ServisesLine} from "../ServisesLine/ServisesLine";
import {ServiseArticle} from "../ServiseArticle/ServiseArticle";

export const Servises = () => {
    const servises = [
        'Регистрация ИП и юрлиц',
        'Ликвидация, реорганизация и продажа бизнеса',
        'Взыскание дебиторской задолженности',
        'Письменные и устные консультации',
        'Разработка уставных документов и внесение изменений в них',
        'Ведение переговоров',
        'Комплексное сопровождение бизнеса',
        'Сопровождение деловых сделок',
        'Лицензирование бизнеса',
        'Решение правовых споров',
    ];
    return (
        <div className='servises'>
            <div className='servises-title main-title'>Перечень оказываемых услуг</div>
            <ServisesLine item1={servises[0]} item2={servises[1]} line={'first'}/>
            <ServisesLine item1={servises[2]} item2={servises[3]} line={'second'}/>
            <ServisesLine item1={servises[4]} item2={servises[5]} line={'third'}/>
            <ServisesLine item1={servises[6]} item2={servises[7]} line={'second'}/>
            <ServisesLine item1={servises[8]} item2={servises[9]} line={'first'}/>
            <ServiseArticle/>
        </div>
    )
};