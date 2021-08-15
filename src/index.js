import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Reducer from './Components/Redux/Reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const loadState = () =>{
  try{
    const myState = localStorage.getItem('cart');
    if(myState !== null){
      return JSON.parse(myState);
    }
  }catch(e){
    // error ignoration
  }
  
}
const saveState = (myState) => {
  //console.log('saveState..')
  localStorage.setItem('cart', JSON.stringify(myState));
}


const store = createStore(Reducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <App className='App'/>
  </Provider>,
  document.getElementById('root')
);
