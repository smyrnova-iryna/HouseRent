import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecondFloor = ({data, navigateToTheTop}) => {

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

    // const [currentFourthPartClassname, setCurrentFourthPartClassname] = useState("");

    // const startFourthPartHoverReaction = () => {
    //     setCurrentFourthPartClassname("Fourth-Part-Hover");
    // }

    // const finishFourthPartHoverReaction = () => {
    //     setCurrentFourthPartClassname("");
    // }

    return (
        <div id="third_floor" className="Floor-container" ref={comp}>
            <div className="Floor-title-container">
                <div className="Floor-title-icon-container">
                    <img className="House-icon" src={require("../data/icons/house_icon.png")} alt="House icon"></img>
                    <img className="House-window-icon Second-Floor-Window-Icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                </div>
                <h2 className="Floor-title">{data.offices.secondFloor.title}</h2>
            </div>
            <div className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <div className='Floor-Plan-Extra-Container'>
                    <img className="Floor-Plan-Image Main-Image" src={require("../data/floors_plans/second_floor_outer.png")} alt="Fourth floor plan"></img>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_37_39} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_61_2" src={require("../data/floors_plans/second_floor_61.2.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_40} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_22_0" src={require("../data/floors_plans/second_floor_22.0.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_41_42} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_21_2" src={require("../data/floors_plans/second_floor_21.2.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_32_35} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_19_6" src={require("../data/floors_plans/second_floor_19.6.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_21_0" src={require("../data/floors_plans/second_floor_21.0.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_41_0" src={require("../data/floors_plans/second_floor_41.0.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_22_9" src={require("../data/floors_plans/second_floor_22.9.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_40_0" src={require("../data/floors_plans/second_floor_40.0.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <img className="Floor-Plan-Image Part_Extra" src={require("../data/floors_plans/second_floor_extra_part.png")} alt="Fourth floor plan"></img>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_39_5" src={require("../data/floors_plans/second_floor_39.5.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_21_1" src={require("../data/floors_plans/second_floor_21.1.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_22_0_2" src={require("../data/floors_plans/second_floor_22.0_2.png")} alt="Fourth floor plan"></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SecondFloor;