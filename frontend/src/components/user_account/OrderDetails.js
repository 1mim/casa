import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsOrder } from '../redux/actions/orderActions';
import CartItemsOnPOScreen from '../shopping_cart/CartItemsOnPOScreen';
// import "../shopping_cart/ShoppingStyle.css"
import { gsap, Power2 } from 'gsap';

const OrderDetails = (props) => {
    const dispatch = useDispatch()
    const orderId = props.match.params.id;

    const orderDetails = useSelector(state => state.orderDetails);
    const { order, loading, error } = orderDetails;


    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);

    const tl = useRef()
    const content = useRef()

    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        .from(content.current, {
            opacity: 0,
            // x: 100,
            duration:0.6,
            ease: Power2.easeIn,
        })
    }, [])

    return (
        <div ref={content}>
{
        loading ? (<LoadingSpinner />) :
        error ? (<ErrorMessage variant="danger">{error}</ErrorMessage>)
            : (
                <div className="flex-container-shopping">

                        
                    <div>
                        
                        <div className="container-cart ">
                                <div className="cat-title">Order Items</div>
                                <div className="">
                              
                                    {order.orderItems.map((item) => (
                                        <CartItemsOnPOScreen key={item.product} item={item} />
                                    ))
                                    }
                                
                                </div></div><br/>
                    
                           
                        <div className="cat-title">Delivery Details</div>
                            
                            <div className="address-details">
                                <div>
                                <span className="address-details-bold ">Status:</span>  {order.isDeliverd ? <span>Delivered at {order.deliveredAt}</span> 
                                        : <span>Not Delivered</span>} <br />
                                <span className="address-details-bold ">Address:</span> {order.shippingAddress.address},
                                {order.shippingAddress.city}, {order.shippingAddress.postalCode},
                                {order.shippingAddress.country}
                                
                                       

                                </div>
            
                            </div>
                           
                            <div className="cat-title">Payment Details</div>
                            <div className="address-details">

                            <div>
                            <span className="address-details-bold ">Status:</span>{order.isPaid ? <div>Paid on {order.paidAt}</div> 
                                        : <div>Not Paid</div>}
                                <span className="address-details-bold ">Payment Method:</span>  {order.paymentMethod}
                                        </div>
                                        
                            </div> 
                       
                            
                    </div>

                
                <div className="his-summary-section">
                
                <div className="">
        
                            <div className="order-sum-text">Order Summary</div>
                            <div className="discover"> <strong>ORDER ID:</strong> {order._id} </div><br/>
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
        
            
        </div>
                    
        </div>
            </div>
       
            )
            } </div>
    )
}

export default OrderDetails
