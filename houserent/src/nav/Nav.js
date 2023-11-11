import { Link } from 'react-router-dom';
// import ExpandMore from '@mui/icons-material/ExpandMore';

const Nav = ({data, navigateToTheTop}) => {
   
    return (
        <nav className="Header-nav-container">
            <Link className='Nav-link' to={data.menuPaths.main} onClick={navigateToTheTop}>{data.menuItems.main}</Link>
            <Link className='Nav-link' to={data.menuPaths.offices} onClick={navigateToTheTop}>{data.menuItems.offices}</Link>
            <Link className='Nav-link' to={data.menuPaths.promotions} onClick={navigateToTheTop}>{data.menuItems.promotions}</Link>
            {/* <Link className='Nav-menu-item' to={data.menuPaths.main} onClick={navigateToTheTop}>{data.menuItems.main}</Link>
            <Link className='Nav-menu-item' to={data.menuPaths.offices} onClick={navigateToTheTop}>{data.menuItems.offices}</Link>
            <Link className='Nav-menu-item' to={data.menuPaths.promotions} onClick={navigateToTheTop}>{data.menuItems.promotions}
            </Link> */}
        </nav>
    )
}

export default Nav;