import React from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongsCollection from './SongsCollection'

const App = (props) => {
const playlistsArray = props.data.playlists
const songsArray = props.data.songs

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>

      <div className="grid-x">
          <PlaylistCollection
          playlistsArray={playlistsArray}
          />
          <SongsCollection
          songsArray={songsArray}
          />
      </div>
    </div>
  )
}

export default App


