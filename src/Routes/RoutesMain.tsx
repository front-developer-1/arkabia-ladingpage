import React from "react";

import { Routes, Route } from 'react-router-dom';

/** importando paginas */
import { HomePage } from "../pages/Home/HomePage";


export const RoutesMain: React.FC<{}> = ({}) => {
    return (   
        <Routes> {/** bloque de ruta */}
            <Route path="/" element={<HomePage />} /> {/**  ruta principal home*/}
            <Route path="*" element={<HomePage />} />
        </Routes>
    )
}