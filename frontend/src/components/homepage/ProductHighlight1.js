import React from 'react'
import { Link } from 'react-router-dom'

const ProductHighlight1 = ({products}) => {
    return (
        <div className="high1container">
            <div className="vertical-center">
            <div className="about">Collection Uno</div>
                <div><img src={products[0].image} alt={products[0].name} className="highlight" /> </div>
                <div className="rotatehighlight"> {products[0].name} </div>

                <div className="highlightinfobox">
                    <div className="producttype">{products[0].type}</div>
                    <div className="name" > {products[0].name} </div>
                    <div className="price" >${products[0].price.toFixed(2)}</div>
                   
                    <Link to={`/product/${products[0]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
       
                </div>
            </div>
        </div>
    )
}

export default ProductHighlight1
