import React from 'react'
import { Link } from 'react-router-dom'

const CartItemsOnPOScreen = ({item}) => {
    return (
        <div className="row">
            <div><img src={item.image} alt={item.name} className="small" /></div>
            <div className="min-30"><Link to={`product/${item.product}`}>{item.name}</Link></div>
            <div> {item.qty} x ${item.price} = ${item.qty * item.price}</div>
        </div>
    )
}

export default CartItemsOnPOScreen
