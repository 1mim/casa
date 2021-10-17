import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsUser, updateUserProfile } from '../redux/actions/userActions';
import { USER_UPDATE_RESET } from '../redux/constants/userConstants';

const EditAccountDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile;


    const userAcc = useSelector(state => state.userAcc);
    const { userInfo } = userAcc;

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);   
        }
    }, [dispatch, userInfo._id, user])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords dont match')
        } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }))
        }
    };

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
                                        {loadingUpdate && <LoadingSpinner />}
                                        {errorUpdate && (
                                            <ErrorMessage variant="danger">{errorUpdate}</ErrorMessage>
                                        )}
                                        {successUpdate && <div>Profile updated Successfully</div>}
                                    <input id="name" type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                                    <input id="email" type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                                    <input id="password" type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                                    <input id="confirmPassword" type="password" placeholder="confirm password" onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                                    <div>
                                        <button className="primary" type="submit"> Update</button>
                                    </div>
                                </>
                        )}
                    </div>

            </div>
        </form>
    </div>
    )
}

export default EditAccountDetails
