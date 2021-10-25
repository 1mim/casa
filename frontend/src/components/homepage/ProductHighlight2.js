import React from 'react'
import { Link } from 'react-router-dom'

const ProductHighlight2 = ({products}) => {
    return (
        <div className="high2container">
            <div className="vertical-center">
                <div><img src={products[1].image} alt={products[1].name} className="highlight" /> </div>
                <div className="rotatehighlight"> {products[1].name} </div>

                <div className="highlightinfobox">
                    <div className="producttype">{products[1].type}</div>
                    <div className="name" > {products[1].name} </div>
                    <div className="price" >${products[1].price.toFixed(2)}</div>
                   
                    <Link to={`/product/${products[1]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
       
                </div>
            </div>
        </div>
    )
}

export default ProductHighlight2
