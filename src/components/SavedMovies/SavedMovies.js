import MoviesCardList from '../MoviesCardList/MoviesCardList';
import saveMovies from '../../utils/DataSaveMovies';
import SearchForm from "../SearchForm/SearchForm";

import './SavedMovies.css';

const SavedMovies = () => {
    return (

        <div className="saved-movies">
            <SearchForm/>
            <MoviesCardList
                cards={saveMovies}
                buttonMore={false} />
        </div>

    );
};

export default SavedMovies;
