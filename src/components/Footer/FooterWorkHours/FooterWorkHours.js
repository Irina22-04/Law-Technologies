import React from "react";
import './FooterWorkHours.css';

export const FooterWorkHours = () => {
    return (
        <div className='footer-work-hours'>
            <div className='footer-section-title'>Время работы</div>
            <hr/>
            <div className='important-text hours-info'>Прием посетителей</div>
            <div className='simple-text hours-info-text'>Ежедневно с 8.00 до 19.00
                Выходной: суббота - воскресенье.
            </div>
            <div className='important-text hours-info'>Прием звонков</div>
            <div className='simple-text hours-info-text'>Ежедневно с 8.00 до 22.00
                Без выходных
            </div>
            <div className='important-text hours-info'>Онлайн консультант</div>
            <div className='simple-text hours-info-text'>Круглосуточно 24/7
                Без выходных
            </div>
        </div>
    )
};