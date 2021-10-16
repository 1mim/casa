import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { createOrder } from '../redux/actions/orderActions';
import { ORDER_CREATE_RESET } from '../redux/constants/orderConstants';
import CartItemsOnPOScreen from './CartItemsOnPOScreen';
// import CartPriceSummary from './CartPriceSummary';
import CheckoutSteps from './CheckoutSteps'

const PlaceOrder = (props) => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment')
    };

    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const parseNumToInt = (num) => Number(num.toFixed(2));

    cart.itemsPrice = parseNumToInt((cart.cartItems.reduce((a, b) => a + b.qty * b.price, 0)));
    cart.shippingPrice = cart.itemsPrice > 1000 ? parseNumToInt(45) : parseNumToInt(80);
    cart.taxPrice = parseNumToInt((0.07 * cart.itemsPrice));
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const handlePlaceOrder = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    }

    useEffect(() => {
        if (success) {
            props.history.push(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, props.history, success])

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
                    {/* <CartPriceSummary
                        cart={cart}
                        itemsPrice={cart.itemsPrice}
                        shippingPrice={cart.shippingPrice}
                        taxPrice={cart.taxPrice}
                        totalPrice={cart.totalPrice}
                        handlePlaceOrder={handlePlaceOrder}
                        loading={loading}
                        error={error}
                    /> */}
                            <div className="card card-body">
            <ul>
                <li>
                    <h2>Order Summary</h2>
                </li>
                <li>
                    <div className="row">
                        <div>Items</div>
                        <div>${cart.itemsPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Delivery Cost</div>
                        <div>${cart.shippingPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Taxes</div>
                        <div>${cart.taxPrice}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div><strong>Order Total</strong></div>
                        <div><strong>${cart.totalPrice}</strong></div>
                    </div>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={handlePlaceOrder}
                        className="primary block"
                        disabled={cart.cartItems.length === 0}>
                        Place Order
                    </button>
                </li>
                {loading && <LoadingSpinner />}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                
            </ul>
            
        </div>
                    
                    </div>
            </div>
        </div>
    )
}

export default PlaceOrder
