import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GlobalContextProvider } from './context/global';
import App from './App';
import Style from './Styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Style />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
