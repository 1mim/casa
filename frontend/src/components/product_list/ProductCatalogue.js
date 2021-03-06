import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../modals/LoadingSpinner';
import ErrorMessage from '../modals/ErrorMessage';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import "./Catalogue.css";
import Footer from '../Footer';

const ProductCatalogue = () => {

    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch])

    return (
        <div>
            {
                loading ? <LoadingSpinner></LoadingSpinner>
                : error ? <ErrorMessage variant="danger">{error}</ErrorMessage>
                : <div className="flex-container">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
                
                </div>
            }
            <footer><Footer /></footer>
        </div>
    )
}

export default ProductCatalogue
