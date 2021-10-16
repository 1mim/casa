import axios from 'axios';
import { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsOrder, payOrder } from '../redux/actions/orderActions';
import { ORDER_PAY_RESET } from '../redux/constants/orderConstants';
import CartItemsOnPOScreen from '../shopping_cart/CartItemsOnPOScreen';


const PlaceOrder2 = (props) => {
    const orderPay = useSelector(state => state.orderPay);
    const { error: errorPay, loading: loadingPay, success: successPay } = orderPay;

    const dispatch = useDispatch()
    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);

    const orderDetails = useSelector(state => state.orderDetails);
    const { order, loading, error } = orderDetails;
    
    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await axios.get('/config/paypal');
            const script = document.createElement('script');
            script.type = "text/javascript";
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (!order || successPay || (order && order._id !== orderId)) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, order, orderId, sdkReady, successPay]);
        
    const handleSuccessPayment = (paymentResult) => {
        dispatch(payOrder(order, paymentResult))
    }

    return loading ? (<LoadingSpinner />) :
        error ? (<ErrorMessage variant="danger">{error}</ErrorMessage>)
            : (
                <div>
                    
                    <div className="row top">
                        
                        <div className="col-2">
                        <h2>Order {order._id}</h2>
                    <ul>
                        <li>
                            <div className="card card-body">
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                                <strong>Address:</strong> {order.shippingAddress.address},
                                {order.shippingAddress.city}, {order.shippingAddress.postalCode},
                                {order.shippingAddress.country}

                                        </p>
                                        {order.isDeliverd ? <div>Delivered at {order.deliveredAt}</div> 
                                        : <div>Not Delivered</div>}
                                    </div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Payment Method:</strong> {order.paymentMethod} <br />
                                        </p>
                                        {order.isPaid ? <div>Paid on {order.paidAt}</div> 
                                        : <div>Not Paid</div>}
                            </div> </li>
                        <li>
                            <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                                {order.orderItems.map((item) => (
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
                        <div>${order.itemsPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Delivery Cost</div>
                        <div>${order.shippingPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Taxes</div>
                        <div>${order.taxPrice}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div><strong>Order Total</strong></div>
                        <div><strong>${order.totalPrice}</strong></div>
                    </div>
                </li>
                {
                    !order.isPaid && (
                        <li>
                                                {!sdkReady ? (<LoadingSpinner />) :
                                                  (  <>
                                                        {errorPay && (<ErrorMessage variant="danger">{errorPay}</ErrorMessage>)}
                                                        {loadingPay && <LoadingSpinner/> }
                              <PayPalButton amount={order.totalPrice} onSuccess={handleSuccessPayment} />
                                                    </> 
                                )}
                                            </li>
                    )
                }
            </ul>
            
        </div>
                    
                    </div>
            </div>
        </div>
    )
}

export default PlaceOrder2
