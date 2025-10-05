import { Link } from "react-router-dom";
import { useRef, useLayoutEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tooltip from '@mui/material/Tooltip';

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
        <div id="second_floor" className="Floor-container" ref={comp}>
            <div className="Floor-title-container">
                <h2 className="Floor-title">{data.offices.secondFloor.title}</h2>
                <div className="Floor-title-icon-container">
                    <img className="House-icon" src={require("../data/icons/house_icon.png")} alt="House icon"></img>
                    <img className="House-window-icon Second-Floor-Window-Icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                </div>
            </div>
            <div className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <div className='Floor-Plan-Extra-Container Floor-Plan-Extra-Container-Larger'>
                    <img className="Floor-Plan-Image Main-Image" src={require("../data/floors_plans/second_floor_outer.png")} alt="Fourth floor plan"></img>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_11_12_14} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_11_12_14.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_61_2" src={require("../data/floors_plans/second_floor_61.2.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_15} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_15.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_22_0" src={require("../data/floors_plans/second_floor_22.0.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_16} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_16.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_21_2" src={require("../data/floors_plans/second_floor_21.2.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_17} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_17.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_19_6" src={require("../data/floors_plans/second_floor_19.6.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_18} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_18.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_21_0" src={require("../data/floors_plans/second_floor_21.0.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_19_20} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_19_20.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_41_0" src={require("../data/floors_plans/second_floor_41.0.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_21} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_21.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_22_9" src={require("../data/floors_plans/second_floor_22.9.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_22_23} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_22_23.tooltipStatusTitle} placement="top">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_40_0" src={require("../data/floors_plans/second_floor_40.0.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <img className="Floor-Plan-Image Part_Extra" src={require("../data/floors_plans/second_floor_extra_part.png")} alt="Fourth floor plan"></img>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_7_8} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_22_23.tooltipStatusTitle} placement="bottom">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_39_5" src={require("../data/floors_plans/second_floor_39.5.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_9} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_22_23.tooltipStatusTitle} placement="bottom">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_21_1" src={require("../data/floors_plans/second_floor_21.1.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                    <Link to={data.menuPaths.floorPages.secondFloor.area_10} onClick={() => {window.scrollTo({top: 0})}}>
                        <Tooltip title={data.offices.secondFloor.area_10.tooltipStatusTitle} placement="bottom">
                            <img className="Floor-Plan-Image Floor-Plan-Hover-Image Part_22_0_2" src={require("../data/floors_plans/second_floor_22.0_2.png")} alt="Fourth floor plan"></img>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SecondFloor;
// title="Add"