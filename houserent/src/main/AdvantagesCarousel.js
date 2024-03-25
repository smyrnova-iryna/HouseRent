import { gsap } from 'gsap';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';

const AdvantagesCarousel = ({data}) => { 
    
    
    const [sliderVisibility, setSliderVisibility] = useState("Loading-Slider");

    const comp = useRef();

    useLayoutEffect(() => {
      
        const onPageLoad = () => {
          // console.log('page loaded');
          setSliderVisibility("")
          let tl = gsap.timeline({ repeat: -1 });
  
                      let ctx = gsap.context(() => {
                          tl.to(".Slider-image1", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image2", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image3", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image4", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image5", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image6", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image7", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image8", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image9", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image10", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image11", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image12", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image13", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image14", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image15", { duration: 1, opacity: 0, delay: 1 });
                          tl.to(".Slider-image16", { duration: 1, opacity: 0, delay: 1 });
                      }, comp);
                          
                      
                      return () => ctx.revert(); 
        };
    
        // Check if the page has already loaded
        onPageLoad();
        // if (document.readyState === 'complete') {
        //   onPageLoad();
        // } else {
        //   window.addEventListener('load', onPageLoad, false);
          // Remove the event listener when component unmounts
        //   return () => window.removeEventListener('load', onPageLoad);
        // }
      }, []);
    return (
        <div className="Main-carousel-container" ref={comp}>
                        <img className={`Slider-image Slider-image16 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_16.JPG")} alt="Carousel item 16" />
                        <img className={`Slider-image Slider-image15 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_15.JPG")} alt="Carousel item 15" />
                        <img className={`Slider-image Slider-image14 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_14.JPG")} alt="Carousel item 14" />
                        <img className={`Slider-image Slider-image13 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_13.JPG")} alt="Carousel item 13" />
                        <img className={`Slider-image Slider-image12 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_12.JPG")} alt="Carousel item 12" />
                        <img className={`Slider-image Slider-image11 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_11.JPG")} alt="Carousel item 11" />
                        <img className={`Slider-image Slider-image10 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_10.JPG")} alt="Carousel item 10" />
                        <img className={`Slider-image Slider-image9 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_9.JPG")} alt="Carousel item 9" />
                        <img className={`Slider-image Slider-image8 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_8.JPG")} alt="Carousel item 8" />
                        <img className={`Slider-image Slider-image7 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_7.JPG")} alt="Carousel item 7" />
                        <img className={`Slider-image Slider-image6 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_6.JPG")} alt="Carousel item 6" />
                        <img className={`Slider-image Slider-image5 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_5.jpg")} alt="Carousel item 5" />
                        <img className={`Slider-image Slider-image4 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_4.JPG")} alt="Carousel item 4" />
                        <img className={`Slider-image Slider-image3 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_3.jpg")} alt="Carousel item 3" />
                        <img className={`Slider-image Slider-image2 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_2.JPG")} alt="Carousel item 2" />
                        <img className='Slider-image Slider-image1' src={require("../data/carousel/carousel_photo_1.jpg")} alt="Carousel item 1" />
                    
        </div>
    )
}

export default AdvantagesCarousel;
