import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import '../Login/Login.css';

function Register() {
    return (

        <section className="form">
            <div className="form__container">
                <Link to="/" className="form__link">
                    <img className="form__logo" src={logo} alt="Логотип дипломной работы"></img>
                </Link>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__inputs">
                    <div className="form__items">
                        <label className="form__item">
                            <p className="form__item-text">Имя</p>
                            <input type="text" className="form__field" defaultValue="Артём" required />
                            <p className="form__error">Что-то пошло не так...</p>
                        </label>

                        <label className="form__item">
                            <p className="form__item-text">E-mail</p>
                            <input type="email" className="form__field" defaultValue="artempavlov2039@gmail.com" required />
                            <p className="form__error">Что-то пошло не так...</p>
                        </label>

                        <label className="form__item">
                            <p className="form__item-text">Пароль</p>
                            <input type="password" className="form__field form__field_color-error" defaultValue="••••••••••" required />
                            <p className="form__error form__error-display">Что-то пошло не так...</p>
                        </label>
                    </div>
                    <button type="submit" className="form__button" disabled>
                        Зарегестрироваться
                    </button>
                </form>
                <p className="form__text">
                    Уже зарегестрированы?
                    <Link to="/signin" className="form__link">
                        Войти
                    </Link>
                </p>
            </div>
        </section>

    );
}

export default Register;
