import { useState } from 'react';
import Nav from '../nav/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import ClearIcon from '@mui/icons-material/Clear';
// import Callback from './Callback';
import dataRu from "../data/dataRu";
import dataEn from "../data/dataEn";
import dataUkr from "../data/dataUkr";
import BurgerMenuNav from '../nav/BurgerMenuNav';
// import BurgerMenuNav from "../nav/BurgerMenuNav";

const Header = ({data, changeLanguage, navigateToTheTop}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;
    
    const [ukrButtonStyles, setUkrButtonStyles] = useState("Highlighted-button");
    const [enButtonStyles, setEnButtonStyles] = useState("");
    const [ruButtonStyles, setRuButtonStyles] = useState("");

    const [navClassName, setNavClassName] = useState("Invisible-nav");
    const [navCurrentIcon, setNavCurrentIcon] = useState(<MenuIcon/>);

    const handleBurgerMenuButton = () => {
        if (navClassName === "Invisible-nav") {
            setNavClassName("Full-page-nav");
            setNavCurrentIcon(<ClearIcon/>)
        } else {
            setNavClassName("Invisible-nav");
            setNavCurrentIcon(<MenuIcon/>)
        }
    }

    const hideBurgerMenuNav = () => {
        setNavClassName("Invisible-nav");
        setNavCurrentIcon(<MenuIcon/>)
    }

    // Header-nav-container

                                    
    return (
        <header className="App-header">
            <div className='Header-language-buttons-container'>
                <button className={`Header-language-button ${ukrButtonStyles}`} onClick={() => {changeLanguage(dataUkr); setEnButtonStyles(''); setRuButtonStyles(''); setUkrButtonStyles('Highlighted-button')}}>UA</button>
                <button className={`Header-language-button ${enButtonStyles}`} onClick={() => {changeLanguage(dataEn); setEnButtonStyles('Highlighted-button'); setRuButtonStyles(''); setUkrButtonStyles('')}}>EN</button>
                <button className={`Header-language-button ${ruButtonStyles}`} onClick={() => {changeLanguage(dataRu); setEnButtonStyles(''); setRuButtonStyles('Highlighted-button'); setUkrButtonStyles('')}}>RU</button>
            </div>
            <div className='Header-right-content-container'>
            <div className='Header-links-container'>
                <a className="Header-link" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                    <PhoneIcon className="Header-link-Icon"/>
                    <span className="Header-link-text">{data.header.phoneNumber}</span>
                </a>
                <a className="Header-link" href={fullEmail} target="_blank" rel="noopener noreferrer">
                    <EmailIcon className="Header-link-Icon"/>
                    <span className="Header-link-text">{data.header.email}</span>
                </a>
                <a className="Header-link" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                    <PhoneCallbackIcon className="Header-link-Icon"/>
                    <span className="Header-link-text">{data.header.callback.text}</span>
                </a>
            </div>
            <button className='Nav-Button' onClick={() => {handleBurgerMenuButton()}}>
                {navCurrentIcon}
            </button>
            <Nav className="Header-nav" data={data} navigateToTheTop={navigateToTheTop}/>
            </div>
            <BurgerMenuNav data={data} navClassName={navClassName} hideBurgerMenuNav={hideBurgerMenuNav} navigateToTheTop={navigateToTheTop}/>
        </header>
    )
}

export default Header;