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
            <div><Link to="/" className="logo" >CASA</Link></div>
   <div className="absolute"><Link to="/cart">Cart {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )}</Link>
                {
                    userInfo ? (
                        <div className="dropdown navbar">
                            <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> {" "}</Link>
                            <ul className="dropdown-content navbar">
                            <Link to="/account"><li className="navbar" style={{color:'#28050A'}}>Account</li></Link>
                                <Link to="#logout" onClick={handlelogout}><li className="navbar" style={{color:'#28050A'}}>Logout</li></Link>
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
