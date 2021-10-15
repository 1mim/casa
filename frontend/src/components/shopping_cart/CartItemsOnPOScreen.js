import React from 'react'
import { Link } from 'react-router-dom'

const CartItemsOnPOScreen = ({item}) => {
    return (
        <div className="row">
            <div><img src={item.image} alt={item.name} className="small" /></div>
            <div className="min-30"><Link to={`product/${item.product}`}>{item.name}</Link></div>
            <div> {item.qty} x ${item.price.toFixed(2)} = ${(item.qty * item.price).toFixed(2)}</div>
        </div>
    )
}

export default CartItemsOnPOScreen
