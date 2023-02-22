import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import MovieRouter from './MovieRouter';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <MovieRouter />
     
  </React.StrictMode>
  </BrowserRouter>
);

