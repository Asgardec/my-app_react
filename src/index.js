import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import {Provider} from "react-redux";


   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
         <App /*state={state} dispatch={store.dispatch.bind(store)} store={store}*//>
         </Provider>
      </BrowserRouter>,
      document.getElementById('root')
   );





reportWebVitals();
