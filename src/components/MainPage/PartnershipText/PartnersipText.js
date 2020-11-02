import React from "react";
import './PartnershipText.css';

export const PartnershipText = () => {
    return (
        <div className='partnership-text'>
            <div className='partnership-title main-title'>Организация сотрудничества</div>
            <div className='partnership-step'>
                <div className='step-digit'>
                    <img alt='digit 1' src={'./images/icons/step_1.svg'}/>
                </div>
                <div className='step-text main-text'>
                    Установив контакт с нашим сотрудником, Вы оговорите нюансы предмета обсуждения и согласуете
                    личную встречу.
                </div>
            </div>
            <div className='partnership-step'>
                <div className='step-digit'>
                    <img alt='digit 2' src={'./images/icons/step_2.svg'}/>
                </div>
                <div className='step-text main-text'>
                    Юрист изучит документы, необходимые для разработки стратегии решения возникшей ситуации. И
                    заключит договор.
                </div>
            </div>
            <div className='partnership-paragraph'>
                Также в нашей компании возможна удаленная форма обслуживания с оказанием полного комплекса юридических
                услуг в РБ через современные средства связи и мессенджеры.
            </div>
        </div>
    )
};