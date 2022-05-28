import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavAuth from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';

import './Header.css';

const Header = ({loggedIn}) => {
    return (
        <header className={`header ${!loggedIn ? 'header_type_auth' : ''}`}>
            <Link to="/" className="header__link">
                <img className="header__logo" src={logo} alt="Логотип дипломной работы"></img>
            </Link>

            {!loggedIn && <NavAuth/>}
            {loggedIn && <Navigation/>}

        </header>
    );
};

export default Header;
