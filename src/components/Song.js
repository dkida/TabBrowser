import React from 'react';

/**
 * Renders body of the TableOfSongs component. Each row is a new song.
 * @param {string} artist - Artists name
 * @param {string} title - Title of a song
 * @param {array} avaibleTabs - an array of avaible tabs
 * @return {object} Song component
 */
const Song = ({ artist, title, avaibleTabs }) => {
    let tabs = avaibleTabs.join(' | ').split('_').join(' ').toLowerCase().split("tab");

    return (
        <tr>
          <td className="pv3 pr3 bb b--black-20">{artist}</td>
          <td className="pv3 pr3 bb b--black-20">{title}</td>
          <td className="pv3 pr3 bb b--black-20">{tabs}</td>
        </tr>
    );
}

export default Song;