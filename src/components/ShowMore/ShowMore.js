import React from 'react';

import './ShowMore.css';

function ShowMore({showMoreVisible, handleShowMore}) {
    return (
        // <div className={`show-more ${!showMoreVisible ? 'show-more_hidden' : ''}`}>
        //     <button className='show-more__button' onClick={handleShowMore}>
        //         Ещё
        //     </button>
        // </div>

        <div className={`cards__button-container ${!showMoreVisible ? 'show-more_hidden' : ''}`} >
            <button className="cards__button" type="button" name="more" onClick={handleShowMore}>Ещё</button>
        </div>

    );
}

export default ShowMore;
