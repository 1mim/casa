import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { Link } from 'react-router-dom';
import { listUserOrder } from '../redux/actions/orderActions';

const OrderHistory = (props) => {

    const userOrderList = useSelector(state => state.userOrderList);
    const { loading, error, orders } = userOrderList;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listUserOrder());
    }, [dispatch])

    return (
        <div>
            <div className="name">Order History</div>
            {loading ? <LoadingSpinner /> :
            error? <ErrorMessage variant="danger">{error}</ErrorMessage>
            : (
            <div className="">
                 <div className="row-middle">
                <div className="cart-space-even">
                        <div>ID</div>
                        <div>DATE</div>
                        <div>TOTAL</div>
                        <div>PAID</div>
                        <div>DELIVERED</div>
        
                    </div>
                            </div>
                            
                            <div className="">
                                <div className="deetswrap">
                                <div className="historydeeets">
                    {orders.map((order) => (
                        <div key={order._id}>
                        
                            <div><Link to={`/orderdetails/${order._id}`}>{order._id.substring(0, 10)}</Link></div>
                            <div>{order.createdAt.substring(0, 10)}</div>
                            <div>${order.totalPrice.toFixed(2)}</div>
                            <div>{order.isPaid? order.paidAt.substring(0, 10): 'No'}</div>
                            <div>{order.isDelivered? order.paidAt.substring(0, 10): 'No'}</div>
                            
                            </div>
                    ))}
                                
                                </div></div></div>
            </div>
            )}
        </div>
    )
}

export default OrderHistory
