import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2, ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const ProductHighlight = ({ products }) => {
    const one = useRef()
    const two = useRef()
    const three = useRef()
    const four = useRef()
    
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: one.current,
                markers: true,
                start: "top center+=150",
                end: "center 50%",
                scrub: 2,
                // snap:true,
                toggleActions: "play none none reverse",
                // pin: true,
                // pinSpacing: false,
                onEnter: () => {
                    tl.fromTo(one.current, {
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
          
        
    }, [one])

    return (
        <div >
            <div className="high1container" ref={one}>
                <div className="vertical-center">
                    <div><img src={products[0].image} alt={products[0].name} className="highlight" /> </div>
                    <div className="rotatehighlight"> {products[0].name} </div>

                    <div className="highlightinfobox">
                        <div className="producttype">{products[0].type}</div>
                        <div className="name" > {products[0].name} </div>
                        <div className="price" >${products[0].price.toFixed(2)}</div>
                    
                        <Link to={`/product/${products[0]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
        
                    </div>
            </div>
            </div>
            
            {/* product 2 */}
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
            

            {/* product 3 */}
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
            
            {/* product 4 */}
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



        </div>
    )
}

export default ProductHighlight
