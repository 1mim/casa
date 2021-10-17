import React from 'react'
import AccountDetails from './AccountDetails'
import OrderHistory from './OrderHistory'

const UserAccount = () => {
    return (
        <div className="row top">
            <p>This is user account page.</p>
            <div className="col-1">
                <AccountDetails />
            </div>
            <div className="col-2">
                <h1>Order History</h1>
                <OrderHistory /> </div>
        </div>
    )
}

export default UserAccount
