import React, {useState} from 'react'
import Song from './Song'

const SongsCollection = props => {
    const [selectedSongId, setSelectedSongId] = useState(null)

    const songsComponents = props.songsArray.map(song => {
        let selected = false

        if(song.id === selectedSongId) {
            selected = true
        }

        const updateSelectedSongState = () => {
            setSelectedSongId(song.id)
        }

        return (
            <Song
            songData={song}
            key={song.id}
            selected={selected}
            update={updateSelectedSongState}
            />
        )
    })
    return(
        <div className="cell small-6">
        <h2>Songs</h2>

        {songsComponents}
        </div>
    )
}

export default SongsCollection