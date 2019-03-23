import {createStore} from 'redux';
import { reducer } from '../reducer/reducer';

export const store=createStore(reducer);

store.subscribe(()=>{
console.log("Store Subscribed",store.getState())
})