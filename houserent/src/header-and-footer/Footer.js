import { Link } from 'react-router-dom';
// import CallbackButton from './CallbackButton';
// import Button from '@mui/material/Button';

const Footer = ({data, handleToggle, navigateToTheTop, linkScroll}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;



//     <Link className="Footer-Info Footer-Info-Adaptive" to={data.menuPaths.contacts}>
//     <img className='Footer-Icon' alt="Icon" src={require(`../img/footer_location_icon.png`)}></img>
//     {data.footer.address}</Link>
// <a className="Footer-Info Footer-Info-Adaptive" href={fullEmail} target="_blank" rel="noopener noreferrer">
//     <img className='Footer-Icon' alt="Icon" src={require(`../img/footer_email_icon.png`)}></img>
//     {data.header.email}</a>
// <a className="Footer-Info Footer-Info-Adaptive" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
//     <img className='Footer-Icon' alt="Icon" src={require(`../img/footer_phone_icon.png`)}></img>
//     {data.header.phoneNumber}</a>


{/* <Link className='Footer-Link' to={data.menuPaths.main} onClick={navigateToTheTop}>{data.menuItems.main}</Link> */}

{/* <Link className='Footer-Link' to={data.menuPaths.contacts} onClick={linkScroll}>- {data.menuItems.contacts}</Link> */}


{/* <div className='Footer-Info-Inner-Container'>
                            <p className="Footer-Copyright">{data.footer.copyright}</p>
                            <Link className="Footer-Info" to={data.menuPaths.privacypolicy} onClick={linkScroll}>
           +                 {data.footer.privacyPolicy}</Link>
                        </div> */}



    return (
        <footer>
            <div className='Footer-container'>
            <p>11111111111111111111111111111111111111222222222222222222222222222222233333333333333333333333333344444444444666666666</p>
            </div>
      </footer>
    )
}

export default Footer;