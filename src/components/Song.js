import React from 'react';

const Song = ({ artist, title, avaibleTabs }) => {
    return (
        <div>
            <p>{artist}, {title}, {avaibleTabs.join(', ')}</p>
        </div>
    );
}

export default Song;