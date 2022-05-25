
import './Profile.css';


const Profile = () => {

  return (

    <section className="profile">
      <form className="profile__form">
        <h3 className="profile__greeting">Привет, Артём!</h3>
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <div className="profile__area profile__area_type_name">
            <input className="profile__settings" defaultValue="Артём" required />
          </div>
          <div className="profile__area profile__area_type_email">
            <input className="profile__settings" defaultValue="artempavlov2039@gmail.com" required />
          </div>
          <p className="profile__text">E-mail</p>
        </div>
        <button className="profile__button">Редактировать</button>
        <button className="profile__link">Выйти из аккаунта</button>
      </form>
    </section>

  );
};

export default Profile;
