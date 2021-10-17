import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';

const CartItems = ({ item, removeFromCartHandler, dispatch }) => {


    return (
        <div className="row">
            <div><img src={item.image} alt={item.name} className="small" /></div>
            <div className="min-30"><Link to={`/product/${item.product}`}>{item.name}</Link></div>

            <div><select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
            {[...Array(item.countInStock).keys()].map(x => (
                <option key={x+1} value={x+1}>{x+1}</option>
            ))
                }</select></div>
            <div>
                ${item.price}
            </div>
            <div>
                <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                delete</button>
            </div>
        </div>
    )
}

export default CartItems
