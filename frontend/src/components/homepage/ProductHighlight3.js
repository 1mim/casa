import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2, ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const ProductHighlight3 = ({ products }) => {
    
    const three = useRef()
    
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: three.current,
                // markers: true,
                start: "top bottom+=150",
                end: "top 20%",
                scrub: 2,
                // snap:true,
                // toggleActions: "play none none reverse",
                // pin: true,
                // pinSpacing: false,
                onEnter: () => {
                    tl.fromTo(three.current, {
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
          
        
    }, [three])

    return (
        <div className="high1container" ref={three}>
        <div className="vertical-center">
            <div><img src={products[2].image} alt={products[2].name} className="highlight" /> </div>
            <div className="rotatehighlight"> {products[2].name} </div>

            <div className="highlightinfobox">
                <div className="producttype">{products[2].type}</div>
                <div className="name" > {products[2].name} </div>
                <div className="price" >${products[2].price.toFixed(2)}</div>
               
                <Link to={`/product/${products[2]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
   
            </div>
        </div>
    </div>
    )
}

export default ProductHighlight3
