import React from "react";
import { EventCard } from "../EventCard/EventCard";

import './EventView.css';

interface EventViewProps {
    date: string
    events: any[];
}

export const EventView: React.FC<EventViewProps> = ({
    events,
    date
}) => {
    return (
        <div className="eventView-container">
            <div className="eventView-header ">
                <div className="paragraph-header eventCard-colorText">{date}</div>
                <div className="smalltext-header" style={{color: 'var(--blue-2)'}}>+ Agregar evento</div>
            </div>
            {events.length>0 && events.map((e, idx) => {
                return (
                    <EventCard
                        key={idx}
                        title={e.title}
                        detail={e.detail}
                        date={e.date}
                        participants={e.participants}
                        priority={e.priority}
                    />
                )
            })}
        </div>
    )
}