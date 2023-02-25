import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <HashRouter >
  <AuthProvider>
    <App />
    </AuthProvider>
    </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
;
