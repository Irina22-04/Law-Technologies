import React from "react";
import './HeaderNavigation.css';

export const HeaderNavigation = () => {
  return (
      <div className='navigation-wrapper'>
          <div className='link'>ГЛАВНАЯ</div>
          <div className='link'>О НАС</div>
          <div className='link'>УСЛУГИ</div>
          <div className='link'>ТАРИФЫ</div>
          <div className='link'>ИНФОЦЕНТР</div>
          <div className='link'>КОНТАКТЫ</div>
          <div><img src={'./images/icons/Vector.svg'} alt={'search'}/></div>
      </div>
  )
};