import React from 'react'
import MacWindow from './MacWindow'
import './google.scss'

const Google = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow width="50vw" height="50vh" windowName={windowName} setWindowsState={setWindowsState} >
        <div className="google-window">
                <iframe src="https://www.google.com/search?igu=1"></iframe>
            </div>
    </MacWindow>
  )
}

export default Google
