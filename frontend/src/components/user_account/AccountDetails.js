import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
// import { detailsUser } from '../redux/actions/userActions';

const AccountDetails = ({user, loading, error}) => {
    // const userAcc = useSelector(state => state.userAcc);
    // const { userInfo } = userAcc;

    // const dispatch = useDispatch()

    // const userDetails = useSelector(state => state.userDetails);
    // const { loading, error, user } = userDetails;

    // useEffect(() => {
    //     dispatch(detailsUser(userInfo._id));
    // }, [dispatch, userInfo._id])

    return (
        <div>
                <div className="name">User Profile</div>
                    <div>
                        {loading ? (<LoadingSpinner />)
                            :
                            error ? (<ErrorMessage variant="danger">{error}</ErrorMessage>) :
                                (
                                    <>
                                        <div>{user.name}</div>
                                        <div>Email: {user.email}</div>
                                        <div>Password: {user.password.substring(0, 10)}</div>
                                        <div>
                                            <button className="continue" type="submit">Edit</button>
                                        </div>
                                    </>
                            )}
                        </div>
                </div>
    )
}

export default AccountDetails
