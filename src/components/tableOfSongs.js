import React from 'react';
import Song from './Song';

const TableOfSongs = ({ songs, tab }) => {
    return (
        <div className="pa4">
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellspacing="0">
                    <thead>
                        <tr>
                            <th className="fw6 bb b--black-20 pb3 pr3">Artist</th>
                            <th className="fw6 bb b--black-20 pb3 pr3">Title</th>
                            <th className="fw6 bb b--black-20 pb3 pr3">Avaible tabs:</th>
                        </tr>
                    </thead>
            {
                songs.map((song, i) => {
                    if (songs[i].tabTypes.includes(tab)) {
                        return (
                            <tbody className="lh-copy">
                                <Song
                                    artist={songs[i].artist.name}
                                    title={songs[i].title}
                                    avaibleTabs={songs[i].tabTypes}
                                />
                            </tbody>
                        );
                    } else {
                        i++;
                    }
                })
            }
                </table>
            </div>
        </div>
    );
}

export default TableOfSongs;