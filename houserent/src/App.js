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
// import Footer from './header-and-footer/Footer';
import PrivacyPolicy from './header-and-footer/Privacypolicy';
import Offices from './offices/Offices';
import FourthFloorDetails from "./offices/offices-details/FourthFloorDetails";
// import ThirdFloorDetails from "./offices/offices-details/ThirdFloorFirstPartDetails";
import Promotions from './promotions/Promotions';
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
      <Header changeLanguage={changeLanguage} data={data} navigateToTheTop={navigateToTheTop} headerStyles={headerStyles}/>
      {/* <Main /> */}
      <Routes> 
        <Route path={data.menuPaths.main} element={<Main data={data}/>} />
        <Route path={data.menuPaths.offices} element={<Offices data={data}/>} navigateToTheTop={navigateToTheTop} />
        <Route path={data.menuPaths.promotions} element={<Promotions data={data}/>} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />
        <Route path={data.menuPaths.floorPages.fourthFloor} element={<FourthFloorDetails data={data} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.firstPart} element={<FourthFloorDetails data={data} 
        details={data.offices.thirdFloor.firstArea} plan="firt_area_plan.png" 
        photos={["first_area_photo1.JPG", "first_area_photo2.JPG", "first_area_photo3.JPG"]} />} />


        {/* <Route path={data.menuPaths.floorPages.thirdFloor.secondPart} element={<ThirdFloorSecondPartDetails data={data} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.thirdPart} element={<ThirdFloorThirdPartDetails data={data} />} />

        <Route path={data.menuPaths.floorPages.thirdFloor.fourthPart} element={<ThirdFloorFourthPartDetails data={data} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.fifthPart} element={<ThirdFloorFifthPartDetails data={data} />} />
        <Route path={data.menuPaths.floorPages.thirdFloor.sixthPart} element={<ThirdFloorSixthPartDetails data={data} />} /> */}

        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
      {/* <TopScroll />  */}
      {/* <Footer data={data} /> */}
    </div>
  );
}

export default App;
