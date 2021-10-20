import React, { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap, Power2 } from 'gsap';
import { Bounce } from 'gsap/all';

const ProductCard = ({ product }) => {

    const tl = useRef()
    const image = useRef()
    const infoAni = useRef()
    const namasenget = useRef()
    const content = useRef()

    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        .from(image.current, {
            opacity: 0,
            // x: 100,
            duration: 0.2,
            ease: Power2.easeIn,
        })
        .from(infoAni.current, {
            x: -200,
            opacity: 0,
            duration: 0.5,
            ease: Power2.easeOut,
        })
        .from(content.current, {
            opacity: 0,
            ease: Power2.easeOut,
        })
        .from(namasenget.current, {
            y: 200,
            opacity: 0,
            ease: Power2.easeInOut,
            duration:0.6,
        })
    }, [])

    //animating pic on hover
    const hoverImage = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            x: 20,
            // scale: 1,
            duration: 1,
            ease: Bounce,
        })
    }

    const hoverOut = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            x: 0,
            // scale: -1,
            duration: 1,
            ease: Bounce,
        })
    }

    //animating text senget 
    const hoverName = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: 10,
            duration: 1,
            ease: Bounce,
        })
    }

    const hoverOutName = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: 0,
            duration: 1,
            ease: Bounce,
        })
    }



    return (
        <div className="">
            
            <div className="flex-item">
            
                <img src={product.image} alt={product.name} className="index" style={{ maxWidth: "100%" }} ref={image} onMouseEnter={hoverImage} onMouseLeave={hoverOut}/>
             
            <div className="infobox" ref={infoAni}>
            <div className="producttype" ref={content}>{product.type}</div>
            <div className="name" ref={content}> {product.name} </div>
            <div className="price" ref={content}>${product.price.toFixed(2)}</div>
            <Link to={`/product/${product._id}`}><span className="discover" ref={content}>Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
       
                </div>
                <div className="textrotate" ref={namasenget} onMouseEnter={hoverName} onMouseLeave={hoverOutName}> {product.name} </div>
        </div></div>
    )
}

export default ProductCard
