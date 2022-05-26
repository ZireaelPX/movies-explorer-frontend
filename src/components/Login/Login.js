import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Login.css';

const Login = () => {
    return (
        <section className="form">
            <div className="form__container">
                <Link to="/" className="form__link">
                    <img className="form__logo" src={logo} alt="Логотип дипломной работы"></img>
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__inputs">
                    <div className="form__items">
                        <label className="form__item">
                            <p className="form__item-text">E-mail</p>
                            <input type="email" className="form__field" defaultValue="artempavlov2039@gmail.com"
                                   required/>
                            <p className="form__error">Что-то пошло не так...</p>
                        </label>
                        <label className="form__item">
                            <p className="form__item-text">Пароль</p>
                            <input type="password" className="form__field" required/>
                            <p className="form__error">Что-то пошло не так...</p>
                        </label>
                    </div>
                    <button type="submit" className="form__button" disabled>Войти</button>
                </form>
                <p className="form__text">
                    Ещё не зарегистрированы?
                    <Link to="/signup" className="form__link">Регистрация</Link>
                </p>
            </div>
        </section>
    );
}

export default Login;
