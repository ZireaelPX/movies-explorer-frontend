import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi.js';

import './Movies.css';

const Movies = ({openPopup}) => {
    const [films, setFilms] = useState(null);
    const [filmsSaved, setFilmsSaved] = useState(null);
    const [preloader, setPreloader] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [filmsTumbler, setFilmsTumbler] = useState(false);
    const [filmsInputSearch, setFilmsInputSearch] = useState('');
    const [MoviesCount, setMoviesCount] = useState([]);
    const [filmsShowed, setFilmsShowed] = useState(null);
    const [filmsWithTumbler, setFilmsWithTumbler] = useState([]);
    const [filmsShowedWithTumbler, setFilmsShowedWithTumbler] = useState([]);

    useEffect(() => {
        setMoviesCount(getMoviesCount());
        const handlerResize = () => setMoviesCount(getMoviesCount());
        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', handlerResize);
        };
    }, []);

    // Функция для объекта сохранения нового фильма
    function createSavedFilm(film) {
        return {
            image: 'https://api.nomoreparties.co' + film.image.url,
            trailerLink: film.trailerLink,
            thumbnail: 'https://api.nomoreparties.co' + film.image.url,
            movieId: film.id,
            country: film.country || 'Земля',
            director: film.director,
            duration: film.duration,
            year: film.year,
            description: film.description,
            nameRU: film.nameRU,
            nameEN: film.nameEN,
        };
    }

    // Конфигурация
    function getMoviesCount() {
        let countCards;
        const clientWidth = document.documentElement.clientWidth;
        const MoviesCount = {
            '1280': [12, 4],
            '960': [9, 3],
            '768': [8, 2],
            '320': [5, 2],
        };

        Object.keys(MoviesCount).sort((a, b) => a - b).forEach((key) => {
            if (clientWidth > +key) {
                countCards = MoviesCount[key];
            }
        });

        return countCards;
    }

    function handleMore() {
        const spliceFilms = films;
        const newFilmsShowed = filmsShowed.concat(spliceFilms.splice(0, MoviesCount[1]));
        setFilmsShowed(newFilmsShowed);
        setFilms(spliceFilms);
    }

    // Получение фильмов
    async function handleGetMovies(inputSearch) {
        setFilmsTumbler(false);
        localStorage.setItem('filmsTumbler', false);

        if (!inputSearch) {
            setErrorText('Введите символы!');
            return false;
        }

        setErrorText('');
        setPreloader(true);

        try {
            const data = await moviesApi.getMovies();

            let filterData = data.filter(({nameRU}) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));

            localStorage.setItem('films', JSON.stringify(filterData));
            localStorage.setItem('filmsInputSearch', inputSearch);

            const spliceData = filterData.splice(0, MoviesCount[0]);

            setFilmsShowed(spliceData);
            setFilms(filterData);
            setFilmsShowedWithTumbler(spliceData);
            setFilmsWithTumbler(filterData);
        } catch (err) {
            setErrorText(
                'Во время запроса произошла ошибка...'
            );
            setFilms([]);

            localStorage.removeItem('films');
            localStorage.removeItem('filmsTumbler');
            localStorage.removeItem('filmsInputSearch');
        } finally {
            setPreloader(false);
        }
    }

    async function handleGetMoviesTumbler(tumbler) {
        let filterDataShowed = [];
        let filterData = [];

        if (tumbler) {
            setFilmsShowedWithTumbler(filmsShowed);
            setFilmsWithTumbler(films);
            filterDataShowed = filmsShowed.filter(({duration}) => duration <= 40);
            filterData = films.filter(({duration}) => duration <= 40);
        } else {
            filterDataShowed = filmsShowedWithTumbler;
            filterData = filmsWithTumbler;
        }

        localStorage.setItem('films', JSON.stringify(filterDataShowed.concat(filterData)));
        localStorage.setItem('filmsTumbler', tumbler);

        setFilmsShowed(filterDataShowed);
        setFilms(filterData);
    }

    // Функция для сохранения и удаления нового фильма
    async function savedMoviesToggle(film, favorite) {
        if (favorite) {
            const objFilm = createSavedFilm(film);

            try {
                await mainApi.addMovies(objFilm);
                const newSaved = await mainApi.getMovies();
                setFilmsSaved(newSaved);
            } catch (err) {
                openPopup('Не исполнено...');
            }

        } else {

            try {
                await mainApi.deleteMovies(film._id);
                const newSaved = await mainApi.getMovies();
                setFilmsSaved(newSaved);
            } catch (err) {
                openPopup('Не исполнено...');
            }

        }
    }

    useEffect(() => {
        mainApi.getMovies()
            .then((data) => {
                setFilmsSaved(data);
            })
            .catch((err) => {
                openPopup(`Ошибка сервера ${err}`);
            });

        const localStorageFilms = localStorage.getItem('films');

        if (localStorageFilms) {
            const filterData = JSON.parse(localStorageFilms);
            setFilmsShowed(filterData.splice(0, getMoviesCount()[0]));
            setFilms(filterData);
            setPreloader(false);
        }

        const localStorageFilmsTumbler = localStorage.getItem('filmsTumbler');
        const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');

        if (localStorageFilmsTumbler)
            setFilmsTumbler(localStorageFilmsTumbler === 'true');

        if (localStorageFilmsInputSearch)
            setFilmsInputSearch(localStorageFilmsInputSearch);

    }, [openPopup]);

    return (
        <div className="movies">
            <SearchForm handleGetMovies={handleGetMovies} filmsTumbler={filmsTumbler}
                        filmsInputSearch={filmsInputSearch} handleGetMoviesTumbler={handleGetMoviesTumbler}/>
            {
                preloader && <Preloader/>
            }
            {
                errorText && <div className="cards__text_status">{errorText}</div>
            }
            {
                !preloader && !errorText && films !== null && filmsSaved !== null && filmsShowed !== null &&
                (
                    <MoviesCardList handleMore={handleMore} filmsRemains={films} films={filmsShowed}
                                    savedMoviesToggle={savedMoviesToggle} filmsSaved={filmsSaved}/>
                )
            }
        </div>
    );
};

export default Movies;
