import React from "react";
import './CostServiсe.css';
import {Button} from "../Button/Button";

export const CostService = () => {
    return (
        <div className='cost-service'>
            <div className='cost-service-title main-title'>
                Стоимость юридических услуг в Минске
            </div>
            <div className='cost-service-text main-text'>
                Стоимость услуг формируется согласно тарифам, установленным в компании и в зависимости от времени,
                затраченного юристом на разрешение возникшей ситуации. Принцип прозрачности делает наши цены
                обоснованными и понятными для клиента.
            </div>
            <Button title={'Тарифы'}/>
        </div>
    )
};