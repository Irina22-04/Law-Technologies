import React from "react";
import './Advantages.css';
import {Advantage} from "../Advantage/Advantage";

export const Advantages = () => {
    return (
        <div className='advantages'>
            <Advantage name={'Надежная защита'} image={'./images/icons/protection.svg'}/>
            <Advantage name={'Безупречная репутация'} image={'./images/icons/reputation.svg'}/>
            <Advantage name={'Ориентированность на результат'} image={'./images/icons/result.svg'}/>
            <Advantage name={'Абсолютная конфеденциальность'} image={'./images/icons/confident.svg'}/>
        </div>
    )
};