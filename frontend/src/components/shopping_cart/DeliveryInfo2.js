import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { savePaymentMethod, saveShippingAddress } from '../redux/actions/cartActions';
import { createOrder } from '../redux/actions/orderActions';
// import { ORDER_CREATE_RESET } from '../redux/constants/orderConstants';
import CheckoutSteps from './CheckoutSteps'
import { gsap, Power2 } from 'gsap';

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

    const tl = useRef()
    const sidebar = useRef()
    const stagger = useRef() 

    useEffect(() => {
        if (success) {
            props.history.push(`/placeorder/${order._id}`);
            // dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, props.history, success])

    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        .from(sidebar.current, {
            opacity: 0,
            width: 0,
            ease: Power2.easeOut,
            duration:0.4,
        })
        .from(stagger.current, {
            opacity: 0,
            // y: 100,
            duration: 1,
            ease: Power2.easeIn,
            // delay:1,
        })
    }, [])

    return (
        
            <div className="flex-container-shopping">
                <div className="">
                <CheckoutSteps step2 />
                    <div className="cat-title">Delivery Details</div>
                    
                <div className="container-cart ">
            <form className="borang-address" onSubmit={handlePlaceOrder} ref={stagger}>
               
                <div>
                    <label htmlFor="fullName" className="isiborang">Full Name</label>
                    <input
                                type="text"
                                className="isiborang"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="address" className="isiborang">Address</label>
                    <input
                                type="text"
                                className="isiborang"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="city" className="isiborang">City</label>
                    <input
                                type="text"
                                className="isiborang"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="postalCode" className="isiborang">Postal Code</label>
                    <input
                                type="text"
                                className="isiborang"
                        id="postalCode"
                        placeholder="Enter postal code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    required></input>
                </div>
                <div>
                    <label htmlFor="country" className="isiborang">Country</label>
                    <input
                                type="text"
                                className="isiborang"
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
                        {loading && <LoadingSpinner />}
                       {error && <ErrorMessage variant="danger">Please fill in all fields.</ErrorMessage>}
                    </form>
                   </div>
                </div>
            
{/*             
            order summary */}

            <div className="flex-item-shopping" ref={sidebar}>
                   <div className="fixed-elements">
                   <div className="order-sum-text">Order Summary</div>
                       
                   <div className="subtotal-grid ">
                       <div className="subtotal-keys">
                       <div>Subtotal</div>
                       <div>Delivery Cost</div>
                        <div>Taxes</div>
                        <div className="subtotal-keys-total">Order Total</div>
                   </div>
                   
                       <div className="subtotal-value ">
                       <div>${cart.itemsPrice.toFixed(2)}</div>
                       <div>${cart.shippingPrice.toFixed(2)}</div>
                                   <div>${cart.taxPrice}</div>
                                   <div className="subtotal-value-total">${cart.totalPrice.toFixed(2)}</div>
                           
                   </div></div>
                      
                      
                           <button
                               type="button"
                               onClick={handlePlaceOrder}
                               className="continue"
                               disabled={cart.cartItems.length === 0}
                               >
                               Proceed to Payment
                           </button>
                       
               </div>
                </div></div>
        
    )
}

export default DeliveryInfo2
