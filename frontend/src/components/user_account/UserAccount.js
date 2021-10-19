import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../redux/actions/userActions';
import AccountDetails from './AccountDetails';
import OrderHistory from './OrderHistory';
import './UserStyle.css';
import { gsap, Power2 } from 'gsap';

const UserAccount = (props) => {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const tl = useRef()
    const appearside = useRef()
    const appearlist = useRef()

    useEffect(() => {
        dispatch(detailsUser(userInfo._id));

        tl.current = gsap.timeline()
        .from(appearside.current, {
            opacity: 0,
            width: 0,
            ease: Power2.easeOut,
            duration:0.5,
        })
        .from(appearlist.current, {
            opacity: 0,
            // y: 100,
            ease: Power2.easeOut,
            duration:1,
        })
    }, [dispatch, userInfo._id])


    return (
        <div>
        <div className="userpage-container">
            
            <div className="userdeets-section" ref={appearside}>
                <AccountDetails user={user} loading={loading} error={error}/>
            </div>
            <div className="user-history" ref={appearlist}>
                <OrderHistory /> </div>
        </div></div>
    )
}

export default UserAccount
