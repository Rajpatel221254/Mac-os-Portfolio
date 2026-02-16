import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ windowsState, setWindowsState }) => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" alt="" />
                </div>

                <div className="nav-item">
                    <p>Raj Patel</p>
                </div>

                <div
                onClick={() => { setWindowsState(state => ({ ...state, file: true })) }} className="nav-item">
                    <p>Apps</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }} className="nav-item">
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="/navbar-icons/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>

            </div>
        </nav>
    )
}

export default Nav