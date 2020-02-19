import React from 'react';


const SearchBox = ({ onSearchChange, onButtonSubmit, onSelectChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--gray bg-lightest-gray' type='text' placeholder='Type a song title or an artist' onChange={onSearchChange}/>
            <button className="pa3 grow b--gray link bg-lightest-gray" onClick={onButtonSubmit}>Search</button>
            <br/>
            <select className="mt1" id="tabs" onChange={onSelectChange}>
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