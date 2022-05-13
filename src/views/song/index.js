import React, { memo } from 'react';

import {
    SongWrapper,
    SongContentLeft,
    SongContentRight,
} from './style';

const DZSong = memo(() => {
  return (
    <SongWrapper>
        <div className="song-content wrap-v2">
            <SongContentLeft>
                <h2>DZSongInfo</h2>
                <h2>DZSongContent</h2>
            </SongContentLeft>
            <SongContentRight>
                <h2>DZSongInfo</h2>
                <h2>DZSongContent</h2>
            </SongContentRight>
        </div>
    </SongWrapper>
  )
})

export default DZSong