import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "@fontsource-variable/onest";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
    <ToastContainer />
  </React.StrictMode>,
)
