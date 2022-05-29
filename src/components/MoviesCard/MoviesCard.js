// const moviesIcon = isSaved ? `card__button card__button_active` : `card__button card__button_inactive`;
// const icon = location.pathname === '/movies' ? moviesIcon : 'card__button_delete';

import React from 'react';
import {useLocation} from 'react-router-dom';
import {CurrentUserContext} from '../../context/CurrentUserContext';

import './MoviesCard.css';
import api from '../../utils/MainApi';

function MoviesCard({
                        card,
                        cardTitle,
                        cardImageLink,
                        duration,
                        trailerLink,
                        savedMovies,
                        setSavedMovieList,
                    }) {
    const currentUser = React.useContext(CurrentUserContext);
    const location = useLocation();
    const [isSaved, setIsSaved] = React.useState(false);

    React.useEffect(() => {
        if (savedMovies.length > 0) {
            // if (!isSaved) {
            //     setIsSaved(
            //         savedMovies.some(
            //             (savedMovie) =>
            //                 savedMovie.movieId == card.id &&
            //                 savedMovie.owner == currentUser._id
            //         )
            //     );
            // } else {
            //     setIsSaved(false);
            // }
            const boolSavedFilms = savedMovies.some(
                (savedMovie) =>
                    savedMovie.movieId == card.id &&
                    savedMovie.owner == currentUser._id
            )
            if (boolSavedFilms) {
                setIsSaved(true);
            } else {
                setIsSaved(false)
            }
        }
        // if (savedMovies.length > 0) {
        //         setIsSaved(
        //             savedMovies.some((savedMovie) =>
        //                 savedMovie.movieId == card.id &&
        //                 savedMovie.owner == currentUser._id
        //             )
        //         );
        // }
    }, [savedMovies]);

    // console.log(savedMovies.some((savedMovie) => {
    //     console.log(savedMovie)
    //     console.log(currentUser._id)
    //     console.log(savedMovie.movieId)
    //     console.log(card.id)
    //     return savedMovie.movieId === card.id &&
    //         savedMovie.owner === currentUser._id
    // }));

    const moviesIcon = isSaved ? `card__button card__button_active` : `card__button card__button_inactive`;
    const icon = location.pathname === '/movies' ? moviesIcon : 'card__button_delete';

    const handleLike = (e) => {
        console.log(e.target.classList.contains('card__button_active'))
        if (e.target.classList.contains('card__button_inactive')) {
            for (let key in card) {
                if (card[key] === null || card[key] === '') card[key] = 'нет данных';
            }

            api.saveMovie(card)
                .then((res) => {
                    if (res) {
                        setIsSaved(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (e.target.classList.contains('card__button_active')) {
            console.log(card.id)
            savedMovies.forEach((savedMovie) => {
                if (savedMovie.movieId == card.id) {
                    console.log('Успешно')
                    api.deleteMovie(savedMovie._id)
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
            // const arr = savedMovies.filter(item => item.movieId == card.id);
            // console.log(arr)
            setIsSaved(false);
        }
    };

    const unsave = () => {
        api.deleteMovie(card._id).catch((err) => {
            console.log(err);
        });
        const newSavedMoviesList = savedMovies.filter(function (c) {
            return c._id !== card._id;
        });
        setSavedMovieList(newSavedMoviesList);
    };

    return (
        <>
            <li className="card">
                <a className="card__image-content"
                   href={trailerLink}
                   target="_blank"
                   rel="noreferrer"
                >
                    <img className="card__image"
                         src={cardImageLink}
                         alt='Фильм'
                    ></img>
                </a>
                <div className="card__element">
                    <p className="card__title">{cardTitle}</p>
                    <div className="card__buttons">

                        {/*{*/}
                        {/*    pathname === '/saved-movies' ?*/}
                        {/*        (*/}
                        {/*            <button type="button" className="card__button card__button_delete"*/}
                        {/*                    onClick={handleFavoriteDelete}/>*/}
                        {/*        )*/}
                        {/*        :*/}
                        {/*        (*/}
                        {/*            <button type="button"*/}
                        {/*                    className={`card__button card__button${favorite ? '_active' : '_inactive'}`}*/}
                        {/*                    onClick={handleFavoriteToogle}/>*/}
                        {/*        )*/}
                        {/*}*/}
                        <button type="button"
                            // className={`card__button card__button_active`}
                                className={icon}
                                onClick={(e) => {
                                    location.pathname === '/movies' ? handleLike(e) : unsave()
                                }}/>

                    </div>
                </div>
                <p className="card__duration">{duration}</p>
            </li>
        </>
    );
}

export default MoviesCard;

