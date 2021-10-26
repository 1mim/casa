import React, { useEffect } from 'react'
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
// import ProductHighlight from './ProductHighlight'

const Homescreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch])

    return (
        <div>
            {loading ? <LoadingSpinner></LoadingSpinner> :
                error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                    <div>
                        <LandingPage products={products} />
                        <div><AboutSegment /></div>
                        <div >
                            <div className="about just-title">Collection Uno</div>
                            {/* <div className="flex-contain" ><ProductHighlight products={products}/></div> */}
                            <div className="flex-contain">
                                <div ><ProductHighlight1 products={products}/></div>
                                <div ><ProductHighlight2 products={products}/></div>
                                <div ><ProductHighlight3 products={products}/></div>
                                <div ><ProductHighlight4 products={products} /></div>
                            </div>
                            
                        </div>
                        <footer className="paddingsikit"><Footer /></footer>
                        </div>
            }
        </div>
    )
}

export default Homescreen
