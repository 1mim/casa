import React from 'react'
import { Link } from 'react-router-dom'

const EachHistory = ({ order }) => {
    return (
        <div className="historydeeets">
                <div>{order._id.substring(0, 10)}</div>
                <div>{order.createdAt.substring(0, 10)}</div>
                <div>${order.totalPrice.toFixed(2)}</div>
                <div>{order.isPaid? order.paidAt.substring(0, 10): 'No'}</div>
                <div>{order.isDelivered? order.paidAt.substring(0, 10): 'No'}</div>
        </div>
    )
}

export default EachHistory
