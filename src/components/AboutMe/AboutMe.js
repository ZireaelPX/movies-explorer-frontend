import avatar from '../../images/avatar.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__header">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__info">
                    <h3 className="about-me__name">Артём</h3>
                    <p className="about-me__job">Фронтенд-разработчик, 20 лет</p>
                    <p className="about-me__description">
                        Я родился в городе Чебоксары и живу в Новочебоксарске. Заканчиваю обучение в ЧЭМК.
                        Моя специальность: "Разработчик веб и мультимедийных приложений". Люблю читать произведения на
                        тематику космоса.
                    </p>
                    <ul className="about-me__links">
                        <li><a className="about-me__link" href="https://t.me/artempx" target="_blank"
                               rel="noreferrer">Telegram</a></li>
                        <li><a className="about-me__link" href="https://github.com/ZireaelPX" target="_blank"
                               rel="noreferrer">Github</a></li>
                    </ul>
                </div>
                <img src={avatar} alt="Артём Павлов, Фронтенд-разработчик" className="about-me__image"/>
            </div>
        </section>
    );
};

export default AboutMe;
