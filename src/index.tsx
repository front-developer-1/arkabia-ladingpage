import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/** importando estilos */
import './index.css';

// /** importando rutas */
// import { RoutesMain } from './Routes/RoutesMain';
import reportWebVitals from './reportWebVitals';

import { HomePage } from './pages/Home/HomePage';



ReactDOM.render(
  // <BrowserRouter>
    <div className='app'>
      <HomePage />
    </div>,
  // </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
