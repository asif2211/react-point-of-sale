import React from 'react';
import ReactDOM from 'react-dom';
import './Global.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider, connect } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import thunk from "redux-thunk";  
import reducer from './reducer';
// function saveDataInLocalStorage(state){
//   try{
//     let setStateData = JSON.stringify(state);
//     localStorage.setItem('state',setStateData)
//   }
//   catch(e)
//   {
//     console.log(e)
//   }

// }
// function loadLocalStorageData(){
//   try{
//     let getStateData = localStorage.getItem('state')
//     if(getStateData === null) return undefined;
//     return JSON.parse(getStateData);
//   }
//   catch(e)
//   {
//     console.log(e)
//   }

// }
// const presistedLocalStorage = loadLocalStorageData();
const store = createStore(reducer,applyMiddleware(thunk))
// store.subscribe(()=>saveDataInLocalStorage(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
