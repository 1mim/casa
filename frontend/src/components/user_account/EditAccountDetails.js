import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsUser, updateUserProfile } from '../redux/actions/userActions';
import { USER_UPDATE_RESET } from '../redux/constants/userConstants';

const EditAccountDetails = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile;

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
            props.history.push('/account')
        }
    };

    return (
        <div className="flex-container-shopping">
        <div className="container-cart">
            <div className="cat-title">Edit Account</div>
                <form className="borang-address" onSubmit={handleSubmit}>
                
               
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
                                    <div> 
                                    <label htmlFor="name" className="isiborang">Name</label>
                                    <input id="name" className="isiborang" type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                                    </div>
                                        
                                    <div> 
                                    <label htmlFor="email" className="isiborang">Email</label> 
                                    <input id="email" className="isiborang" type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                                    </div>
                                    
                                    <div> 
                                    <label htmlFor="password" className="isiborang">Password</label> 
                                    <input id="password" className="isiborang" type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                                    </div>
                                   
                                    <div> 
                                    <label htmlFor="confirmPassword" className="isiborang">Confirm Password</label> 
                                    <input id="confirmPassword" className="isiborang" type="password" placeholder="confirm password" onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                                        </div>
                                        <div className="center-pls">
                                    
                    
                                        <button className="browse" type="submit">Update</button>
                                    </div>
                                </>
                        )}
                    </div>

            
                </form>
                </div>
    </div>
    )
}

export default EditAccountDetails
