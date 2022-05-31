import {Link, useLocation} from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';

import './Header.css';
import logo from '../../images/logo.svg';

const Header = ({loggedIn, isLoading}) => {
    const {pathname} = useLocation();

    return (
        <header className={`header ${pathname !== '/' ? '' : 'header_type_auth'}`}>
            <Link to="/" className="header__link">
                <img className="header__logo" src={logo} alt="Дипломная работа - Яндекс Практикум"></img>
            </Link>
            {
                isLoading ? '' : loggedIn ? <Navigation/> : <NavTab/>
            }
            {/*{*/}
            {/*    isLoading ? '' : loggedIn ? <Navigation handleToggleMenu={handleToggleMenu} showItems={showItems}/> :*/}
            {/*        <NavTab/>*/}
            {/*}*/}
        </header>
    );
};

export default Header;
