import React from 'react';

/**
 * Allows scrolling of TableOfSongs component.
 * @param {*} props - Elements for scrolling
 */
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '700px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;