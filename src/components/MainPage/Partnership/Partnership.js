import React from "react";
import './Partnership.css';
import {PartnershipText} from "../PartnershipText/PartnersipText";
import {PartnershipForm} from "../PartnershipForm/PartnershipForm";

export const Partnership = () => {
    return (
        <div className='partnership'>
            <PartnershipText/>
            <PartnershipForm/>
        </div>
    )
};