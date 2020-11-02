import React from "react";
import './ServisesLine.css';
import {ServiseItem} from "../ServiseItem/ServiseItem";

export const ServisesLine = ({item1, item2, line}) => {
    return (
        <div className='servise-line'>
            <ServiseItem name={item1} line={line} position={'one'}/>
            <ServiseItem name={item2} line={line} position={'two'}/>
        </div>
    )
};