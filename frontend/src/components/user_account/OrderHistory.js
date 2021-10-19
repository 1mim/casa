import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { Link } from 'react-router-dom';
import { listUserOrder } from '../redux/actions/orderActions';
import EachHistory from './EachHistory';

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
                
                 <div className="inlineitemslah historyheader">
               
                        <div>ID</div>
                        <div>DATE</div>
                        <div>TOTAL</div>
                        <div>PAID</div>
                        <div>DELIVERED</div>
        
                    
                            </div>
                            
                            <div className="">
                                <div className="deetswrap">
                                
                    {orders.map((order) => (
                       <Link to={`/orderdetails/${order._id}`}><EachHistory key={order._id} order={order}/> </Link>
                        
                            
                    ))}
                                
                                </div></div>
            </div>
            )}
        </div>
    )
}

export default OrderHistory
