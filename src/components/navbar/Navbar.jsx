import React from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function Navbar({ onMenuClick }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="menu-icon" onClick={onMenuClick}>
          <MenuIcon />
        </div>
        <div className="youtube-logo">
          <img src="https://www.youtube.com/img/desktop/yt_1200.png" alt="YouTube Logo" />
          <span className="country-code">IN</span>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>
        <div className="mic-icon">
          <MicIcon />
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-icon">
          <VideoCallIcon />
        </div>
        <div className="nav-icon">
          <NotificationsIcon />
          <span className="notification-badge">9+</span>
        </div>
        <div className="profile-icon">
          <span>V</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar