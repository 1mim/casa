import React from 'react'
import { Link } from 'react-router-dom'

const ProductHighlight4 = ({products}) => {
    return (
        <div className="high2container">
            <div className="vertical-center">
                <div><img src={products[3].image} alt={products[3].name} className="highlight" /> </div>
                <div className="rotatehighlight"> {products[3].name} </div>

                <div className="highlightinfobox">
                    <div className="producttype">{products[3].type}</div>
                    <div className="name" > {products[3].name} </div>
                    <div className="price" >${products[3].price.toFixed(2)}</div>
                   
                    <Link to={`/product/${products[3]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
       
                </div>
            </div>
        </div>
    )
}

export default ProductHighlight4
