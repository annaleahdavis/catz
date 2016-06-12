import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'Header';
import Main from 'Main';
import 'app.scss';

ReactDOM.render((
  <div className={`god-wrapper platform-${process.platform}`}>
    <Header />
    <Main />
  </div>
), document.getElementById('root'));
