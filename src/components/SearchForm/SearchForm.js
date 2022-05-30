
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';


function SearchForm({
                        handleSearch,
                        setSearchQuery,
                        checkboxChecked,
                        setCheckboxChecked,
                    }) {
    const [buttonDisabled, setButtonDisabled] = React.useState(true);

    function handleChange(e) {
        setSearchQuery(e.target.value);
        if (e.target.value === '') {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }

    return (
        <form className="search" onSubmit={handleSearch}>
            <div className="search__container">
                <input className="search__input" placeholder="Фильм" type="text" onChange={handleChange} required minLength={2} />
                <button type="submit"
                        className="search__button"
                        disabled={buttonDisabled}
                >Найти</button>
            </div>
            <FilterCheckbox
                checkboxChecked={checkboxChecked}
                setCheckboxChecked={setCheckboxChecked}
            />
        </form>
    );
}

export default SearchForm;
