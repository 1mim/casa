import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from './redux/actions/userActions'

const NavBar = ({ cartItems, userInfo }) => {
  
    const dispatch = useDispatch()

    const handlelogout = () => {
        dispatch(logout());
    }
    
    return (
        <div className="grid-container row">
            <div>Menu</div>
            <div><Link to="/" className="ame brand" >CASA</Link></div>
   <div><Link to="/cart">Cart {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )}</Link>
                {
                    userInfo ? (
                        <div className="dropdown">
                            <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> {" "}</Link>
                            <ul className="dropdown-content">
                            <Link to="#logout" onClick={handlelogout}>Logout</Link>
                            </ul>
                            </div>
                    ) : (
                        <Link to="/login">Login</Link>    
                    )
                }
              </div>
               
        </div>
    )
}

export default NavBar
