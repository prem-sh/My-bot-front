import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import appStore from './services/redux/appstore';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
