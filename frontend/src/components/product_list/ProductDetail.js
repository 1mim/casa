import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { detailsProduct } from '../redux/actions/productActions';
import { gsap, Power2 } from 'gsap';

const ProductDetail = (props) => {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const [qty, setQty] = useState(1)

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
 
    const tl = useRef()
    const imagefull = useRef(null)
    const content = useRef()

    useEffect(() => {
        dispatch(detailsProduct(id));

        tl.current = gsap.timeline()
        gsap.to(content.current, {
            opacity: 0,
            y: 200,
            // width:0,
            duration: 1,
            ease: Power2.easeIn,
        })

    }, [dispatch, id])

   
    // useEffect(() => {
    //     tl.current = gsap.timeline()
    //     .from(imagefull.current, {
    //         opacity: 0,
    //         y: 800,
    //         duration:1,
    //         ease: Power2.easeIn,
    //     })
    //     .from(content.current, {
    //         opacity: 0,
    //         x: 100,
    //         duration:1,
    //         ease: Power2.easeIn,
    //     })
    // }, [])

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
            
             <div className="">
            <div className="flex-container-deets">
            <div className="detImgItem" ref={imagefull}>
            <img className="highlight" src={product.image} alt={product.name} />
            </div>
                <div className="detOfItem" ref={content}>
                <Link to="/"><div className="back-store"><i class="fa fa-arrow-circle-left"></i> Back to store </div></Link><br/>
                <div className="producttype">{product.type}</div>
                <div className="name"> {product.name} </div>
                                        <div className="price">${product.price.toFixed(2)}</div>
                                        <div>
                    {product.countInStock > 0 ? (
                        <span className="instock">In Stock</span>
                    ) : (
                            <span className="danger">Unavailable</span>
                    )}
                </div><br />
                                        <div className="description"> <p>{product.description} </p></div>
                                        <div className="accordion">

                                        <div className="accordion-item" id="question1">
                                             <a className="accordion-link" href="#question1">
                                            Material
                                            <i class="icon ion-md-arrow-forward"></i>
                                            <i class="icon ion-md-arrow-down"></i>
                                                </a>
                                                <div class="answer">
                                                    <p> {product.material}</p>
                                                </div>
                                            </div>
                                
                                            <div class="accordion-item" id="question2">
                                                
                                                <a class="accordion-link" href="#question2">
                                                    Dimension
                                                    <i class="icon ion-md-arrow-forward"></i>
                                            <i class="icon ion-md-arrow-down"></i>
                                                </a>
                                                <div class="answer">
                                                    <p> {product.dimensionW}cmW x {product.dimensionD}cmD x {product.dimensionH}cmH</p>
                                            
                                                </div>
                                            </div>
                                        </div><br/>
               
                                        {product.countInStock > 0 && (
                                            <>
                                                
                                                    <div className="container-row">
                                                     <div>
                                                    <div className="quantity">Quantity</div>  <select value={qty} onChange={handleQtyChange}>
                                                     {
                                                            [...Array(product.countInStock).keys()].map(x => (
                                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))
                                                        } 
                                                    </select>

                                                    </div>

                                                <button onClick={addToCartHandler} className="add">Add to Cart</button>
                                                </div>
                                            </>
                                        )}
                                       
                                        
            </div></div>
        </div>)}
    </div>
       
    )
}

export default ProductDetail
