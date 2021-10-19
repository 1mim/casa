import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../redux/actions/userActions';
import AccountDetails from './AccountDetails';
import OrderHistory from './OrderHistory';
import './UserStyle.css';

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
        <div>
        <div className="userpage-container">
            
            <div className="userdeets-section">
                <AccountDetails user={user} loading={loading} error={error}/>
            </div>
            <div className="user-history">
                <OrderHistory /> </div>
        </div></div>
    )
}

export default UserAccount
