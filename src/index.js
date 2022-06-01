import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Dashboard/dash_card';
import 'tachyons';
import {names} from './Dashboard/names'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card name={names[0].name} email={names[0].email}/>
    <Card name={names[2].name} email={names[2].email}/>
    <Card name={names[3].name} email={names[3].email}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
