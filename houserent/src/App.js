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


function App() {
  const [data, setData] = useState(dataUkr);
  const changeLanguage = (currentData) => {
    setData(currentData);
  }
  const navigateToTheTop = () => {
    window.scrollTo({top: 0})
  }

  // && window.pageYOffset > window.innerHeight

  const [headerStyles, setHeaderStyles] = useState("");
  

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
  })


  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} data={data} navigateToTheTop={navigateToTheTop} headerStyles={headerStyles} />
      {/* <Main /> */}
      <Routes> 
        <Route path={data.menuPaths.main} element={<Main data={data}/>} />
        <Route path={data.menuPaths.offices} element={<Offices data={data}/>} navigateToTheTop={navigateToTheTop} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />       
        <Route path={data.menuPaths.floorPages.thirdFloor.area_30_31} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_30_31} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_32_35} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_32_35} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_40} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_40} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_43_50} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_43_50} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_37_39} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_37_39} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.area_41_42} element={<FloorDatailsExtended data={data} 
        details={data.offices.thirdFloor.area_41_42} />} />

        <Route path={data.menuPaths.floorPages.fourthFloor} element={<FourthFloorDetails data={data} 
        details={data.offices.fourthFloor.details} />} />
        

        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
      {/* <TopScroll />  */}
      <Footer data={data} />
    </div>
  );
}

export default App;
