import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//import {createRoot} from 'react-dom/client';
import './index.css';
import './dice.css';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
);

//<React.StrictMode></React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
