import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2, ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const ProductHighlight2 = ({ products }) => {
    
    const two = useRef()
    
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: two.current,
                // markers: true,
                start: "top bottom+=150",
                end: "top 20%",
                scrub: 2,
                // snap:true,
                // toggleActions: "play none none reverse",
                // pin: true,
                // pinSpacing: false,
                onEnter: () => {
                    tl.fromTo(two.current, {
                        xPercent: 100,
                        yPercent: 0,
                        autoAlpha: 0
                        
                    }, {
                        xPercent: 0,
                        yPercent: 0,
                        autoAlpha:1,
                        duration: 2,
                        ease: Power2
                    })
                }
                
            }
        });
          
        
    }, [two])

    return (
        <div className="high1container" ref={two}>
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
