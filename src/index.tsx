import React from 'react';
import ReactDOM from 'react-dom/client';

import 'foundation-sites/dist/css/foundation.min.css'
import "./assets/app.scss"
import "./assets/index.scss"

import App from './app/Home';
import CalculatorPage from './app/CalculatorPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CalculatorPage />
  </React.StrictMode>
);
