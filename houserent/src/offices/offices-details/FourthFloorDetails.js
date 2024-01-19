import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FourthFloorDetails = ({data, details}) => {

const [animateFirstPhotoTo, setAnimateFirstPhotoTo] = useState(false);

const [animateFirstPhotoFrom, setAnimateFirstPhotoFrom] = useState(false);


const [animateSecondPhotoTo, setAnimateSecondPhotoTo] = useState(false);

const [animateSecondPhotoFrom, setAnimateSecondPhotoFrom] = useState(false);


const [animateThirdPhotoTo, setAnimateThirdPhotoTo] = useState(false);

const [animateThirdPhotoFrom, setAnimateThirdPhotoFrom] = useState(false);


const [animateFourthPhotoTo, setAnimateFourthPhotoTo] = useState(false);

const [animateFourthPhotoFrom, setAnimateFourthPhotoFrom] = useState(false);


const [animateFifthPhotoTo, setAnimateFifthPhotoTo] = useState(false);

const [animateFifthPhotoFrom, setAnimateFifthPhotoFrom] = useState(false);


const [animateSixthPhotoTo, setAnimateSixthPhotoTo] = useState(false);

const [animateSixthPhotoFrom, setAnimateSixthPhotoFrom] = useState(false);


const [animateSeventhPhotoTo, setAnimateSeventhPhotoTo] = useState(false);

const [animateSeventhPhotoFrom, setAnimateSeventhPhotoFrom] = useState(false);


const [animateEighthPhotoTo, setAnimateEighthPhotoTo] = useState(false);

const [animateEighthPhotoFrom, setAnimateEighthPhotoFrom] = useState(false);



const [animateNinethPhotoTo, setAnimateNinethPhotoTo] = useState(false);

const [animateNinethPhotoFrom, setAnimateNinethPhotoFrom] = useState(false);


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
    if (animateFourthPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Fourth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateFourthPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Fourth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateFourthPhotoTo, animateFourthPhotoFrom]);

    
  useLayoutEffect(() => {
    if (animateFifthPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Fifth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateFifthPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Fifth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateFifthPhotoTo, animateFifthPhotoFrom]);


  useLayoutEffect(() => {
    if (animateSixthPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Sixth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateSixthPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Sixth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateSixthPhotoTo, animateSixthPhotoFrom]);


  
  useLayoutEffect(() => {
    if (animateSeventhPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Seventh-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateSeventhPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Seventh-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateSeventhPhotoTo, animateSeventhPhotoFrom]);


  useLayoutEffect(() => {
    if (animateEighthPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Eighth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateEighthPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Eighth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateEighthPhotoTo, animateEighthPhotoFrom]);


  useLayoutEffect(() => {
    if (animateNinethPhotoTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Floor-Nineth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateNinethPhotoFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Floor-Nineth-Photo", 
        { 
          duration: 1,
          scale: 1.5
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateNinethPhotoTo, animateNinethPhotoFrom]);



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
            <div className="Floor-Inner-Image-Extra-Container Floor-Second-Inner-Image-Extra-Container">
                      <p className="Floor-Inner-Image Floor-Inner-Firt-Image" onMouseEnter={() => {setAnimateFourthPhotoTo(true); setAnimateFourthPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateFourthPhotoFrom(true); setAnimateFourthPhotoTo(false)}}>
                         <img
                         className="Floor-Photo-List-Item Floor-Fourth-Photo" 
                         src={require(`../../data/floors_inner_photos/${details.photos[3]}`)} alt="Floor illustration"></img> 
                      </p> 
                      <p className="Floor-Inner-Image Floor-Inner-Second-Image" onMouseEnter={() => {setAnimateFifthPhotoTo(true); setAnimateFifthPhotoFrom(false)}} 
                        onMouseLeave={() => {setAnimateFifthPhotoFrom(true); setAnimateFifthPhotoTo(false)}}>
                        <img  
                        className="Floor-Photo-List-Item Floor-Fifth-Photo" 
                        src={require(`../../data/floors_inner_photos/${details.photos[4]}`)} alt="Floor illustration"></img> 
                      </p>
                      <p className="Floor-Inner-Image Floor-Inner-Third-Image" onMouseEnter={() => {setAnimateSixthPhotoTo(true); setAnimateSixthPhotoFrom(false)}}
                          onMouseLeave={() => {setAnimateSixthPhotoFrom(true); setAnimateSixthPhotoTo(false)}}>
                         <img className="Floor-Photo-List-Item Floor-Sixth-Photo" 
                          src={require(`../../data/floors_inner_photos/${details.photos[5]}`)} alt="Floor illustration"></img> 
                      </p>   
            </div>
            <div className="Floor-Inner-Image-Extra-Container Floor-Second-Inner-Image-Extra-Container">
                      <p className="Floor-Inner-Image Floor-Inner-Firt-Image" onMouseEnter={() => {setAnimateSeventhPhotoTo(true); setAnimateSeventhPhotoFrom(false)}} 
                         onMouseLeave={() => {setAnimateSeventhPhotoFrom(true); setAnimateSeventhPhotoTo(false)}}>
                         <img
                         className="Floor-Photo-List-Item Floor-Seventh-Photo" 
                         src={require(`../../data/floors_inner_photos/${details.photos[6]}`)} alt="Floor illustration"></img> 
                      </p> 
                      <p className="Floor-Inner-Image Floor-Inner-Second-Image" onMouseEnter={() => {setAnimateEighthPhotoTo(true); setAnimateEighthPhotoFrom(false)}} 
                        onMouseLeave={() => {setAnimateEighthPhotoFrom(true); setAnimateEighthPhotoTo(false)}}>
                        <img  
                        className="Floor-Photo-List-Item Floor-Eighth-Photo" 
                        src={require(`../../data/floors_inner_photos/${details.photos[7]}`)} alt="Floor illustration"></img> 
                      </p>
                      <p className="Floor-Inner-Image Floor-Inner-Third-Image" onMouseEnter={() => {setAnimateNinethPhotoTo(true); setAnimateNinethPhotoFrom(false)}}
                          onMouseLeave={() => {setAnimateNinethPhotoFrom(true); setAnimateNinethPhotoTo(false)}}>
                         <img className="Floor-Photo-List-Item Floor-Nineth-Photo" 
                          src={require(`../../data/floors_inner_photos/${details.photos[8]}`)} alt="Floor illustration"></img> 
                      </p>   
            </div>
        </div>
    )
}

export default FourthFloorDetails;