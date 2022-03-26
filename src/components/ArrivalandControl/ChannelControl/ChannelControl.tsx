import React from "react";
import { Button } from "../..";

import './ChannelControl.css';

interface ChannelControlProps {

}

export const ChannelControl: React.FC<ChannelControlProps> = ( {

}) => {
    return (
        <div className='channelControl-main'>
            <div className='channelControl-colorText paragraph-header'>Canal de control</div>
            <div className='channelControl-colorText paragraph'>La asignación del canal determina el tipo de control al que se sujetan las mercancías:</div>
            <div className='channelControl-row'>
                <div className='channelControl-status-green'></div>
                <div className='channelControl-colorText paragraph'>Canal verde, no requiere ninguna revisión documentaria de la declaración ni el reconocimiento físico de la mercancía.</div>
            </div>
            <div className='channelControl-row'>
                <div className='channelControl-status-amber'></div>
                <div className='channelControl-colorText paragraph'>Canal naranja, la declaración es sometida a revisión documentaria.</div>
            </div>
            <div className='channelControl-row'>
                <div className='channelControl-status-red'></div>
                <div className='channelControl-colorText paragraph'>Canal rojo, la mercancía se encuentra sujeta a reconocimiento físico y documentario.</div>
            </div>
            <Button
                content='Canal de control no asignado todavía'
                size='small'
                color='white-50'
            />
        </div>
    )
}