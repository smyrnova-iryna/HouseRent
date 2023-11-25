import { gsap } from 'gsap';
import { useRef, useLayoutEffect, useState } from 'react';

import React from 'react';

const Advantages = ({data}) => {

    const comp = useRef();
  

    // useLayoutEffect(() => {
  
    //     let ctx = gsap.context(() => {
          
    //       let tl = gsap.timeline()
  
    //       tl.from(".Main-text", 
    //       { 
    //         duration: 4,
    //         // stagger: 0.8,
    //         opacity: 0,
    //         delay: 0.5,
    //       });
  
    
    //     }, comp); 
        
    //     return () => ctx.revert(); 
        
    //   }, []);

    const [sliderVisibility, setSliderVisibility] = useState("Loading-Slider");



    useLayoutEffect(() => {
        const onPageLoad = () => {
          console.log('page loaded');
          setSliderVisibility("")
          let tl = gsap.timeline({ repeat: -1 });
  
                      let ctx = gsap.context(() => {
                          tl.to(".Slider-image1", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image2", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image3", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image4", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image5", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image6", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image7", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image8", { duration: 3, opacity: 0, delay: 3 });
                          tl.to(".Slider-image9", { duration: 3, opacity: 0, delay: 3 });
                      }, comp);
                          
                      
                      return () => ctx.revert(); 
        };
    
        // Check if the page has already loaded
        if (document.readyState === 'complete') {
          onPageLoad();
        } else {
          window.addEventListener('load', onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener('load', onPageLoad);
        }
      }, []);



    
    //   useLayoutEffect(() => {
        
         
    //             let tl = gsap.timeline({ repeat: -1 });
  
    //             let ctx = gsap.context(() => {
    //                 tl.to(".Slider-image1", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image2", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image3", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image4", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image5", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image6", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image7", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image8", { duration: 5, opacity: 0, delay: 5 });
    //                 tl.to(".Slider-image9", { duration: 5, opacity: 0, delay: 5 });
    //             }, comp);
                    
                
    //             return () => ctx.revert(); 

            
    //   }, []);

      

  


    return (
        <div id="advantages" className="Advantages-container" ref={comp}>
            {/* <div style={{width: "100%", height: "100vh", backgroundColor: "#626c74"}}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit odit iure nisi cum dolore beatae, laudantium veritatis fugiat, saepe accusantium odio qui debitis est, facere ea exercitationem delectus soluta minima a cumque? Laborum reprehenderit, perspiciatis fugit repellendus et necessitatibus tempore inventore blanditiis libero odio odit velit doloremque nesciunt commodi nobis quod voluptatum ex ipsa? Magni, nemo! Optio repellendus ea dolorum, omnis iusto ex, excepturi eaque magni iure quae harum veniam eum, vitae quo natus atque non culpa aut libero dicta necessitatibus magnam ullam commodi. Neque, maiores reiciendis? Cumque, suscipit magnam vero eveniet vel earum nobis doloribus dignissimos culpa, natus quia reiciendis neque optio et qui accusantium provident amet fugiat dolore recusandae! Possimus, cupiditate. Veniam, enim id tenetur dicta excepturi beatae dolorum reprehenderit in veritatis consectetur sunt! Sint, illo tempora dolor laboriosam odit tenetur reiciendis velit omnis accusamus? Atque officiis tenetur dolore corrupti voluptates mollitia blanditiis rerum libero odio, vero, perspiciatis similique maiores commodi cupiditate optio, soluta beatae accusamus minima explicabo. Sit quis enim nostrum, ad perspiciatis qui? Consectetur neque quasi illum enim rem nemo pariatur labore laudantium velit nam nostrum impedit libero, quae, aperiam unde, et harum dolore! Facere enim a eos pariatur officiis magnam quam veniam sint necessitatibus voluptatum?</p>
            </div> */}
            <div className="Main-carousel-container">
            {/* <div> */}
                   {/* <div className="Main-carousel-inner-container"> */}
                        <img className={`Slider-image Slider-image9 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_1.jpg")} alt="Carousel item 1" />
                        <img className={`Slider-image Slider-image8 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_2.jpg")} alt="Carousel item 2" />
                        <img className={`Slider-image Slider-image7 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_3.jpg")} alt="Carousel item 3" />
                        <img className={`Slider-image Slider-image6 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_4.jpg")} alt="Carousel item 4" />
                        <img className={`Slider-image Slider-image5 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_5.jpg")} alt="Carousel item 5" />
                        <img className={`Slider-image Slider-image4 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_6.jpg")} alt="Carousel item 6" />
                        <img className={`Slider-image Slider-image3 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_7.jpg")} alt="Carousel item 7" />
                        <img className={`Slider-image Slider-image2 ${sliderVisibility}`} src={require("../data/carousel/carousel_photo_8.jpg")} alt="Carousel item 8" />
                        <img className='Slider-image Slider-image1' src={require("../data/carousel/carousel_photo_9.jpg")} alt="Carousel item 9" />
                    {/* </div> */}
            {/* </div> */}
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
            </div>
        </div>
    )
}

export default Advantages;