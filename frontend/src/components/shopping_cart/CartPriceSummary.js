import React from 'react'

const CartPriceSummary = ({ cart, itemsPrice, totalPrice, shippingPrice, taxPrice }) => {
    
    const handlePlaceOrder = () => {
// TODO: dispatch place order action 
    }
    
    return (
        <div className="card card-body">
            <ul>
                <li>
                    <h2>Order Summary</h2>
                </li>
                <li>
                    <div className="row">
                        <div>Items</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Delivery Cost</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Taxes</div>
                        <div>${taxPrice}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div><strong>Order Total</strong></div>
                        <div><strong>${totalPrice}</strong></div>
                    </div>
                </li>
                <li>
                    <button
                        type="button"
                        onSubmit={handlePlaceOrder}
                        className="primary block"
                        disabled={cart.cartItems.length === 0}>
                        Place Order
                    </button>
                </li>
            </ul>
            
        </div>
    )
}

export default CartPriceSummary
