import { gsap } from 'gsap';
import { useRef, useLayoutEffect, useState } from 'react';

import React from 'react';

const Loader = ({data}) => {

    const comp = useRef();

    // const [sliderVisibility, setSliderVisibility] = useState("Loading-Slider");



    // useLayoutEffect(() => {
    //     const onPageLoad = () => {
    //       setSliderVisibility("")
    //       let tl = gsap.timeline({ repeat: -1 });
  
    //                   let ctx = gsap.context(() => {
    //                       tl.to(".Slider-image1", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image2", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image3", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image4", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image5", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image6", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image7", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image8", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image9", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image10", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image11", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image12", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image13", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image14", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image15", { duration: 1, opacity: 0, delay: 1 });
    //                       tl.to(".Slider-image16", { duration: 1, opacity: 0, delay: 1 });
    //                   }, comp);
                          
                      
    //                   return () => ctx.revert(); 
    //     };
    
        // Check if the page has already loaded
    //     if (document.readyState === 'complete') {
    //       onPageLoad();
    //     } else {
    //       window.addEventListener('load', onPageLoad, false);
          
    //       return () => window.removeEventListener('load', onPageLoad);
    //     }
    //   }, []);


    return (
        <div className="Loader-container" ref={comp}>
            {/* <div className="Loader-inner-container"> */}
            jhjhjkhjkphjkhjklhjkhjklhjklhjkljhjkhkjlhjkhjkl
                <div class="loader"></div>
                {/* <img className="Loader-house-icon" src={require("../data/icons/house_icon.png")} alt="House icon"></img>
                <img className="Loader-house-window-icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                <img className="Loader-house-window-icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                <img className="Loader-house-window-icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img> */}
            {/* </div> */}
           
            {/* <div className="Main-carousel-container">
           
            </div>
            <div>
                <p className="Advantages-list-title">{data.advantages.mainTitle}</p>
                <ul className="Advantages-list">
                {data.advantages.mainInfo.map((item) => 
                        <li key={item} className="Advantages-list-item">
                            {item}
                        </li> 
                        )}
                </ul>
            </div> */}
        </div>
    )
}

export default Loader;