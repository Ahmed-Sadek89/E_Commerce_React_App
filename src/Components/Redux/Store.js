import CartReducer from './Cart/Reducer';
import {combineReducers, createStore} from 'redux';
//import {composeWithDevTools} from 'redux-devtools-extension';
//import logger from 'redux-logger';

const loadState = () =>{
  try{
    const myState = localStorage.getItem('cart') ? localStorage.getItem('cart') : [];
    if(myState !== null){
      return JSON.parse(myState);
    }
  }catch(e){
    // error ignoration
  }
}

const saveState = (myState) => {
  //console.log(myState)
  localStorage.setItem('cart', JSON.stringify(myState) );
}

const rootReducer = combineReducers({
  cart: CartReducer
})

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});