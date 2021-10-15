import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import CartItems from './CartItems';
import CartSubTotal from './CartSubTotal';
import { Link } from 'react-router-dom';

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
        <div className="row top">
              
            <div className="col-2 itemcol">
            <h1 className="ame">Shopping Cart</h1>
                {cartItems.length === 0 ?
                    (<p>Cart is empty. <Link to="/">Browse our exclusive collection.</Link></p>) :
                    (cartItems.map((item) => (
                        <CartItems key={item.product} item={item} removeFromCartHandler={removeFromCartHandler} dispatch={dispatch}/>
                    ))
                )
                }</div>
            
            <div className="col-1 card card-body">
                <CartSubTotal cartItems={cartItems} checkoutHandler={checkoutHandler}/>
            </div>
          
        </div>
    )
}

export default ShoppingCart
