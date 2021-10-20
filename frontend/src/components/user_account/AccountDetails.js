import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
// import { detailsUser } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

const AccountDetails = ({user, loading, error}) => {

    return (
        <div>
                <div className="name">User Profile</div>
                    <div>
                        {loading ? (<LoadingSpinner />)
                            :
                            error ? (<ErrorMessage variant="danger">{error}</ErrorMessage>) :
                                (
                            <><div></div>
                                        <div className="hello">Hello, {user.name}</div>
                                        <div>Email: {user.email}</div>
                                        <div>Password: ********</div>
                                        <div><br/>
                                          <Link to="/editaccount"> <button className="continue">Edit</button></Link>
                                        </div>
                                    </>
                            )}
                        </div>
                </div>
    )
}

export default AccountDetails
