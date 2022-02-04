import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Counter from './counterSingle/Counter';
import { newStore } from './counterSingle/counter-store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={newStore}>
        {/* <App/> */}
        <Counter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
