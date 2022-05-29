import {useState, useContext} from 'react';

import {CurrentUserContext} from '../../context/CurrentUserContext';
import MainApi from '../../utils/MainApi';

import './Profile.css';

const Profile = ({onSignOut, openPopup}) => {

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);

    const [nameOld, setNameOld] = useState(currentUser.name);
    const [emailOld, setEmailOld] = useState(currentUser.email);

    const [isStateEditButton, setStateEditButton] = useState(false);

    const [isSubmiting, setSubmiting] = useState(false);

    // Функция для изменения имени пользователя
    function handleNameChange(e) {
        const value = e.target.value;
        setName(value);

        value !== nameOld ? setStateEditButton(true) : setStateEditButton(false);
    }
    // Если имя или почта не изменены, данные не обновляются

    // Функция для изменения почты пользователя
    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);

        value !== emailOld ? setStateEditButton(true) : setStateEditButton(false);
    }
    // Если имя или почта не изменены, данные не обновляются

    // Функция для отправки обновленных данных
    const handleSubmitUpdateUserInfo = (evt) => {
        evt.preventDefault();

        MainApi.updateUserInfo({name, email})
            .then(() => {
                setSubmiting(true);
                setStateEditButton(false);
                setNameOld(name);
                setEmailOld(email);
                openPopup('Ваши данные обновлены!');
            })
            .catch((err) => {
                openPopup(`Ошибка, извините! - ${err}`);
            })
            .finally(() => {
                setSubmiting(false);
            });
    };

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmitUpdateUserInfo}>
                <h3 className="profile__greeting">Привет, {name}!</h3>
                <div className="profile__inputs">
                    <p className="profile__text">Имя</p>
                    <div className="profile__area profile__area_type_name">
                        <input type={"text"} className="profile__settings" value={name}
                               onChange={handleNameChange} required/>
                    </div>
                    <div className="profile__area profile__area_type_email">
                        <input type={"email"} className="profile__settings" value={email}
                               onChange={handleEmailChange} required/>
                    </div>
                    <p className="profile__text">E-mail</p>
                </div>
                <button className="profile__button" type={"submit"} disabled={!isStateEditButton}>Редактировать</button>
                <button className="profile__link" onClick={onSignOut}>Выйти из аккаунта</button>
            </form>
        </section>
    );
};

export default Profile;
