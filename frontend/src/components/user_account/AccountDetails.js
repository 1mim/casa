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


    const handleSubmit = (e) => {
        e.preventDefault();
        //update profile details here later
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>User Profile</h1>
                    <div>
                        {loading ? (<LoadingSpinner />)
                            :
                            error ? (<ErrorMessage variant="danger">{error}</ErrorMessage>) :
                                (
                                    <>
                                        <h1>{user.name}</h1>
                                        <p>Email: {user.email}</p>
                                        <p>Password: {user.password}</p>
                                        <div>
                                            <button className="primary" type="submit">Edit</button>
                                        </div>
                                    </>
                            )}
                        </div>

                </div>
            </form>
        </div>
    )
}

export default AccountDetails
