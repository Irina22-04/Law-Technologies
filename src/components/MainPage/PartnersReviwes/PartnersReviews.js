import React from "react";
import './PartnersReviews.css';
import {Review} from "../Review/Review";
import {Button} from "../Button/Button";

export const PartnersReviews = () => {
    const reviews = [
        {
            name: 'С.В.Косачев',
            job: 'директор',
            text: 'важаемая Светлана Александровна! Наша компания выражает благодарность и признательность обществу ' +
            'с ограниченной ответственностью «МК-Правовые технологии». Благодаря слаженной работе и высокой ' +
            'квалификации Ваших сотрудников и специалистов компания «ВиваСтрой» получила качественные юридические ' +
            'услуги по взысканию денежных средств с должника. Профессионализм работников ООО «МК-Правовые технологии», ' +
            'а также желание работать со сложными и нестандартными задачами является залогом высокоэффективного и ' +
            'успешного взаимодействия наших компаний. Рекомендуем...'
        },
        {
            name: 'Валерий Мяснянкин',
            job: 'глава представительства',
            text: 'Представительство корпорации «VMSN GROUP, INC.» (США) в Республике Беларусь на протяжении ' +
            'нескольких лет сотрудничает с ООО «МК-Правовые технологии» в рамках сопровождения деятельности по ' +
            'юридическим вопросам, в том числе по вопросам ведения кадрового делопроизводства – абонентское ' +
            'обслуживание. Хотелось бы отметить работу специалистов ООО «МК-Правовые технологии» хорошими теплыми ' +
            'словами: надёжные, обязательные, пунктуальные. Вопросы любой сложности им по плечу. Работая с ' +
            'профессионалами МК-Правовые технологии, всегда можно рассчитывать...'
        }
    ];
    return (
        <div className='partners-reviews'>
            <div className='partners-reviews-title main-title'>Отзывы наших партнеров</div>
            <div className='partner-revies-wrapper'>
                <Review review={reviews[0]}/>
                <Review review={reviews[1]}/>
            </div>
            <div className='review-navigation'>
                <Button title='Все отзывы'/>
                <div className='review-pagination'>
                    <img src={'./images/icons/active-dot.svg'} alt='pagination'/>
                    <img src={'./images/icons/dot.svg'} alt='pagination'/>
                    <img src={'./images/icons/dot.svg'} alt='pagination'/>
                </div>
                <div className='review-arrows'>
                    <div className='arrow-left'>
                        <img src={'./images/icons/arrow-left.svg'} alt='arrow-left'/>
                    </div>
                    <div className='arrow-right'>
                        <img src={'./images/icons/arrow-right.svg'} alt={'arrow-right'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};