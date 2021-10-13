import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} style={ {maxWidth:"50%"}}/>
            <h2 className="ame"> {product.name} </h2>
            <h3>{product.price}</h3>
            <h4>{product.type}</h4>
            <Link to={`/product/${product._id}`}><button>Find out More</button></Link>
        </div>
    )
}

export default ProductCard
