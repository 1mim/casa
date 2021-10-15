import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import ProductCatalogue from './components/product_list/ProductCatalogue';
import ProductDetail from './components/product_list/ProductDetail';
import DeliveryInfo from './components/shopping_cart/DeliveryInfo';
import Payment from './components/shopping_cart/Payment';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import Login from './components/user_account/Login';
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
            <Route path="/delivery" component={DeliveryInfo} />
            <Route path="/payment" component={Payment} />
      </Switch>
      </main>
      </div>
      </Router>
  );
}

export default App;
