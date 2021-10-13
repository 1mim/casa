import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

//Reducers
import { getProductsReducer, productDetailsReducer } from './reducers/productReducers';


const initialState = {};
const reducer = combineReducers({
    productList: getProductsReducer,
    productDetails: productDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;