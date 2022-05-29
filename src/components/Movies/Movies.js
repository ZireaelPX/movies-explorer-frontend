
import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';
import Preloader from '../Preloader/Preloader';
import { SHORT_MOVIE } from '../../utils/constants';

import './Movies.css';

import MoviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

function Movies() {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [queryResult, setQueryResult] = React.useState([]);
    const [checkboxChecked, setCheckboxChecked] = React.useState(false);
    const [preloaderVisible, setPreloaderVisible] = React.useState(false);
    const [showMoreVisible, setShowMoreVisible] = React.useState(false);
    const [movieListVisible, setMovieListVisible] = React.useState(false);
    const [savedMovieList, setSavedMovieList] = React.useState([]);
    const [savedMovieListFound, setSavedMovieListFound] = React.useState([]);
    const [searchErrorVisible, setSearchErrorVisible] = React.useState(false);
    const [wasThereASearch, setWasThereASearch] = React.useState(false);
    const [howManyToRender, setHowManyToRender] = React.useState(3);
    const [clickCounter, setClickCounter] = React.useState(1);

    const [initialCards, setInitialCards] = React.useState(
        JSON.parse(localStorage.getItem('movies')) || []
    );
    const [initialCardsCount, setInitialCardsCount] = React.useState(12);

    const [renderedCards, setRenderedCards] = React.useState([]);

    const [windowSize, setWindowSize] = React.useState({
        width: undefined,
    });


    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        howManyCards();
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize.width, location]);

    function howManyCards() {
        if (windowSize.width <= 480) {
            setInitialCardsCount(5);
            setHowManyToRender(2);
            setClickCounter(1);
        } else if (windowSize.width <= 1000) {
            setInitialCardsCount(8);
            setHowManyToRender(2);
            setClickCounter(1);
        } else {
            setInitialCardsCount(12);
            setHowManyToRender(3);
            setClickCounter(1);
        }
    }

    React.useEffect(() => {
        setSearchQuery('');
        api.getSavedMovies()
            .then((movies) => {
                if (movies.message) {
                    console.log(movies.message);
                }
                if (movies.length > 0 && movies !== undefined) {
                    setSavedMovieList(movies);
                    setSearchErrorVisible(false);
                    if (location.pathname === '/saved-movies') {
                        setQueryResult(movies);
                    } else {
                        setQueryResult(initialCards);
                    }
                }
            })
            .catch((err) => console.log(err));
    }, [location]);

    React.useEffect(() => {
        if (location.pathname === '/saved-movies') {
            if (savedMovieList.length > 0) {
                setMovieListVisible(true);
                setSearchErrorVisible(false);
            } else {
                setSearchErrorVisible(true);
            }
        }
        if (location.pathname === '/movies' && localStorage.getItem('movies')) {
            setSearchErrorVisible(false);
            setRenderedCards(initialCards.slice(0, initialCardsCount));
            setMovieListVisible(true);
            setPreloaderVisible(false);
            setShowMoreVisible(true);
        }
        setSavedMovieListFound([]); //
    }, [location.pathname, savedMovieList.length]);

    React.useEffect(() => {
        if (initialCards.length > 0 || initialCards !== null) {
            setQueryResult(initialCards);
            setRenderedCards(initialCards.slice(0, initialCardsCount));
        }
    }, [initialCardsCount]);

    React.useEffect(() => {
        if (queryResult.length > renderedCards.length) {
            setShowMoreVisible(true);
        } else {
            setShowMoreVisible(false);
        }

        if (queryResult.length <= 0) {
            setMovieListVisible(false);
            setSearchErrorVisible(true);
            setShowMoreVisible(false);
        } else {
            setMovieListVisible(true);
            setSearchErrorVisible(false);
        }
    }, [renderedCards, queryResult]);

    React.useEffect(() => {
        if (wasThereASearch && searchQuery !== '') handleSearch();
    }, [checkboxChecked]);

    function handleSearch() {
        setWasThereASearch(true);
        setClickCounter(1);
        setPreloaderVisible(true);
        if (location.pathname === '/movies') {
            if (!localStorage.getItem('movies')) {
                MoviesApi.getMovies()
                    .then((movieList) => {
                        localStorage.setItem('movies', JSON.stringify(movieList));
                        setInitialCards(JSON.parse(localStorage.getItem('movies')));
                        const filteredMovies = filter(
                            JSON.parse(localStorage.getItem('movies'))
                        );
                        setMovieListVisible(true);
                        setQueryResult(filteredMovies);
                        setRenderedCards(filteredMovies.slice(0, initialCardsCount));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                setInitialCards(JSON.parse(localStorage.getItem('movies')));
                return;
            }
            const filteredMovies = filter(initialCards);
            if (filteredMovies.length <= 0) {
                setSearchErrorVisible(true);
            } else {
                setSearchErrorVisible(false);
                setMovieListVisible(true);
            }
            setQueryResult(filteredMovies);
            setRenderedCards(filteredMovies.slice(0, initialCardsCount));
        } else {
            const filteredMovies = filter(savedMovieList);
            setQueryResult(filteredMovies);
            setSavedMovieListFound(filteredMovies);
        }
    }

    function search(e) {
        e.preventDefault();
        handleSearch();
        e.target.reset();
    }

    function filter(movieList) {
        const filteredMovies = movieList.filter((movie) => {
            const movieToLC = movie.nameRU.toLowerCase();
            return movieToLC.includes(searchQuery.toLowerCase());
        });
        if (checkboxChecked) {
            setPreloaderVisible(false);
            return handleShortFilms(filteredMovies);
        }
        setPreloaderVisible(false);
        return filteredMovies;
    }

    function handleShortFilms(movieList) {
        return movieList.filter((movie) => {
            return movie.duration <= SHORT_MOVIE;
        });
    }

    function handleShowMore() {
        setClickCounter(clickCounter + 1);
        setRenderedCards(
            queryResult.slice(0, initialCardsCount + howManyToRender * clickCounter)
        );
    }

    return (
        <div className='movies'>
            <SearchForm
                handleSearch={search}
                setSearchQuery={setSearchQuery}
                checkboxChecked={checkboxChecked}
                setCheckboxChecked={setCheckboxChecked}
            />
            {searchErrorVisible ||
            (!localStorage.getItem('movies') && location.pathname === '/movies') ? (
                <p className='cards__text_status'>
                    Ничего не найдено. Попробуйте другой запрос!
                </p>
            ) : (
                <MoviesCardList
                    movies={renderedCards}
                    savedMovies={savedMovieList}
                    savedMovieListFound={savedMovieListFound}
                    setSavedMovieList={setSavedMovieList}
                    movieListVisible={movieListVisible}
                    checkboxChecked={checkboxChecked}
                />
            )}

            <Preloader preloaderVisible={preloaderVisible} />
            {location.pathname === '/movies' && (
                <ShowMore
                    showMoreVisible={showMoreVisible}
                    handleShowMore={handleShowMore}
                />
            )}
        </div>
    );
}

export default Movies;
