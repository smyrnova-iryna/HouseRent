import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThirdFloor = ({data}) => {

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
                <h2 className="Floor-title">{data.offices.thirdFloor.title}</h2>
            </div>
            <Link className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <div className='Floor-Plan-Extra-Container'>
                    <img className="Floor-Plan-Image Main-Image" src={require("../data/floors_plans/third_floor_outer.png")} alt="Fourth floor plan"></img>
                    <img className="Floor-Plan-Image Floor-Plan-Hover-Image First-Part" src={require("../data/floors_plans/third_floor_1.png")} alt="Fourth floor plan"></img>
                    <img className="Floor-Plan-Image Floor-Plan-Hover-Image Second-Part" src={require("../data/floors_plans/third_floor_2.png")} alt="Fourth floor plan"></img>
                    <img className="Floor-Plan-Image Floor-Plan-Hover-Image Third-Part" src={require("../data/floors_plans/third_floor_3.png")} alt="Fourth floor plan"></img>
                    <img className="Floor-Plan-Image Floor-Plan-Hover-Image Fourth-Part" src={require("../data/floors_plans/third_floor_4.png")} alt="Fourth floor plan"></img>
                    <img className="Floor-Plan-Image Floor-Plan-Hover-Image Fifth-Part" src={require("../data/floors_plans/third_floor_5.png")} alt="Fourth floor plan"></img>
                    <img className="Floor-Plan-Image Floor-Plan-Hover-Image Sixth-Part" src={require("../data/floors_plans/third_floor_6.png")} alt="Fourth floor plan"></img>
                </div>
            </Link>
        </div>
    )
}

export default ThirdFloor;