import axios from 'axios';
import { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsOrder, payOrder } from '../redux/actions/orderActions';
import { ORDER_CREATE_RESET, ORDER_PAY_RESET } from '../redux/constants/orderConstants';
import CartItemsOnPOScreen from '../shopping_cart/CartItemsOnPOScreen';
import CheckoutSteps from './CheckoutSteps';


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
    }, [dispatch, order, orderId, sdkReady, props.history, successPay]);
        
    const handleSuccessPayment = (paymentResult) => {
        dispatch(payOrder(order, paymentResult))
        props.history.push(`/success/${order._id}`);
        dispatch({ type: ORDER_CREATE_RESET });
    }

    return loading ? (<LoadingSpinner />) :
        error ? (<ErrorMessage variant="danger">{error}</ErrorMessage>)
            : (
                
                    <div className="flex-container-shopping">
                    <div>
                    <CheckoutSteps step2 step3 />
                   
                            <div className="container-cart ">
                                
                            <div className="cat-title">Order Items</div>
                            <div className="">
                          
                                {order.orderItems.map((item) => (
                                    <CartItemsOnPOScreen key={item.product} item={item} />
                                ))
                                }
                            
                            </div></div><br/>
                            <div className="cat-title">Delivery Details</div>
                            <div className="borang-address">
                                <div>
                                <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                                <strong>Address:</strong> {order.shippingAddress.address},
                                {order.shippingAddress.city}, {order.shippingAddress.postalCode},
                                {order.shippingAddress.country}

                                        </div>
                
                            </div>
                

                    </div>
                    
                <div className="flex-item-shopping">
                   
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
                       <div>${order.itemsPrice.toFixed(2)}</div>
                       <div>${order.shippingPrice.toFixed(2)}</div>
                                   <div>${order.taxPrice}</div>
                                   <div className="subtotal-value-total">${order.totalPrice.toFixed(2)}</div>
                           
                   </div></div>
               
               
                {
                    !order.isPaid && (
                        <div>
                                                {!sdkReady ? (<LoadingSpinner />) :
                                                  (  <>
                                                        {errorPay && (<ErrorMessage variant="danger">{errorPay}</ErrorMessage>)}
                                                        {loadingPay && <LoadingSpinner/> }
                              <PayPalButton amount={order.totalPrice} onSuccess={handleSuccessPayment} />
                                                    </> 
                                )}
                                            </div>
                    )
                }
            
            
        </div>
                    
                    
            </div>
        </div>
    )
}

export default PlaceOrder2
