import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FourthFloor = ({data}) => {

    const comp = useRef();

    useLayoutEffect(() => {
    

        let ctx = gsap.context(() => {

        gsap.from(".House-window-icon", {
            opacity: 0,
            duration: 2,
            delay: 1,
            scrollTrigger: {
              trigger: ".Floor-Plan-Link"
            }
          }); 

        }, comp); 
        
        return () => ctx.revert(); 
        
    }, []);


    return (
        <div className="Floor-container" ref={comp}>
            <div className="Floor-title-container">
                <div className="Floor-title-icon-container">
                    <img className="House-icon" src={require("../data/icons/house_icon.png")} alt="House icon"></img>
                    <img className="House-window-icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                </div>
                <h2 className="Floor-title">{data.offices.fourthFloor.title}</h2>
            </div>
            <Link className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <img className="Floor-Plan-Image" src={require("../data/floors_plans/fourth_floor_outer.png")} alt="Fourth floor plan"></img>
            </Link>
        </div>
    )
}

export default FourthFloor;