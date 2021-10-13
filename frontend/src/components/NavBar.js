import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const NavBar = ({ cartItems }) => {
    // const cart = useSelector((state) => state.cart);
    // const { cartItems } = cart;

    return (
        <div className="grid-container row">
            <div>Menu</div>
            <div><Link to="/" className="ame brand" >CASA</Link></div>
   <div><Link to="/cart">Cart {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )}</Link>
              <Link to="/login">Login</Link></div>
               
        </div>
    )
}

export default NavBar
