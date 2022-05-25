import {useState} from "react";
import './MoviesCard.css';

const MoviesCard = ({ card }) => {
    const [favorite, setFavorite] = useState(false);

    function handleToogleFavorite() {
        setFavorite(!favorite);
    }

    return (

        <li className="card">
            <img src={card.image} alt={card.title} className="card__image"></img>
            <div className="card__element">
                <p className="card__title">{card.title}</p>
                <div className="card__buttons">
                    <button
                        type="button"
                        className={`card__button card__button${favorite ? '_active' : '_inactive'}`}
                        onClick={handleToogleFavorite}
                    />
                </div>
            </div>
            <p className="card__duration">{card.duration}</p>
        </li>

    );
};

export default MoviesCard;
