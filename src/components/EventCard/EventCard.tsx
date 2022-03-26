import React from "react";

import { Priority } from "../../@types/priority";

import './EventCard.css';

interface EventCardProps {
    title: string;
    detail: string;
    date: string;
    participants: string;
    priority: Priority;
}

export const EventCard: React.FC<EventCardProps> = ({
    title,
    detail,
    date,
    participants,
    priority
}) => {
    return (
        <div className="eventCard-container">
            <div className={`eventCard-marker ${priority === 'low' ? "eventCard-marker__low" : (
                priority === 'middle' ? "eventCard-marker__middle" : "eventCard-marker__high"
            ) }`}></div>
            <div className="eventCard-body">
                <div className="paragraph-header eventCard-textColor">{title}</div>
                <div className="smalltext eventCard-textColor">{detail}</div>
                <div className="smalltext eventCard-textColor">{date}</div>
                <div className="smalltext eventCard-textColor">{participants}</div>
            </div>
        </div>
    )
}