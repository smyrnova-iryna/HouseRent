import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tooltip from '@mui/material/Tooltip';

gsap.registerPlugin(ScrollTrigger);

const ThirdFloor = ({data, navigateToTheTop}) => {

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

    const [currentFourthPartClassname, setCurrentFourthPartClassname] = useState("");

    const startFourthPartHoverReaction = () => {
        setCurrentFourthPartClassname("Fourth-Part-Hover");
    }

    const finishFourthPartHoverReaction = () => {
        setCurrentFourthPartClassname("");
    }

    return (
        <div id="third_floor" className="Floor-container" ref={comp}>
            <div className="Floor-title-container"> 
                <h2 className="Floor-title">{data.offices.thirdFloor.title}</h2>
                <div className="Floor-title-icon-container">
                    <img className="House-icon" src={require("../data/icons/house_icon.png")} alt="House icon"></img>
                    <img className="House-window-icon Third-Floor-Window-Icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                </div>
            </div>
            <div className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <div className='Floor-Plan-Extra-Container'>
                    <img className="Floor-Plan-Image Main-Image" src={require("../data/floors_plans/third_floor_outer.png")} alt="Fourth floor plan"></img>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_37_39} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_37_39.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image First-Part" src={require("../data/floors_plans/third_floor_63.7.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_40} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_40.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Second-Part" src={require("../data/floors_plans/third_floor_18.3.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_41_42} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_41_42.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Third-Part" src={require("../data/floors_plans/third_floor_40.9.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_43_50} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_43_50.tooltipStatusTitle} placement="top">
                            <img className={`Floor-Plan-Image Fourth-Part Main-Fourth-Part ${currentFourthPartClassname}`} 
                            onMouseEnter={() => {startFourthPartHoverReaction()}} onMouseLeave={() => {finishFourthPartHoverReaction()}}
                            src={require("../data/floors_plans/third_floor_136.7_1.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_43_50} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_43_50.tooltipStatusTitle} placement="top">
                            <img className={`Floor-Plan-Image Fourth-Part Extra-Fourth-Part ${currentFourthPartClassname}`}
                            onMouseEnter={() => {startFourthPartHoverReaction()}} onMouseLeave={() => {finishFourthPartHoverReaction()}}
                            src={require("../data/floors_plans/third_floor_136.7_2.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_32_35} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_32_35.tooltipStatusTitle} placement="bottom">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Fifth-Part" src={require("../data/floors_plans/third_floor_61.2.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.thirdFloor.area_30_31} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.thirdFloor.area_30_31.tooltipStatusTitle} placement="bottom">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Sixth-Part" src={require("../data/floors_plans/third_floor_39.5.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ThirdFloor;