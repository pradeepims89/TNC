import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReucers from './reducer'
const store = createStore(
    //Reducer
    allReucers
    ,
    {},
    applyMiddleware(thunk)

)
export default store;