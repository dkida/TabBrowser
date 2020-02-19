import React from 'react';

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