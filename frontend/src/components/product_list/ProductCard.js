import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="">
            
            <div className="flex-item">
            
                <img src={product.image} alt={product.name} className="index" style={{ maxWidth: "100%" }} />
             
            <div className="infobox">
            <div className="producttype">{product.type}</div>
            <div className="name"> {product.name} </div>
            <div className="price">${product.price.toFixed(2)}</div>
            <Link to={`/product/${product._id}`}><span className="discover">Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
       
                </div>
                <div className="textrotate"> {product.name} </div>
        </div></div>
    )
}

export default ProductCard
