import "./App.css";
import { useState } from 'react';
// , useEffect, useLayoutEffect
import { Routes, Route } from 'react-router-dom';
import dataUkr from "./data/dataUkr";
// import dataRu from "./data/dataRu";
// import dataEn from "./data/dataEn";
import Main from './main/Main';
import Error from './error/Error';
import Header from './header-and-footer/Header';
import Footer from './header-and-footer/Footer';
import PrivacyPolicy from './header-and-footer/Privacypolicy';
import Offices from './offices/Offices';
// import FloorDetails from "./offices/offices-details/FloorDetails";
import FloorDatailsExtended from "./offices/offices-details/FloorDatailsExtended";
import FourthFloorDetails from "./offices/offices-details/FourthFloorDetails";
// import ThirdFloorDetails from "./offices/offices-details/ThirdFloorFirstPartDetails";
import { useEffect } from "react";

// const Offices = lazy(() => import('./offices/Offices.js'));
// const Offices = lazy(() => import('./offices/Offices'));

// import Loader from "./main/Loader";


function App() {
  const [data, setData] = useState(dataUkr);
  // const [loading, setLoading] = useState(true)
  const changeLanguage = (currentData) => {
    setData(currentData);
  }
  const navigateToTheTop = () => {
    window.scrollTo({top: 0})
  }
  // const componentLoaded = () => {
  //   if (componentIsLoaded === true) {
  //     setPageLoaded(true);
  //     console.log("LOADED")
  //   } else {
  //     console.log("NOT LOADED")
  //   }

   
    
    // }

  // && window.pageYOffset > window.innerHeight

  const [headerStyles, setHeaderStyles] = useState("");

  document.querySelector("html").style.scrollBehavior = "auto";

  // if (navigator.userAgent.indexOf("Firefox") === -1 || Object.values(data.menuPaths.floorPages.secondFloor).includes(window.location.href.substring(21)) === true) {
  //   document.querySelector("html").style.scrollBehavior = "smooth";
  //   console.log(window.location.href.substring(21));
  //   console.log(Object.values(data.menuPaths.floorPages.secondFloor).includes(window.location.href.substring(21)));
  // } else {
  //   document.querySelector("html").style.scrollBehavior = "auto";
  //   console.log("auto");
  //   console.log(window.location.href.substring(21));
  //   console.log(Object.values(data.menuPaths.floorPages.secondFloor).includes(window.location.href.substring(21)));
  // }

  

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;
    const handleScroll = event => {
        
        var st = window.pageYOffset || document.documentElement.scrollTop; 
        if (st < lastScrollTop && window.pageYOffset > window.innerHeight) {
          setHeaderStyles("Visible-Header");
          // console.log("Scroll up detected!")
        } else if (st > lastScrollTop) {
          setHeaderStyles("");
          // console.log("Scroll down detected!")
        }
        lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    // window.addEventListener('load', (event) => {
    //   console.log("page is fully loaded");
    // });
   
  })

  
  // componentDidMount() {
  //   setPageLoaded(true);
  // }

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3300)
// }, [])
// if (loading) {
//     return <Loader/>
// }
return (
    <div className="App">
      <Header changeLanguage={changeLanguage} data={data} navigateToTheTop={navigateToTheTop} headerStyles={headerStyles} />
      {/* <Loader data={data}/> */}
        <Routes> 
        <Route path={data.menuPaths.main} element={<Main data={data}/>} />
        <Route path={data.menuPaths.offices} element={<Offices data={data}/>} navigateToTheTop={navigateToTheTop} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />   

        <Route path={data.menuPaths.floorPages.thirdFloor.area_30_31} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_30_31} backLinkText={data.offices.thirdFloor.backLinkText} backLink={data.menuPaths.thirdFloor} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_32_35} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_32_35} backLinkText={data.offices.thirdFloor.backLinkText} backLink={data.menuPaths.thirdFloor} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_40} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_40} backLinkText={data.offices.thirdFloor.backLinkText} backLink={data.menuPaths.thirdFloor} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_43_50} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_43_50} backLinkText={data.offices.thirdFloor.backLinkText} backLink={data.menuPaths.thirdFloor} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_37_39} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_37_39} backLinkText={data.offices.thirdFloor.backLinkText} backLink={data.menuPaths.thirdFloor} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_41_42} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_41_42} backLinkText={data.offices.thirdFloor.backLinkText} backLink={data.menuPaths.thirdFloor} />} />

        <Route path={data.menuPaths.floorPages.secondFloor.area_7_8} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_7_8} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_9} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_9} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_10} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_10} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_11_12_14} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_11_12_14} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_15} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_15} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_16} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_16} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_17} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_17} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_18} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_18} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_19_20} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_19_20} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_21} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_21} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        <Route path={data.menuPaths.floorPages.secondFloor.area_22_23} element={<FloorDatailsExtended data={data} 
        details={data.offices.secondFloor.area_22_23} backLinkText={data.offices.secondFloor.backLinkText} backLink={data.menuPaths.secondFloor} />} />
        

        <Route path={data.menuPaths.floorPages.fourthFloor} element={<FourthFloorDetails data={data} 
        details={data.offices.fourthFloor.details} />} />
        

        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
        
      
    
      <Footer data={data} />
    </div>
  );
// );
}

  

export default App;
