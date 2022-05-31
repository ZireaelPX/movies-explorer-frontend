import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__header">Портфолио Павлова Артёма</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://github.com/ZireaelPX/how-to-learn" target="_blank"
                       rel="noreferrer">
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://github.com/ZireaelPX/russian-travel" target="_blank"
                       rel="noreferrer">
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://github.com/ZireaelPX/react-mesto-auth" target="_blank"
                       rel="noreferrer">
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;
