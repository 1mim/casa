import React from 'react'

const CartSubTotal = ({ cartItems, checkoutHandler }) => {
    return (
        <div>
            <ul>
            <li>    <h2>Subtotal</h2>
                    <h3>{cartItems.reduce((a, b) => a + b.qty, 0)} items : ${cartItems.reduce((a, b) => a + b.price * b.qty, 0)}</h3></li>
                <li>
                    <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                </li>
        </ul>
        </div>
    )
}

export default CartSubTotal
