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
import Promotions from './promotions/Promotions';


function App() {
  const [data, setData] = useState(dataUkr);
  const changeLanguage = (currentData) => {
    setData(currentData);
  }
  const navigateToTheTop = () => {
    window.scrollTo({top: 0})
  }


  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} data={data} navigateToTheTop={navigateToTheTop}/>
      <Routes> 
        <Route path={data.menuPaths.main} element={<Main data={data}/>} />
        <Route path={data.menuPaths.offices} element={<Offices data={data}/>} />
        <Route path={data.menuPaths.promotions} element={<Promotions data={data}/>} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />
        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
      {/* <TopScroll />  */}
      {/* <Footer data={data} /> */}
    </div>
  );
}

export default App;
