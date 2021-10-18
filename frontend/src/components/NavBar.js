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
        <div className="grid-container row navbar">
            <div>Menu</div>
            <div><Link to="/" className="ame brand navbar" >CASA</Link></div>
   <div className="absolute"><Link to="/cart">Cart {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )}</Link>
                {
                    userInfo ? (
                        <div className="dropdown navbar">
                            <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> {" "}</Link>
                            <ul className="dropdown-content navbar">
                                <li className="navbar"><Link to="/account">Account</Link></li>
                                <li className="navbar"><Link to="#logout" onClick={handlelogout}>Logout</Link></li>
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
