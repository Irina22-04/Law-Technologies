import React from "react";
import './PartnershipForm.css';
import {Button} from "../Button/Button";

export const PartnershipForm = () => {
    return (
        <div className='partnership-form'>
            <div className='form-name'>Ваше имя</div>
            <input type='text' placeholder={'Ваше имя'}/>
            <div className='form-name'>Телефон для связи</div>
            <input type='text' placeholder={'+375 (ХХ) ХХХ-ХХ-ХХ'}/>
            <div className='text-link-private'>
                Нажимая на кнопку «Получить консультацию», вы соглашаетесь с
                условиями <span>Политики конфиденциальности</span>
            </div>
            <Button
                title={'Получить консультацию'}
                bigButton={true}
            />
        </div>
    )
};