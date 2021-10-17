import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import ProductCatalogue from './components/product_list/ProductCatalogue';
import ProductDetail from './components/product_list/ProductDetail';
import DeliveryInfo2 from './components/shopping_cart/DeliveryInfo2';
import OrderConfirmed from './components/shopping_cart/OrderConfirmed';
import PlaceOrder2 from './components/shopping_cart/PlaceOrder2';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import Login from './components/user_account/Login';
// import OrderDetails from './components/user_account/OrderDetails';
import Register from './components/user_account/Register';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
    <div className="">
        <header><NavBar cartItems={cartItems} userInfo={userInfo}/></header>
        <main>
          <Switch>
            <Route exact path="/" component={ProductCatalogue} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart/:id?" component={ShoppingCart} />
            <Route path="/login" component={Login} />
            {/* <Route path="/login" render={(props) => <Login {...props} userInfo={userInfo} /> } /> */}
            <Route path="/register" component={Register} />
            <Route path="/delivery" component={DeliveryInfo2} />
            {/* <Route path="/orderdetails/:id" component={OrderDetails} /> */}
            <Route path="/placeorder/:id" component={PlaceOrder2} />
            <Route exact path="/success/:id" component={OrderConfirmed} />
      </Switch>
      </main>
      </div>
      </Router>
  );
}

export default App;
