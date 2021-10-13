import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsProduct } from '../redux/actions/productActions';

const ProductDetail = (props) => {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id])

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
                {product.name}
                ${product.price}
            </div></div>
        </div>)}
    </div>
       
    )
}

export default ProductDetail
