import React from 'react'
import ErrorMessage from '../modals/ErrorMessage'
import LoadingSpinner from '../modals/LoadingSpinner'

const CartPriceSummary = ({ cart, handlePlaceOrder, error, loading , itemsPrice, totalPrice, shippingPrice, taxPrice }) => {
    
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
                {loading && <LoadingSpinner />}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                
            </ul>
            
        </div>
    )
}

export default CartPriceSummary
