import React from 'react'
import { Link } from 'react-router-dom'

const CartSubTotal = ({ cartItems, checkoutHandler }) => {
    return (
        <div>
                <div className="order-sum-text">Order Summary</div>
        
        <div className="subtotal-grid ">
            <div className="subtotal-keys">
              <div>No. of items</div>
              <div>Subtotal</div>
            </div>
            
                <div className="subtotal-value ">
                   <div> {cartItems.reduce((a, b) => a + b.qty, 0)}</div>
                   <div> ${cartItems.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)}</div>
                    
</div></div>
                
                    <button type="button" onClick={checkoutHandler} className="add" disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                
              <div className="cont-browse"> <Link to ="/">Continue Browsing</Link> </div>
        
        </div>
    )
}

export default CartSubTotal
