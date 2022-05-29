import React from 'react';

function FilterCheckbox({checkboxChecked, setCheckboxChecked}) {

    return (
        <div className="search__toggle">
            <p className="search__films">Короткометражки</p>
            <label className="search__tumbler">
                <input className="search__checkbox" type="checkbox" onClick={() => {
                    setCheckboxChecked(!checkboxChecked);
                }}/>
                <span className="search__slider"/>
            </label>
        </div>
    );
}

export default FilterCheckbox;
