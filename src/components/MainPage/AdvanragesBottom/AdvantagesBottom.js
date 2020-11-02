import React from "react";
import './AdvantageBottom.css';
import {Advantage} from "../Advantage/Advantage";

export const AdvantagesBottom = () => {
    return (
        <div className='advantage-bottom-wrapper'>
            <div className='advantage-title main-title'>Наши преимущества</div>
            <div className='advantage-bottom-container'>
                <Advantage
                    name={'Лицензия на оказание юридических услуг'}
                    image={'./images/icons/our-sertificate.svg'}
                    bigCard={true}
                />
                <Advantage
                    name={'Опытные сотрудники'}
                    image={'./images/icons/stuff.svg'}
                    bigCard={true}
                />
                <Advantage
                    name={'Коммуникативные навыки – без труда открываем любые двери и быстро решаем нужные вопросы'}
                    image={'./images/icons/communication.svg'}
                    bigCard={true}
                />
                <Advantage
                    name={'Скрупулезный поход к ведению документации'}
                    image={'./images/icons/documentation.svg'}
                    bigCard={true}
                />
            </div>
            <div className='advantage-article main-text'>
                <div className='advantage-article-text'>
                    Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и
                    «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт.
                    Мы объективно оцениваем риски и тщательно анализируем каждый случай.
                </div>
                <div className='advantage-article-triangle'>
                    <img alt='triangle' src={'./images/icons/triangle.svg'}/>
                </div>
            </div>
        </div>
    )
};