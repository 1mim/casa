import React from 'react'

const ShoppingCart = (props) => {
    const id = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    return (
        <div>
            <h1 className="ame">Shopping Cart</h1>
            <p>ADD TO CART: Product ID: {id} Qty: {qty} </p>
        </div>
    )
}

export default ShoppingCart
