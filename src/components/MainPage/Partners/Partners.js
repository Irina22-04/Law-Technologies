import React from "react";
import './Partners.css';
import {PartnersReviews} from "../PartnersReviwes/PartnersReviews";
import {PartnersAbout} from "../PartnersAbout/PartnersAbout";

export const Partners = () => {
    return (
        <div className='partners'>
            <PartnersReviews/>
            <PartnersAbout/>
        </div>
    )
};