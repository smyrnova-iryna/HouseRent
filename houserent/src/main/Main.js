import { gsap } from 'gsap';
import { useRef, useLayoutEffect } from 'react';

import React from 'react';

// start
const Main = ({data}) => {

    const comp = useRef();
  
   

    useLayoutEffect(() => {
  
      let ctx = gsap.context(() => {
        
        let tl = gsap.timeline()
  
        tl.from(".Main-description-block", 
        { 
          duration: 2.1,
          stagger: 0.8,
          x: -1000
        }); 
  
      }, comp); 
      
      return () => ctx.revert(); 
      
    }, []);

    
      useLayoutEffect(() => {


          let tl = gsap.timeline({ repeat: -1 });
  
        let ctx = gsap.context(() => {
            tl.to(".Slider-image1", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image2", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image3", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image4", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image5", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image6", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image7", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image8", { duration: 5, opacity: 0, delay: 5 });
            tl.to(".Slider-image9", { duration: 5, opacity: 0, delay: 5 });
        }, comp);
            
          
          return () => ctx.revert();  
        
      }, []);

  


    return (
        <div className="Main-Container" ref={comp}>
            <div className="Main-description-container">
            <p className="Main-description-block First-block">{data.main.mainInfo[0]}</p>
            <p className="Main-description-block Second-block">{data.main.mainInfo[2]}</p>
            <p className="Main-description-block Third-block">{data.main.mainInfo[1]}</p>
            </div>
            <div className="Main-carousel-container">
            <div className="mainPageContainer">
                   <div className="mainPageCertificatesContainer">
                        <img className='Slider-image Slider-image9' src={require("../data/carousel/carousel_photo_1.jpg")} alt="Carousel item 1" />
                        <img className='Slider-image Slider-image8' src={require("../data/carousel/carousel_photo_2.jpg")} alt="Carousel item 2" />
                        <img className='Slider-image Slider-image7' src={require("../data/carousel/carousel_photo_3.jpg")} alt="Carousel item 3" />
                        <img className='Slider-image Slider-image6' src={require("../data/carousel/carousel_photo_4.jpg")} alt="Carousel item 4" />
                        <img className='Slider-image Slider-image5' src={require("../data/carousel/carousel_photo_5.jpg")} alt="Carousel item 5" />
                        <img className='Slider-image Slider-image4' src={require("../data/carousel/carousel_photo_6.jpg")} alt="Carousel item 6" />
                        <img className='Slider-image Slider-image3' src={require("../data/carousel/carousel_photo_7.jpg")} alt="Carousel item 7" />
                        <img className='Slider-image Slider-image2' src={require("../data/carousel/carousel_photo_8.jpg")} alt="Carousel item 8" />
                        <img className='Slider-image Slider-image1' src={require("../data/carousel/carousel_photo_9.jpg")} alt="Carousel item 9" />
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Main;