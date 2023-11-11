import { Link } from 'react-router-dom';


const BurgerMenuNav = ({data, navClassName, hideBurgerMenuNav, navigateToTheTop}) => {

    return (
        <nav className={navClassName}>
            <Link className='Nav-inner-link' to={data.menuPaths.main} onClick={() => {hideBurgerMenuNav(); navigateToTheTop()}}>{data.menuItems.main}</Link>
            <Link className='Nav-inner-link' to={data.menuPaths.offices} onClick={() => {hideBurgerMenuNav(); navigateToTheTop()}}>{data.menuItems.offices}</Link>
            <Link className='Nav-inner-link' to={data.menuPaths.promotions} onClick={() => {hideBurgerMenuNav(); navigateToTheTop()}}>{data.menuItems.promotions}</Link>
        </nav>
    );
    }

export default BurgerMenuNav;