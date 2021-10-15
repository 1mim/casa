import React from 'react'
import { useSelector } from 'react-redux'
import CartItemsOnPOScreen from './CartItemsOnPOScreen';
import CartPriceSummary from './CartPriceSummary';
import CheckoutSteps from './CheckoutSteps'

const PlaceOrder = (props) => {

    const cart = useSelector(state => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment')
    };

    // const toPrice = (num) => Number(num.toFixed(2));

    // cart.itemsPrice = toPrice(cart.cartItems.reduce((a, b) => a + b.qty * b.price, 0));
    // cart.shippingPrice = cart.itemsPrice > 1000 ? toPrice(45) : toPrice(80);
    // cart.taxPrice = cart.toPrice(0.15 * cart.itemsPrice);
    // cart.totalPrice = cart.itemsPrice + cart.shippingAddress;

    const parseNumToInt = (num) => Number(num.toFixed(2));

    cart.itemsPrice = parseNumToInt((cart.cartItems.reduce((a, b) => a + b.qty * b.price, 0)));
    cart.shippingPrice = cart.itemsPrice > 1000 ? parseNumToInt(45) : parseNumToInt(80);
    cart.taxPrice = parseNumToInt((0.07 * cart.itemsPrice));
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    return (

        <div>
             <CheckoutSteps step1 step2 step3 step4 />
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                                <strong>Address:</strong> {cart.shippingAddress.address},
                                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                                {cart.shippingAddress.country}

                            </p></div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Payment Method:</strong> {cart.paymentMethod} <br />
                            </p>
                            </div> </li>
                        <li>
                            <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                                {cart.cartItems.map((item) => (
                                    <CartItemsOnPOScreen key={item.product} item={item} />
                                ))
                                }
                            </ul>
                            </div></li>
                    </ul>

                </div>
                <div className="col-1">
                    <CartPriceSummary
                        cart={cart}
                        itemsPrice={cart.itemsPrice}
                        shippingPrice={cart.shippingPrice}
                        taxPrice={cart.taxPrice}
                        totalPrice={cart.totalPrice}
                    />
                    
                    </div>
            </div>
        </div>
    )
}

export default PlaceOrder
