import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Countdown from './Countdown';
import Text from "./Text"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Countdown />
    <Text>asdflkøalskdjføkalsjdf</Text>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
