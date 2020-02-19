import React from 'react';

const SearchBox = ({ onSearchChange, onButtonSubmit, onSelectChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green w-30 bg-lightest-blue' type='text' placeholder='browse tabs' onChange={onSearchChange}/>
            <label htmlFor="tabs">Choose a tab:</label>
            <select id="tabs" onChange={onSelectChange}>
                <option value="PLAYER">Player</option>
                <option value="TEXT_GUITAR_TAB">Guitar</option>
                <option value="CHORDS">Chords</option>
                <option value="TEXT_BASS_TAB">Bass</option>
            </select>
            <button className="pa3 grow b--green link bg-lightest-blue" onClick={onButtonSubmit}>Search</button>
        </div>
    );
}

export default SearchBox;