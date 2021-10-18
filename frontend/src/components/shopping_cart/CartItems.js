import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';

const CartItems = ({ item, removeFromCartHandler, dispatch }) => {


    return (
        <div className="row-middle cart-item ">
            <div className="cart-flush-left"><img src={item.image} alt={item.name} className="small" /></div>

            <div className="cart-space-even">
            <div className="cart-item-name"><Link to={`/product/${item.product}`}>{item.name}</Link></div>

            <div><select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
            {[...Array(item.countInStock).keys()].map(x => (
                <option key={x+1} value={x+1}>{x+1}</option>
            ))
                }</select></div>
            <div className="cart-item-price"> ${item.price.toFixed(2)} </div>
                </div>
            <div className="cart-flush-right">
                <span className="deleteitem" onClick={() => removeFromCartHandler(item.product)}>
                <i class="fa fa-times-circle"></i></span>
            </div>
        </div>
    )
}

export default CartItems
