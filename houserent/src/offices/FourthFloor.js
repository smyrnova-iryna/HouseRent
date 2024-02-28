import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FourthFloor = ({data}) => {



    // window.history.scrollRestoration = 'manual'

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

    const [currentPartClassname, setCurrentPartClassname] = useState("");

    const startPartHoverReaction = () => {
        setCurrentPartClassname("Fourth-Part-Hover");
    }

    const finishPartHoverReaction = () => {
        setCurrentPartClassname("");
    }

    return (
        <div id="fourth_floor" className="Floor-container" ref={comp}>
            <div className="Floor-title-container">
                <div className="Floor-title-icon-container">
                    <img className="House-icon" src={require("../data/icons/house_icon.png")} alt="House icon"></img>
                    <img className="House-window-icon Fourth-Floor-Window-Icon" src={require("../data/icons/house_window_icon.png")} alt="House window icon"></img>
                </div>
                <h2 className="Floor-title">{data.offices.fourthFloor.title}</h2>
            </div>

            
            <div className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <div className='Floor-Plan-Extra-Container'>
                    <img className="Floor-Plan-Image Main-Image" src={require("../data/floors_plans/fourth_floor_outer.png")} alt="Fourth floor plan"></img>
                    <Link to={data.menuPaths.floorPages.fourthFloor} onClick={() => { window.scrollTo(0, 0)}}>
                        <img className={`Floor-Plan-Image Fourth-Part First-Third-Part ${currentPartClassname}`} 
                        onMouseEnter={() => {startPartHoverReaction()}} onMouseLeave={() => {finishPartHoverReaction()}}
                        src={require("../data/floors_plans/fourth_floor_outer_1.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.fourthFloor} onClick={() => {window.scrollTo(0, 0)}}>
                        <img className={`Floor-Plan-Image Fourth-Part Second-Third-Part ${currentPartClassname}`}
                        onMouseEnter={() => {startPartHoverReaction()}} onMouseLeave={() => {finishPartHoverReaction()}}
                        src={require("../data/floors_plans/fourth_floor_outer_2.png")} alt="Fourth floor plan"></img>
                    </Link>
                    <Link to={data.menuPaths.floorPages.fourthFloor} onClick={() => {window.scrollTo(0, 0)}}>
                        <img className={`Floor-Plan-Image Fourth-Part Third-Third-Part ${currentPartClassname}`}
                        onMouseEnter={() => {startPartHoverReaction()}} onMouseLeave={() => {finishPartHoverReaction()}}
                        src={require("../data/floors_plans/fourth_floor_outer_3.png")} alt="Fourth floor plan"></img>
                    </Link>
                </div>
            </div>
            {/* <Link className='Floor-Plan-Link' to={data.menuPaths.floorPages.fourthFloor}>
                <img className="Floor-Plan-Image Main-Image Full-Image Floor-Plan-Hover-Image" src={require("../data/floors_plans/fourth_floor_outer.png")} alt="Fourth floor plan"></img>
            </Link> */}
        </div>
    )
}

export default FourthFloor;