import React from 'react'
import OrderHistory from './OrderHistory'

const UserAccount = () => {
    return (
        <div>
            <p>This is user account page.</p>
            <div className="col-1">User info collumn here</div>
            <div className="col-2">
                <h1>Order History</h1>
                <OrderHistory /> </div>
        </div>
    )
}

export default UserAccount
