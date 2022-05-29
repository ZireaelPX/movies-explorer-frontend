import { useState } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';

import '../Login/Login.css';
import logo from '../../images/logo.svg';


const Register = ({ onRegister }) => {
    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValidForm, setIsValidForm] = useState(false);

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

        setInputValues({ ...inputValues, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValidForm(target.closest('form').checkValidity());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(inputValues);
    };

    return (
        <section className="form">
            <div className="form__container">
                <Link to="/" className="form__link">
                    <img className="form__logo" src={logo} alt="Дипломная работа -  Яндекс Практикум"></img>
                </Link>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__inputs" onSubmit={handleSubmit}>
                    <div className="form__items">
                        <label className="form__item">
                            <p className="form__item-text">Имя</p>
                            <input className="form__field" name="name" placeholder="Введите имя" value={inputValues.name || ''} onChange={handleInputChange} required />
                            <p className="form__error">Ошибка!</p>
                        </label>

                        <label className="form__item">
                            <p className="form__item-text">E-mail</p>
                            <input
                                className={`form__field ${errors.email ? 'form__field_color-error' : ''}`}
                                name="email"
                                type="email"
                                placeholder="Введите почту"
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
                                placeholder="Введите пароль"
                                value={inputValues.password || ''}
                                onChange={handleInputChange}
                                required
                            />
                            <p className={`form__error ${errors.password ? 'form__error-display' : ''}`}>{errors.password}</p>
                        </label>
                    </div>
                    <button className={`form__button ${isValidForm ? "" : "form__button_disabled"}`} type="submit" disabled={!isValidForm ? true : ''}>Зарегистрироваться</button>
                </form>
                <p className="form__text">
                    Уже зарегистрированы?
                    <Link to="/signin" className="form__link">Войти</Link>
                </p>
            </div>
        </section>
    );
}

export default Register;
