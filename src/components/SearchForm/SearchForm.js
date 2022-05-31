import {useEffect, useState} from 'react';

import './SearchForm.css';
import {useLocation} from "react-router-dom";

const SearchForm = ({handleGetMovies, filmsTumbler, filmsInputSearch, handleGetMoviesTumbler}) => {
    const [inputSearch, setInputSearch] = useState('');
    const [tumbler, setTumbler] = useState(false);


    const [tumblerSave, setTumblerSave] = useState(false);

    const {pathname} = useLocation();

    function handleInputChange(e) {
        setInputSearch(e.target.value);
    }

    function handleTumblerChange(e) {
        const newTumbler = !tumbler;
        setTumbler(newTumbler);
        handleGetMoviesTumbler(newTumbler);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleGetMovies(inputSearch);
    }

    function handleTumblerChangeSave(e) {
        const newTumbler = !tumblerSave;
        setTumblerSave(newTumbler);
        handleGetMovies(inputSearch, newTumbler);
    }

    useEffect(() => {
        setTumbler(filmsTumbler);
        setInputSearch(filmsInputSearch);
    }, [filmsTumbler, filmsInputSearch]);

    return (
        <form className="search">
            <div className="search__container">
                <input className="search__input" placeholder="Фильм" type="text" value={inputSearch || ''}
                       onChange={handleInputChange} required/>
                <button type="submit" className="search__button" onClick={handleSubmit}>Найти</button>
            </div>
            <div className="search__toggle">
                <p className="search__films">Короткометражки</p>
                <label className="search__tumbler">

                    <input className="search__checkbox" type="checkbox"
                           value={pathname === '/saved-movies' ? tumblerSave : tumbler}
                           checked={pathname === '/saved-movies' ? tumblerSave : tumbler}
                           onChange={(e) => {
                               if(pathname === '/saved-movies'){
                                   handleTumblerChangeSave(e);
                               }else{
                                   handleTumblerChange(e);
                               }
                           }}/>

                    <span className="search__slider"/>
                </label>
            </div>
        </form>
    );
};

export default SearchForm;
