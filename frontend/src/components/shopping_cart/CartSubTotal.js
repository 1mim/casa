import React from 'react'
import { Link } from 'react-router-dom'

const CartSubTotal = ({ cartItems, checkoutHandler }) => {
    return (
        <div>
            <ul>
            <li>    <h2>Subtotal</h2>
                    <h3>{cartItems.reduce((a, b) => a + b.qty, 0)} items : ${cartItems.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)}</h3></li>
                <li>
                    <button type="button" onClick={checkoutHandler} className="add" disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                </li>
                <li><Link to ="/" className="discover">Continue Browsing</Link></li>
        </ul>
        </div>
    )
}

export default CartSubTotal
