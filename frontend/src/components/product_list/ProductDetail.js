import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsProduct } from '../redux/actions/productActions';

const ProductDetail = (props) => {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const [qty, setQty] = useState(1)

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id])

    const handleQtyChange = (e) => {
        setQty(e.target.value)
    }

    const addToCartHandler = () => {
        props.history.push(`/cart/${id}?qty=${qty}`)
    }

    return (
        <div>
        {
            loading ? <LoadingSpinner></LoadingSpinner>
            : error ? <ErrorMessage variant="danger">{error}</ErrorMessage>
            : (
            
             <div>
            <Link to="/">Back to store</Link>
            <div className="row top">
            <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
                <div>{product.name}</div>
                <div>${product.price}</div>
                <div>
                    {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                    ) : (
                            <span className="danger">Unavailable</span>
                    )}
                </div>
                                        {product.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>Qty</div>
                                                    </div>
                                                    <select value={qty} onChange={handleQtyChange}>
                                                        {
                                                            [...Array(product.countInStock).keys()].map(x => (
                                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))
                                                        }
                                                    </select>
</li>
                                                <button onClick={addToCartHandler} className="primary block">Added to Cart</button>
                                                </>
                )}
                                        
            </div></div>
        </div>)}
    </div>
       
    )
}

export default ProductDetail
