import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FourthFloorDetails = ({data, details, plan, photos}) => {

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
          scale: 1.1
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateFirstPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-First-Photo", 
        { 
          duration: 1,
          scale: 1.1
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
          scale: 1.1
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateSecondPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Second-Photo", 
        { 
          duration: 1,
          scale: 1.1
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
          scale: 1.1
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateThirdPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Third-Photo", 
        { 
          duration: 1,
          scale: 1.1
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateThirdPhotoTo, animateThirdPhotoFrom]);

  

    return (
        <div className="Floor-Details-Main-Container" ref={comp}>
            <div className="Floor-Details-Title-Container">
                <p className="Floor-Details-Title">{details.title}</p>
                <p className="Floor-Details-Status">{details.statusTitle}: available</p>
            </div>
            <div className="Floor-Details-Content-Container">
                <img src={require(`../../data/floors_inner_plans/${plan}`)} alt="Floor plan"></img>
                <ul>
                    {details.advantages.map((item) => 
                      <li className="Floor-Advantages-List-Item" key={item}>
                          {item}
                      </li> 
                      )}
                </ul>
            </div>
            <ul className="Floor-Photo-List">
                {/* {photos.map((item) => 
                      <li key={item} className="Floor-Photo-List-Item-Container">
                         <img onMouseEnter={() => {setAnimateWebsiteLinkTo(true); setAnimateWebsiteLinkFrom(false)}} onMouseLeave={() => {setAnimateWebsiteLinkFrom(true); setAnimateWebsiteLinkTo(false)}} className="Floor-Photo-List-Item" src={require(`../../data/floors_inner_photoes/${item}`)} alt="Floor illustration"></img> 
                      </li> 
                      )} */}
                      <li key={photos[0]} className="Floor-Photo-List-Item-Container">
                         <img onMouseEnter={() => {setAnimateFirstPhotoTo(true); setAnimateFirstPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateFirstPhotoFrom(true); setAnimateFirstPhotoTo(false)}} 
                         className="Floor-Photo-List-Item Floor-First-Photo" 
                         src={require(`../../data/floors_inner_photoes/${photos[0]}`)} alt="Floor illustration"></img> 
                      </li> 
                      <li key={photos[1]} className="Floor-Photo-List-Item-Container">
                         <img onMouseEnter={() => {setAnimateSecondPhotoTo(true); setAnimateSecondPhotoFrom(false)}}
                          onMouseLeave={() => {setAnimateSecondPhotoFrom(true); setAnimateSecondPhotoTo(false)}} 
                          className="Floor-Photo-List-Item Floor-Second-Photo" 
                          src={require(`../../data/floors_inner_photoes/${photos[1]}`)} alt="Floor illustration"></img> 
                      </li> 
                      <li key={photos[2]} className="Floor-Photo-List-Item-Container">
                         <img onMouseEnter={() => {setAnimateThirdPhotoTo(true); setAnimateThirdPhotoFrom(false)}}
                          onMouseLeave={() => {setAnimateThirdPhotoFrom(true); setAnimateThirdPhotoTo(false)}}
                          className="Floor-Photo-List-Item Floor-Third-Photo" 
                          src={require(`../../data/floors_inner_photoes/${photos[2]}`)} alt="Floor illustration"></img> 
                      </li> 
            </ul>
        </div>
    )
}

export default FourthFloorDetails;