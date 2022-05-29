import React from 'react';
import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList({
                            movies,
                            savedMovies,
                            setSavedMovieList,
                            savedMovieListFound,
                        }) {
    const location = useLocation();
    const [sm, setSm] = React.useState([]);

    React.useEffect(() => {
        if (savedMovieListFound.length > 0) {
            setSm(savedMovieListFound);
        } else {
            setSm(savedMovies);
        }
    }, [savedMovieListFound, savedMovies]);
    const convertTime = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const finalResult = `${hours}ч ${minutes}м`;
        return finalResult;
    };

    return (
        <section className="cards">
            <ul
                className="cards__list"
            >
                {location.pathname === '/movies' &&
                    movies.map((card) => (
                        <MoviesCard
                            card={card}
                            key={card.id}
                            cardTitle={card.nameRU}
                            cardImageLink={
                                card.image
                                    ? `https://api.nomoreparties.co` + card.image.url
                                    : null
                            }
                            trailerLink={card.trailerLink}
                            duration={convertTime(card.duration)}
                            savedMovies={savedMovies}
                        />
                    ))}
                {location.pathname === '/saved-movies' &&
                    sm.map((card) => (
                        <MoviesCard
                            card={card}
                            key={card._id}
                            cardTitle={card.nameRU}
                            cardImageLink={card.image ? card.image : null}
                            trailerLink={card.trailer}
                            duration={convertTime(card.duration)}
                            savedMovies={savedMovies}
                            setSavedMovieList={setSavedMovieList}
                        />
                    ))}
            </ul>
        </section>
    );
}

export default MoviesCardList;

