import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { gsap, Power2 } from 'gsap';

const CartSubTotal = ({ cartItems, checkoutHandler }) => {

    const tl = useRef()
    const section = useRef()

    useEffect(() => {

        tl.current = gsap.timeline()
        .from(section.current, {
            opacity: 0,
            x: 100,
            ease: Power2.easeOut,
        })
    }, [])
    
    return (
        <div className="fixed-elements" ref={section}>
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
                
                    <button type="button" onClick={checkoutHandler} className="continue" disabled={cartItems.length === 0}>
                        Checkout
                    </button>
                
                    <Link to ="/store"> <div className="cont-browse"> Continue Browsing </div></Link>
        
        </div>
    )
}

export default CartSubTotal
