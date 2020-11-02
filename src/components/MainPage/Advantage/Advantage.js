import React from "react";
import './Advantage.css';

export const Advantage = ({name, image, bigCard}) => {
  return (
      <div className={bigCard ? 'advantage big-advantage' : 'advantage'}>
          <div className='advantage-image'><img src={`${image}`} alt='advantage'/></div>
          <div>{name}</div>
      </div>
  )
};