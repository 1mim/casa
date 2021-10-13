import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import ProductCatalogue from './components/product_list/ProductCatalogue';
import ProductDetail from './components/product_list/ProductDetail';
import ShoppingCart from './components/shopping_cart/ShoppingCart';

function App() {
  return (
    <Router>
    <div className="App">
        <header><NavBar /></header>
        <main>
          <Switch>
            <Route path="/" exact component={ProductCatalogue} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart/:id?" component={ShoppingCart} />
      </Switch>
      </main>
      </div>
      </Router>
  );
}

export default App;
