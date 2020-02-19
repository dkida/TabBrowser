import React from 'react';
import Song from './Song';

const TableOfSongs = ({ songs, tab }) => {
    return (
        <div>
            {
                songs.map((song, i) => {
                    if (songs[i].tabTypes.includes(tab)) {
                        return (
                            <div>
                                <Song
                                    artist={songs[i].artist.name}
                                    title={songs[i].title}
                                    avaibleTabs={songs[i].tabTypes}
                                />
                            </div>
                        );
                    } else {
                        i++;
                    }
                })
            }
        </div>
    );
}

export default TableOfSongs;