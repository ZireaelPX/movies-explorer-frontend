import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/DataAllMovies';

import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";

const Movies = () => {
    return (
        <div className="movies">
            <SearchForm/>

            <MoviesCardList
                cards={cards}
                buttonMore={true}/>
        </div>
    );
}

export default Movies;
