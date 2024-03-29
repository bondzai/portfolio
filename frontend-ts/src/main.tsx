import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.PROD ? '/portfolio/' : '/'}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
