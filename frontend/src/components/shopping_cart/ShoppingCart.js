import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import CartItems from './CartItems';
import CartSubTotal from './CartSubTotal';
import { Link } from 'react-router-dom';
import "./ShoppingStyle.css";
import { gsap, Power2 } from 'gsap';

const ShoppingCart = (props) => {
    const dispatch = useDispatch()
    const id = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const tl = useRef()
    const sidebar = useRef()
    const stagger = useRef()

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        .from(sidebar.current, {
            opacity: 0,
            width: 0,
            ease: Power2.easeOut,
            duration:0.5,
        })
            .from(stagger.current, {
                opacity: 0,
                // y: 100,
                duration: 1,
                ease: Power2.easeIn,
        })
    }, [])

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
                <div className="container-cart" ref={stagger}>
                {cartItems.length === 0 ?
                    (<div className="empty-cart">Cart is empty. <Link to="/"><span className="empty-cart-bold">Browse our exclusive collection.</span></Link></div>) :
                    (cartItems.map((item) => (
                        <CartItems key={item.product} item={item} removeFromCartHandler={removeFromCartHandler} dispatch={dispatch}/>
                    ))
                )
                }</div></div>
            
            <div className="flex-item-shopping" ref={sidebar}>
                <CartSubTotal cartItems={cartItems} checkoutHandler={checkoutHandler}/>
            </div>
          
        </div>
    )
}

export default ShoppingCart
