import React from "react";
import './FooterAbout.css';

export const FooterAbout = () => {
    return (
        <div className='footer-about'>
            <div className='footer-title'>
                ООО “МК-ПРАВОВЫЕ ТЕХНОЛОГИИ”
            </div>
            <div className='about-paragraph'>
                <span className='important-text footer-about-text'>УНП
                </span> <span className='simple-text'>
                192710862
            </span>
            </div>
            <div className='about-paragraph'>
                <span className='important-text footer-about-text'>Наш рейтинг
                </span> <span className='simple-text'>
                5 из 5 (15 отзывов)
            </span>
            </div>
            <div className='social-networks'>
                <div className='sicial-network'>
                    <img src={'./images/icons/vk.svg'} alt='vk'/>
                </div>
                <div className='sicial-network'>
                    <img src={'./images/icons/ok.svg'} alt='ok'/>
                </div>
                <div className='sicial-network'>
                    <img src={'./images/icons/linkedin.svg'} alt='linkedin'/>
                </div>
                <div className='sicial-network'>
                    <img src={'./images/icons/insta.svg'} alt='insta'/>
                </div>
                <div className='sicial-network'>
                    <img src={'./images/icons/youtube.svg'} alt='youtube'/>
                </div>
                <div className='sicial-network'>
                    <img src={'./images/icons/facebook.svg'} alt='facebook'/>
                </div>
            </div>
            <div className='about-links'>
                <div className='about-link'>
                    <div className='about-link-text'>КАрта сайта</div>
                    <div className='about-link-image'><img src={'./images/icons/arrow-link.svg'} alt='link'/></div>
                </div>
                <div className='about-link'>
                    <div className='about-link-text'>Политика конфиденциальности</div>
                    <div className='about-link-image below-arrow'><img src={'./images/icons/arrow-link.svg'} alt='link'/></div>
                </div>
            </div>
        </div>
    )
};