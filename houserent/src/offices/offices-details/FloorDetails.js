import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloorDetails = ({data, details}) => {

const [animateFirstPhotoTo, setAnimateFirstPhotoTo] = useState(false);

const [animateFirstPhotoFrom, setAnimateFirstPhotoFrom] = useState(false);


const [animateSecondPhotoTo, setAnimateSecondPhotoTo] = useState(false);

const [animateSecondPhotoFrom, setAnimateSecondPhotoFrom] = useState(false);


const [animateThirdPhotoTo, setAnimateThirdPhotoTo] = useState(false);

const [animateThirdPhotoFrom, setAnimateThirdPhotoFrom] = useState(false);


const comp = useRef();

useLayoutEffect(() => {
    if (animateFirstPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-First-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateFirstPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-First-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateFirstPhotoTo, animateFirstPhotoFrom]);


  useLayoutEffect(() => {
    if (animateSecondPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Second-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateSecondPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Second-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateSecondPhotoTo, animateSecondPhotoFrom]);


  
  useLayoutEffect(() => {
    if (animateThirdPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Third-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateThirdPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Third-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateThirdPhotoTo, animateThirdPhotoFrom]);

  useLayoutEffect(() => {
  

    let ctx = gsap.context(() => {
      
      let tl = gsap.timeline()

      tl.from(".Floor-Details-Status-Item", 
      { 
        duration: 1,
        y: -50,
        ease: "bounce.out",
        stagger: 0.5,
        repeat: -1
      }); 


    }, comp); 
    
    return () => ctx.revert(); 
    
  }, []);





//9
  

    return (
        <div className="Floor-Details-Main-Container" ref={comp}>
            <div className="Floor-Details-Title-Container">
                <p className="Floor-Details-Title">{details.title}</p>
                <ul className="Floor-Details-Status">
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[0]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[1]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[2]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[3]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[4]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[5]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[6]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[7]}
                      </li> 
                      <li className="Floor-Details-Status-Item">
                          {details.statusTitle[8]}
                      </li> 
                </ul>
            </div>
            <div className="Floor-Details-Content-Container">
                <img src={require(`../../data/floors_inner_plans/${details.plan}`)} alt="Floor plan"></img>
                <ul>
                    {details.advantages.map((item) => 
                      <li className="Floor-Advantages-List-Item" key={item}>
                          {item}
                      </li> 
                      )}
                </ul>
            </div>
            <div className="Floor-Inner-Image-Extra-Container">
                      {/* <p className="Floor-Inner-Image Floor-Inner-Firt-Image" onMouseEnter={() => {setAnimateFirstPhotoTo(true); setAnimateFirstPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateFirstPhotoFrom(true); setAnimateFirstPhotoTo(false)}}>
                         <img  
                         className="Floor-Photo-List-Item Floor-First-Photo" 
                         src={require(`../../data/floors_inner_photoes/sixth_area_photo1.jpg`)} alt="Floor illustration"></img> 
                      </p> 
                      <p className="Floor-Inner-Image Floor-Inner-Second-Image" onMouseEnter={() => {setAnimateSecondPhotoTo(true); setAnimateSecondPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateSecondPhotoFrom(true); setAnimateSecondPhotoTo(false)}}>
                         <img  
                         className="Floor-Photo-List-Item Floor-Second-Photo" 
                         src={require(`../../data/floors_inner_photoes/sixth_area_photo1.jpg`)} alt="Floor illustration"></img> 
                      </p>  */}
                      {/* <p className="Floor-Inner-Image Floor-Inner-Third-Image" onMouseEnter={() => {setAnimateThirdPhotoTo(true); setAnimateThirdPhotoFrom(false)}}
                          onMouseLeave={() => {setAnimateThirdPhotoFrom(true); setAnimateThirdPhotoTo(false)}}>
                         <img className="Floor-Photo-List-Item Floor-Third-Photo" 
                          src={require(`../../data/floors_inner_photoes/sixth_area_photo1.png"`)} alt="Floor illustration"></img> 
                      </p> */}









                      <p className="Floor-Inner-Image Floor-Inner-Firt-Image" onMouseEnter={() => {setAnimateFirstPhotoTo(true); setAnimateFirstPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateFirstPhotoFrom(true); setAnimateFirstPhotoTo(false)}}>
                         <img
                         className="Floor-Photo-List-Item Floor-First-Photo" 
                         src={require(`../../data/floors_inner_photos/${details.photos[0]}`)} alt="Floor illustration"></img> 
                      </p> 
                      <p className="Floor-Inner-Image Floor-Inner-Second-Image" onMouseEnter={() => {setAnimateSecondPhotoTo(true); setAnimateSecondPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateSecondPhotoFrom(true); setAnimateSecondPhotoTo(false)}}>
                         <img  
                         className="Floor-Photo-List-Item Floor-Second-Photo" 
                         src={require(`../../data/floors_inner_photos/${details.photos[1]}`)} alt="Floor illustration"></img> 
                      </p> 
                      <p className="Floor-Inner-Image Floor-Inner-Third-Image" onMouseEnter={() => {setAnimateThirdPhotoTo(true); setAnimateThirdPhotoFrom(false)}}
                          onMouseLeave={() => {setAnimateThirdPhotoFrom(true); setAnimateThirdPhotoTo(false)}}>
                         <img className="Floor-Photo-List-Item Floor-Third-Photo" 
                          src={require(`../../data/floors_inner_photos/${details.photos[2]}`)} alt="Floor illustration"></img> 
                      </p>
            </div>
            
            {/* <div className="Floor-Extra-Advantages-Container">
            <ul>
                    {details.commonAdvantages.map((item) => 
                      <li className="Floor-Advantages-List-Item" key={item}>
                          {item}
                      </li> 
                      )}
                </ul>
            </div> */}
        </div>
    )
}

export default FloorDetails;