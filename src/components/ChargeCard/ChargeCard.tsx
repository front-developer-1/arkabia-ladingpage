import React from "react";

import { ChargePhasesType } from "../../@types/chargePhasesType";
import { SelectChargePhase } from "../../utils/selectChagePhase";

import './ChargeCard.css';

interface ChargeCardProps {
    phases: any[]; // phases 
    activePhase: number; // phase active 
    setPhase: (e: number) => void;
}

export const ChargeCard: React.FC<ChargeCardProps> = ({
    phases,
    activePhase,
    setPhase
}) => {

    return (
        <div className="chargeCard-main">
            <div className="changeCard-header">
                <div className="smalltext-header">Selecciona</div>
                <div className="small-bold">¿En qué parte está la carga?</div>
            </div>
            <div className="chargeCard-phases">
                {phases.length > 0 && phases.map((p: ChargePhasesType, idx) => { 
                    return (
                        <div key={idx} onClick={() => {setPhase(idx+1)}}>
                            <div className="chargeCard-phases-row">
                                <div 
                                    className={'paragraph-header changeCard-phase-number'+((idx+1)===activePhase?' changeCard-phase-active':'')}>
                                    <GetIcon type={(idx+1)===activePhase?'white':'black'} option={p} />
                                </div>
                                <div className={(idx+1)===activePhase?'small-bold':'paragraph changeCard-text-inactive'}>{p}</div>
                            </div>
                           {(idx !== phases.length -1) && <div className='chargeCard-phases-row'>
                                <img className='chargeCard-line' alt='' src='/images/line_thick.png'/>
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const GetIcon: React.FC<{
    type: "white" | "black";
    option: ChargePhasesType
}> = ({
    type,
    option
}) => {
    const IconWhite = SelectChargePhase(option)[0];
    const IconBlack = SelectChargePhase(option)[1]
    return (
        <>{
            type==='white'?<IconWhite className="changeCard-white-icon"  />:<IconBlack className="changeCard-black-icon" />
        }</>
    )
}