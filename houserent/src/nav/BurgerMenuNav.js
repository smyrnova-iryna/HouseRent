import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const BurgerMenuNav = ({data, navClassName, hideBurgerMenuNav, navigateToTheTop}) => {

    return (
        <nav className={navClassName}>
            <Link className='Nav-inner-link' to={data.menuPaths.main} onClick={() => {hideBurgerMenuNav(); navigateToTheTop()}}>{data.menuItems.main}</Link>
            <HashLink smooth to={data.menuPaths.advantages} className='Nav-inner-link' onClick={() => {hideBurgerMenuNav()}}>{data.menuItems.advantages}</HashLink>
            <HashLink smooth to={data.menuPaths.offices} className='Nav-inner-link' onClick={() => {hideBurgerMenuNav()}}>{data.menuItems.offices}</HashLink>
            <HashLink smooth to={data.menuPaths.contacts} className='Nav-inner-link' onClick={() => {hideBurgerMenuNav()}}>{data.menuItems.contacts}</HashLink>
        </nav>
    );
    }

export default BurgerMenuNav;