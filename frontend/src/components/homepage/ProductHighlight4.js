import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2, ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const ProductHighlight4 = ({ products }) => {
    
    const four = useRef()
    
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: four.current,
                // markers: true,
                start: "top bottom+=150",
                end: "top 20%",
                scrub: 2,
                // snap:true,
                // toggleActions: "play none none reverse",
                // pin: true,
                // pinSpacing: false,
                onEnter: () => {
                    tl.fromTo(four.current, {
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
          
        
    }, [four])

    return (
        <div className="high1container" ref={four}>
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
