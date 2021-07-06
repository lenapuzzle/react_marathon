import React from 'react'

const Song = props => {

    let classes = ""

    if(props.selected) {
        classes += " selected"
    }

    return (
        <h3
        className={classes}
        onClick={props.update}>
        {props.songData.artist} - {props.songData.name}
        </h3>
    )
}

export default Song
