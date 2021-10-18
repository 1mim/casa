import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../redux/actions/userActions';
import AccountDetails from './AccountDetails'
import OrderHistory from './OrderHistory'

const UserAccount = (props) => {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;


    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id])


    return (
        <div className="row top">
            <p>This is user account page.</p>
            <div className="col-1">
                {userInfo.name}
                <AccountDetails user={user} loading={loading} error={error}/>
            </div>
            <div className="col-2">
                <h1>Order History</h1>
                <OrderHistory /> </div>
        </div>
    )
}

export default UserAccount
