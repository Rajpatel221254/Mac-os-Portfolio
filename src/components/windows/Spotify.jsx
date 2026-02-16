import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow width="60vw" height="60vh" windowName={windowName} setWindowsState={setWindowsState} >
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/5pCp5e7BmOm2Gh1nPxIJOJ?utm_source=generator&theme=0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify