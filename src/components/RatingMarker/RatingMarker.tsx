import React, { useState } from "react";

import './RatingMarker.css';

interface RatingMarkerProps {
    setRating: (e: number) => void;
}

export const RatingMarker: React.FC<RatingMarkerProps> = ({
    setRating
}) => {

    const [text, setText] = useState('Sin puntaje')
    const [numActive, setNumActive] = useState(0);

    const handleClick = (n: number) => {
        setRating(n);
        setNumActive(n);
            switch (n) {
                case 1:
                    setText('¡Malo!');
                    break;
                case 2:
                    setText('¡Regular!');
                    break;
                case 3:
                    setText('¡Bueno!');
                    break;
                case 4:
                    setText('¡Muy Bueno!');
                    break;
                case 5:
                    setText('¡Excelente!');
                    break;
                default:
                    break;
            }
    }

    return (

        <div className="ratingMarker-container">
            {[1,2,3,4,5].map(n =>
                    <div key={n} onClick={()=>handleClick(n)} className={`${n===1? 'ratingMarker-item-incial': (n===5?'ratingMarker-item-final':'ratingMarker-item-middle')} ${(n <= numActive) && 'ratingMarker-item-clicked' }`}>

                    </div>
                )}
                <div className="paragraph-header" style={{color: 'var(--black-75)'}}>{text}</div>
        </div>
    )
}