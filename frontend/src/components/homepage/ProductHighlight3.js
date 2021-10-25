import React from 'react'
import { Link } from 'react-router-dom'

const ProductHighlight3 = ({products}) => {
    return (
        <div className="high1container">
        <div className="vertical-center">
        <div className="about">Collection Uno</div>
            <div><img src={products[2].image} alt={products[2].name} className="highlight" /> </div>
            <div className="rotatehighlight"> {products[2].name} </div>

            <div className="highlightinfobox">
                <div className="producttype">{products[2].type}</div>
                <div className="name" > {products[2].name} </div>
                <div className="price" >${products[2].price.toFixed(2)}</div>
               
                <Link to={`/product/${products[2]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
   
            </div>
        </div>
    </div>
    )
}

export default ProductHighlight3
