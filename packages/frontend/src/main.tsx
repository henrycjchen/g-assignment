import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/main.css';
import 'uno.css';
import { initSocketIO } from './utils/request';

initSocketIO();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
