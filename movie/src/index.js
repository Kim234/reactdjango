import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/Header';
import Body from './pages/Body';
import App from './pages/App'
import Result from './components/Result'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    {/* <App /> */}
    {/* <Result/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();