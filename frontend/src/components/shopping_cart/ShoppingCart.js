import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import CartItems from './CartItems';
import CartSubTotal from './CartSubTotal';
import { Link } from 'react-router-dom';
import "./ShoppingStyle.css";

const ShoppingCart = (props) => {
    const dispatch = useDispatch()
    const id = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        props.history.push('/login?redirect=delivery')
    }

    return (
        <div className="flex-container-shopping">
              
            <div className="">
                <div className="cat-title">Shopping Cart</div>
                <div className="container-cart">
                {cartItems.length === 0 ?
                    (<div className="empty-cart">Cart is empty. <Link to="/">Browse our exclusive collection.</Link></div>) :
                    (cartItems.map((item) => (
                        <CartItems key={item.product} item={item} removeFromCartHandler={removeFromCartHandler} dispatch={dispatch}/>
                    ))
                )
                }</div></div>
            
            <div className="flex-item-shopping">
                <CartSubTotal cartItems={cartItems} checkoutHandler={checkoutHandler}/>
            </div>
          
        </div>
    )
}

export default ShoppingCart
