import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Header, Main, Footer }  from './components' 

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
