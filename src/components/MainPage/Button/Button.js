import React from "react";
import './Button.css';
 export const  Button = ({title, bigButton}) => {
     return (
         <div className={bigButton ? 'button big-button' : 'button'}>
             <div className='button-title'>{title}</div>
         </div>
     );
 };