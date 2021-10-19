import React from 'react'
// import { Link } from 'react-router-dom'

const CartItemsOnPOScreen = ({item}) => {
    return (
        <div className="cart-item-nak-order">
            <div className="cart-flush-left"><img src={item.image} alt={item.name} className="small" /></div>

            <div className="cart-space-even">
            <div className="cart-item-name">{item.name}</div>
                <div className="order-items-price-qty"> ${item.price.toFixed(2)} x {item.qty}
                </div>
                <div className="cart-flush-right ">
                    <div className="cart-item-price">${(item.qty * item.price).toFixed(2)}</div>
                    </div>
            </div>
        </div>
    )
}

export default CartItemsOnPOScreen
