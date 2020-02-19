import React from 'react';

/**
 * Component with the input for artist's name/song title, search button and select box with the tab types.
 * @param {function} onSearchChange
 * @param {function} onButtonSubmit 
 */
const SearchBox = ({ onSearchChange, onButtonSubmit }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--gray bg-lightest-gray' type='text' placeholder='Type a song title or an artist' onChange={onSearchChange}/>
            <button className="pa3 grow b--gray link bg-lightest-gray" onClick={onButtonSubmit}>Search</button>
            <br/>
            <select className="mt1" id="tabs">
                <option value="" disabled selected hidden>Choose a tab type</option>
                <option value="PLAYER">Player</option>
                <option value="TEXT_GUITAR_TAB">Guitar</option>
                <option value="CHORDS">Chords</option>
                <option value="TEXT_BASS_TAB">Bass</option>
            </select>
        </div>
    );
}

export default SearchBox;