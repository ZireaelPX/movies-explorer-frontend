import {useState} from 'react';
import {Link} from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';

import './Login.css';
import logo from '../../images/logo.svg';

const Login = ({onLogin}) => {

    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValidForm, setIsValidForm] = useState(false);

    // Валидация input
    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        if (name === 'email') {
            if (!isEmail(value)) {
                target.setCustomValidity('Извините, адрес электронный почты не подходит!!!');
            } else {
                target.setCustomValidity('');
            }
        }

        setInputValues({...inputValues, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});

        setIsValidForm(target.closest('form').checkValidity());
    };

    // Отправка формы
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        onLogin(inputValues);
    };

    return (
        <section className="form">
            <div className="form__container">
                <Link to="/" className="form__link">
                    <img className="form__logo" src={logo} alt="Дипломная работа - Яндекс Практикум"></img>
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__inputs" onSubmit={handleLoginSubmit}>
                    <div className="form__items">
                        <label className="form__item">
                            <p className="form__item-text">E-mail</p>
                            <input
                                className={`form__field ${errors.email ? 'form__field_color-error' : ''}`}
                                name="email"
                                type="email"
                                placeholder="Введите вашу почту"
                                value={inputValues.email || ''}
                                onChange={handleInputChange}
                                required
                            />
                            <p className={`form__error ${errors.email ? 'form__error-display' : ''}`}>{errors.email}</p>
                        </label>

                        <label className="form__item">
                            <p className="form__item-text">Пароль</p>
                            <input
                                className={`form__field ${errors.password ? 'form__field_color-error' : ''}`}
                                name="password"
                                type="password"
                                minLength="3"
                                placeholder="Введите ваш пароль"
                                value={inputValues.password || ''}
                                onChange={handleInputChange}
                                required
                            />
                            <p className={`form__error ${errors.password ? 'form__error-display' : ''}`}>{errors.password}</p>
                        </label>
                    </div>
                    <button
                        className={`form__button ${isValidForm ? "" : "form__button_disabled"}`}
                        type="submit"
                        disabled={!isValidForm ? true : ''}
                    >
                        Войти
                    </button>
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
