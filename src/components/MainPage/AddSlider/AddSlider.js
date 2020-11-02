import React, {useEffect, useState} from "react";
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import './AddSlider.css';

export const AddSlider = () => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState('nextStep');
    const [isFirstRun, setFirstRun] = useState(true);
    const config = {
        1: {
            imageUrl: './images/slider/couch.png',
            nextStep: 2,
            previousStep: 4,
        },
        2: {
            imageUrl: './images/slider/discussion.png',
            nextStep: 3,
            previousStep: 1,
        },
        3: {
            imageUrl: './images/slider/pause.png',
            nextStep: 4,
            previousStep: 2,
        },
        4: {
            imageUrl: './images/slider/lunch.png',
            nextStep: 5,
            previousStep: 3,
        },
        5: {
            imageUrl: 'images/slider/urgent.png',
            nextStep: 1,
            previousStep: 4,
        }
    };

    /* eslint-disable*/
    useEffect(() => {
        if (isFirstRun) {
            return setFirstRun(false)
        }
        setStep(config[step][direction])
    }, [direction]);
    /* exlint-enable*/

    const getImage = () => (<img alt='slider' src={config[step].imageUrl}/>);

    /* eslint-disable*/
    const setNewStep = (param) => {
        if (direction === param) {
            return setStep(config[step][direction])
        }
        setDirection(param)
    };
    /* exlint-enable*/

    return (
        <div className='add-slider'>
            <div className='add-background'/>
            <div className="add-image-wrapper">
                <div className="add-controls">
                    <div className="add-left-arrow add-arrow" onClick={() => setNewStep('previousStep')}>
                        <img alt='arrow' src={'./images/icons/arrow-left.svg'}/>
                    </div>
                </div>
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        key={step}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames={direction}
                    >
                        <div className='add-slider-image'>
                            {getImage()}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className="add-controls">
                    <div className="add-right-arrow add-arrow" onClick={() => setNewStep('nextStep')}>
                        <img alt='arrow' src={'./images/icons/arrow-right.svg'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};