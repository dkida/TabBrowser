import React from 'react';

const SearchBox = ({ searchChange, buttonSubmit }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green w-30 bg-lightest-blue' type='text' placeholder='browse tabs' onChange={searchChange}/>
            <button className="pa3 grow b--green link bg-lightest-blue" onClick={buttonSubmit}>Search</button>
        </div>
    );
}

export default SearchBox;