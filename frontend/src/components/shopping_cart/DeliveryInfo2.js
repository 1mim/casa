import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { savePaymentMethod, saveShippingAddress } from '../redux/actions/cartActions';
import { createOrder } from '../redux/actions/orderActions';
import { ORDER_CREATE_RESET } from '../redux/constants/orderConstants';
import CheckoutSteps from './CheckoutSteps'

const DeliveryInfo2 = (props) => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    if (!userInfo) {
        props.history.push('/login')
    }

    //setting the delivery address

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch()

    //create order in db for the order summary

    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const parseNumToInt = (num) => Number(num.toFixed(2));

    cart.itemsPrice = parseNumToInt((cart.cartItems.reduce((a, b) => a + b.qty * b.price, 0)));
    cart.shippingPrice = cart.itemsPrice > 1000 ? parseNumToInt(45) : parseNumToInt(80);
    cart.taxPrice = parseNumToInt((0.07 * cart.itemsPrice));
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    // const handleSubmit = (e) => {
        // e.preventDefault();
        // dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));

        // setPaymentMethod('PayPal');
        // dispatch(savePaymentMethod(paymentMethod));

        // props.history.push('/placeorder');
    // }

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));

        setPaymentMethod('PayPal');
        dispatch(savePaymentMethod(paymentMethod));

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
            <div className="row top">
                <div className="col-2">
                <CheckoutSteps step1 step2 />
            <form className="form" onSubmit={handlePlaceOrder}>
                <div>
                    <h1>Delivery Details</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Enter postal code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label />
                    {/* <button className="primary" type="submit">
                        Add Delivery Address
                    </button> */}
                </div>
                    </form>
                </div></div>
            
            <div className="col-1">
                
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
                        Continue
                    </button>
                </li>
                {loading && <LoadingSpinner />}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                
            </ul>
            
        </div>
                </div>
        </div>
    )
}

export default DeliveryInfo2
