import React, {useEffect, useState} from "react";
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import './Slider.css';
import {Button} from "../Button/Button";

export const Slider = () => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState('nextStep');
    const [isFirstRun, setFirstRun] = useState(true);
    const config = {
        1: {
            image: 'receivables',
            nextStep: 2,
            previousStep: 4,
            title: 'Взыскание дебиторской задолженности',
            description: 'Индивидуальный подход и нацеленность на достижение результата',
        },
        2: {
            image: 'register',
            nextStep: 3,
            previousStep: 1,
            title: 'Регистрация ООО',
            description: 'Гарантируем минимальные сроки регистрации под ключ ',
        },
        3: {
            image: 'dropping-out',
            nextStep: 4,
            previousStep: 2,
            title: 'Ликвидация предприятия',
            description: 'Эффективное решение сложных задач',
        },
        4: {
            image: 'consultation',
            nextStep: 5,
            previousStep: 3,
            title: 'Юридическая консультация',
            description: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов',
        },
        5: {
            image: 'outsourcing',
            nextStep: 1,
            previousStep: 4,
            title: 'Юридический аутсорсинг',
            description: 'Гарантия своевременности и качества услуг',
        }
    };


    useEffect(() => {
        if (isFirstRun) {
            return setFirstRun(false)
        }
        setStep(config[step][direction])
    }, [direction]);

    const getImage = () => (<div className={`slider-image ${config[step].image}`}/>);

    const setNewStep = (param) => {
        if (direction === param) {
            return setStep(config[step][direction])
        }
        setDirection(param)
    };

    return (
        <div>
            <div className="image-wrapper">
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        key={step}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames={direction}
                    >
                        <div className='main-slider-wrapper'>
                            {getImage()}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className="actions">
                    <SwitchTransition>
                        <CSSTransition
                            key={step}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                            classNames="action"
                        >
                            <div>
                                <div className="title-wrapper">
                                    <h1>
                                        {config[step].title}
                                    </h1>
                                </div>
                                <div className="description">
                                    {config[step].description}
                                </div>
                                <div className='slider-button-wrapper'>
                                    <Button title={'Подробнее'}/>
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                    <div className="controls">
                        <div className="left-arrow" onClick={() => setNewStep('previousStep')}>
                            <img alt='arrow' src={'./images/icons/arrow-left.svg'}/>
                        </div>
                        <div className="right-arrow" onClick={() => setNewStep('nextStep')}>
                            <img alt='arrow' src={'./images/icons/arrow-right.svg'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};