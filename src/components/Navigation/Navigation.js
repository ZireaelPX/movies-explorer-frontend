import {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    const [showItems, setShowItems] = useState(false);
    const {pathname} = useLocation();

    const handleToggleMenu = () => setShowItems(!showItems);

    useEffect(() => {
        setShowItems(false);
    }, []);

    console.log(pathname)

    return (
        <nav className="navigation">
            <button className="navigation__btn-menu" type="button" onClick={handleToggleMenu}></button>
            <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`}>
                <div className="navigation__sidebar">
                    <div className="navigation__list-container">
                        <button className="navigation__btn-close" type="button" onClick={handleToggleMenu}></button>
                        <ul className="navigation__list">
                            <li className="navigation__list-item navigation__list-item_type_main">
                                <Link to="/" className="navigation__link">Главная</Link>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/movies"
                                         className={`navigation__link ${pathname === '/movies' ? 'navigation__link_active' : ''}`}
                                         activeClassName="navigation__link_active">Фильмы</NavLink>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/saved-movies"
                                         className={`navigation__link ${pathname === '/saved-movies' ? 'navigation__link_active' : ''}`}
                                         activeClassName="navigation__link_active">Сохранённые
                                    фильмы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/profile" className="navigation__link navigation__link_type_profile"
                             activeClassName="navigation__link_active">Аккаунт</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
