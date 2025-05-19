import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeToggle from "./context/ThemeToggle";
import {SmilesProvider} from "./context/SmilesContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeToggle>
            <SmilesProvider>
              <App />
            </SmilesProvider>
        </ThemeToggle>
    </React.StrictMode>
);