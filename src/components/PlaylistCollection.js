import React, {useState} from 'react'
import Playlist from './Playlist'

const PlaylistCollection = props => {
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

    const playlistComponents = props.playlistsArray.map(list => {
    let selected = false

    if(list.id === selectedPlaylistId) {
        selected = true
    }

    const updateSelectedState = () => {
        setSelectedPlaylistId(list.id)
    }
    return <Playlist 
    playlistData = {list} 
    key={list.id}
    selected={selected}
    update={updateSelectedState}
    />      
})

    return (
        <div className="cell small-6">
            <h2>Playlists</h2>

            {playlistComponents}
        </div>

    )
}

export default PlaylistCollection

