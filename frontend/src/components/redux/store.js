import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';

//Reducers
import { getProductsReducer, productDetailsReducer } from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';


const initialState = {
    userLogin: {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
}};
const reducer = combineReducers({
    productList: getProductsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;