import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const NavBar = () => {
    // const cart = useSelector((state) => state.cart);
    // const { cartItems } = cart;

    return (
        <div className="grid-container row">
            <div></div>
            <div><span className="ame">CASA</span></div>
            <div><Link to="/cart">Cart
                        </Link>
                <Link to="/sign-in">Sign In</Link>
                </div>
        </div>
    )
}

export default NavBar
