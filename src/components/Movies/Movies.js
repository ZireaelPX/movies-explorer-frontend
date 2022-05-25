import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/DataAllMovies';

import './Movies.css';

function Movies() {
    return (

        <div className="movies">
            <MoviesCardList
                cards={cards}
                buttonMore={true} />
        </div>

    );
}

export default Movies;
