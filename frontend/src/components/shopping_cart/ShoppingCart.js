import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ShoppingCart = (props) => {
    const dispatch = useDispatch()
    const id = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    return (
        <div>
            <h1 className="ame">Shopping Cart</h1>
            <p>ADD TO CART: Product ID: {id} Qty: {qty} </p>
        </div>
    )
}

export default ShoppingCart
