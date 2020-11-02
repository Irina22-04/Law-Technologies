import React from "react";
import './FooterStrucrure.css';
import {Department} from "../Department/Department";

export const FooterStructure = () => {
    const departments = [
        {
            title: 'Отдел в Могилеве',
            adress: 'г. Могилев, ул. Космонавтов, \n' +
            'д. 19, оф. 507\n',
            email: 'mogilev@jurisprudent.by\n',
        },
        {
            title: 'Отдел в Бресте',
            adress: 'г. Брест, б-р Шевченко, д. 4, \n' +
            'оф. 401\n',
            email: 'brest@jurisprudent.by\n' +
            '\n',
        },
        {
            title: 'Отдел в Витебске',
            adress: 'г. Витебск, ул.Гоголя, д. 14, \n' +
            'оф. 614\n' +
            '\n',
            email: 'vitebsk@jurisprudent.by\n' +
            '\n',
        },
        {
            title: 'Отдел в Гродно',
            adress: 'г. Гродно, ул. Карла Маркса, \n' +
            'д. 31-1, оф. 1010',
            email: 'grodno@jurisprudent.by\n',
        },
        {
            title: 'Отдел в Гомеле',
            adress: 'г. Гомель, пр. Ленина, д. 10, \n' +
            'оф. 901\n',
            email: 'gomel@jurisprudent.by\n' +
            '\n',
        }
    ];

    return (
        <div className='footer-structure'>
            <div className='footer-section-title'>Наши офисы</div>
            <hr/>
            <div className='contacts'>
                <div className='main-office-contacts'>
                    <div className='subtitle'>Контакты в Минске</div>
                    <div className='simple-text phone'>
                        <div>+375 (44) 755-01-01</div>
                        <div>+375 (29) 550-01-01</div>
                        <div>+375 (17) 374-40-60</div>
                    </div>
                    <div className='important-text adress'>Адрес</div>
                    <div className='simple-text main-adress'>г. Минск, ул. Широкая, д. 3, <br/>пом. 146, оф. 4</div>
                    <div className='important-text'>Телефон для связи резидентов Российской Федерации</div>
                    <div className='simple-text main-adress'>whatsapp +7 (989) 166 24 00</div>
                    <div className='important-text'>info@jurisprudent.by</div>
                </div>
                <div className='office-contacts middle-container'>
                    <Department contacts={departments[0]}/>
                    <Department contacts={departments[1]}/>
                    <Department contacts={departments[2]}/>
                </div>
                <div className='office-contacts'>
                    <Department contacts={departments[3]}/>
                    <Department contacts={departments[4]}/>
                </div>
            </div>

        </div>
    )
};