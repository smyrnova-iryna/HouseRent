import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = ({data, navigateToTheTop}) => {
   
    return (
        <nav className="Header-nav-container">
            <Link className='Nav-link' to={data.menuPaths.main} onClick={navigateToTheTop}>{data.menuItems.main}</Link>
            <HashLink smooth to={data.menuPaths.advantages} className='Nav-link'>{data.menuItems.advantages}</HashLink>
            <HashLink className='Nav-link' to={data.menuPaths.offices} onClick={navigateToTheTop}>{data.menuItems.offices}</HashLink>
            <Link className='Nav-link' to={data.menuPaths.promotions} onClick={navigateToTheTop}>{data.menuItems.promotions}</Link>
            <HashLink smooth to={data.menuPaths.contacts} className='Nav-link'>{data.menuItems.contacts}</HashLink>
        </nav>
    )
}

export default Nav;