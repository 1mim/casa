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
            <p>List of order History here</p>
            {loading ? <LoadingSpinner /> :
            error? <ErrorMessage variant="danger">{error}</ErrorMessage>
            : (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
        
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                        
                            <td><Link to={`/account/orderdetails/${order._id}`}>{order._id.substring(0, 10)}</Link></td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>${order.totalPrice.toFixed(2)}</td>
                            <td>{order.isPaid? order.paidAt.substring(0, 10): 'No'}</td>
                            <td>{order.isDelivered? order.paidAt.substring(0, 10): 'No'}</td>
                            
                            </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default OrderHistory
