import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message:"Hi! How are you?", likesCount: 7},
  {id: 2, message:"Hi! Nice to see u again!", likesCount: 40},
  {id: 3, message:"Its my first Post!", likesCount: 12}
]

let dialogs = [
  {id: 1, name: 'Aleksa'},
  {id: 2, name: 'Dmitryi'},
  {id: 3, name: 'Viktor'},
  {id: 4, name: 'Sergei'},
  {id: 5, name: 'Evgenii'},
  {id: 6, name: 'Ross'}
]
let messages = [
  {id: 1, message:"Hi! How are you?"},
  {id: 2, message:"Where are you?"},
  {id: 3, message:"Its My first message!"},
  {id: 4, message:"Its My first message!"},
  {id: 5, message:"Its My first message!"},
  {id: 6, message:"Its My first message!"}
]
ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}
      dialogs={dialogs}
      messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
