import {useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import './Navigation.css';

const Navigation = ({ handleToggleMenu, showItems }) => {
    // const [showItems, setShowItems] = useState(false);
    const {pathname} = useLocation();

    // const handleToggleMenu = () => setShowItems(!showItems);

    return (
        <nav className="navigation">
            <button className="navigation__btn-menu" type="button" onClick={() => handleToggleMenu(true)}></button>
            <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`}>
                <div className="navigation__sidebar">
                    <div className="navigation__list-container">
                        <button className="navigation__btn-close" type="button" onClick={() => handleToggleMenu(false)}></button>
                        <ul className="navigation__list">
                            <li className="navigation__list-item navigation__list-item_type_main">
                                <Link to="/" className="navigation__link">Главная</Link>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/movies"
                                         className={`navigation__link 
                                                ${pathname === '/movies' ? 'navigation__link_active' : ''}
                                                ${pathname === '/' ? 'navigation__link_path_color' : ''}
                                         `}
                                         activeClassName="navigation__link_active">Фильмы</NavLink>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/saved-movies"
                                         className={`navigation__link 
                                                ${pathname === '/saved-movies' ? 'navigation__link_active' : ''}
                                                ${pathname === '/' ? 'navigation__link_path_color' : ''}
                                         `}
                                         activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/profile" className="navigation__link navigation__link_type_profile">Аккаунт</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
