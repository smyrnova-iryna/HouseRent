import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';

const Footer = ({data, handleToggle, navigateToTheTop, linkScroll}) => {
    
    const fullPhoneNumber = "tel:" + data.contacts.phoneNumber;
    const secondFullPhoneNumber = "tel:" + data.contacts.secondPhoneNumber;
    const fullEmail = "mailto:" + data.contacts.email;

    return (
        <footer className='Footer-Container'>
            <div className='Footer-Contacts-Container'>
                    <a className="Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Item" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><PhoneIcon className="Contacts-link-Icon"/>{data.contacts.phoneNumber}</span>
                    </a>
                    <a className="Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Item" href={secondFullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><PhoneIcon className="Contacts-link-Icon"/>{data.contacts.secondPhoneNumber}</span>
                    </a>
                    <a className="Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Item" href={fullEmail} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><EmailIcon className="Contacts-link-Icon"/>{data.contacts.email}</span>
                    </a>
                    <p className="Contacts-item Footer-Contact-Item" >
                        <span className="Contacts-link-text"><RoomIcon className="Contacts-link-Icon"/>{data.contacts.address}</span>
                    </p>
                    <p className="Contacts-item Footer-Contact-Item" >
                        <span className="Contacts-link-text"><CodeIcon className="Contacts-link-Icon"/>{data.footer.siteDeveloper[0]}<a className='Site-Developer-Link' href={data.footer.portfolioLink} target="_blank" rel="noopener noreferrer">{data.footer.siteDeveloper[1]}</a></span>
                    </p>
                    {/* <a className="Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Item" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><CodeIcon className="Contacts-link-Icon"/>{data.footer.siteDeveloper}</span>
                    </a> */}
            </div>   
            <div className='Footer-Menu-Container'>
                    <Link className='Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Nav-Link' to={data.menuPaths.main} 
                    onClick={() => {window.scrollTo({top: 0})}}>{data.menuItems.main}</Link>
                    <HashLink smooth to={data.menuPaths.advantages} className='Contacts-item Contacts-link Footer-Contact-Link 
                    Footer-Contact-Nav-Link'>{data.menuItems.advantages}</HashLink>
                    <HashLink className='Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Nav-Link' to={data.menuPaths.offices}
                     onClick={navigateToTheTop}>{data.menuItems.offices}</HashLink>
                    <Link className='Contacts-item Contacts-link Footer-Contact-Link Footer-Contact-Nav-Link' to={data.menuPaths.promotions}
                     onClick={navigateToTheTop}>{data.menuItems.promotions}</Link>
                    <HashLink smooth to={data.menuPaths.contacts} className='Contacts-item Contacts-link Footer-Contact-Link 
                    Footer-Contact-Nav-Link'>{data.menuItems.contacts}</HashLink>
            </div>  
            <div className='Footer-Buttons-Container'>
                <HashLink className='Footer-Link-Button First-Link-Button' to={data.menuPaths.secondFloor} onClick={navigateToTheTop}>{data.menuItems.secondFloor}
                <ArrowForwardIcon className="Footer-link-Icon"/></HashLink>
                <HashLink className='Footer-Link-Button Second-Link-Button' to={data.menuPaths.thirdFloor}onClick={navigateToTheTop}>{data.menuItems.thirdFloor}
                <ArrowForwardIcon className="Footer-link-Icon"/></HashLink>
                <HashLink className='Footer-Link-Button Third-Link-Button' to={data.menuPaths.fourthFloor} onClick={navigateToTheTop}>{data.menuItems.fourthFloor}
                <ArrowForwardIcon className="Footer-link-Icon"/></HashLink>
            </div> 
        </footer>
    )
}

export default Footer;