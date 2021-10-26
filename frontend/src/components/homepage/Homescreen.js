import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../modals/ErrorMessage'
import LoadingSpinner from '../modals/LoadingSpinner'
import { listProducts } from '../redux/actions/productActions'
import LandingPage from './LandingPage'
import "./HomeStyle.css"
import AboutSegment from './AboutSegment'
import ProductHighlight1 from './ProductHighlight1'
import ProductHighlight2 from './ProductHighlight2'
import ProductHighlight3 from './ProductHighlight3'
import ProductHighlight4 from './ProductHighlight4'
import Footer from '../Footer'
// import { gsap } from 'gsap';
// import { Power2, ScrollTrigger } from 'gsap/all'

const Homescreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch])

    // const one = useRef()
    // // const two = useRef()
    // // const three = useRef()
    // // const four = useRef()
    // // const five = useRef()
    // // let tl = useRef()
    
    // gsap.registerPlugin(ScrollTrigger);
    

    // useLayoutEffect(() => {
        
    //     gsap.from(one.current, {
    //         autoAlpha: 0,
    //         scrollTrigger: {
    //             trigger: one.current,
    //             // start: "top center+=150",
    //             // end: "top 50%",
    //             // scrub: 1,
    //             // toggleActions: "restart none none none"
    //         },
    //     })
        
    // }, [])

    return (
        <div>
            {loading ? <LoadingSpinner></LoadingSpinner> :
                error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                    <div>
                        <LandingPage products={products} />
                        <div><AboutSegment /></div>
                        <div className="flex-contain">
                        <div className="about just-title">Collection Uno</div>
                            <ProductHighlight1 products={products}/>
                            <ProductHighlight2 products={products}/>
                            <ProductHighlight3 products={products}/>
                            <ProductHighlight4 products={products}/>
                        </div>
                        <footer className="paddingsikit"><Footer /></footer>
                        </div>
            }
        </div>
    )
}

export default Homescreen
