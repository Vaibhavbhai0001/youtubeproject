import React from 'react'
import './Sidebar.css'
// Import Material Icons
import HomeIcon from '@mui/icons-material/Home'
import PlayShortVideoIcon from '@mui/icons-material/PlayArrow'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HistoryIcon from '@mui/icons-material/History'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DownloadIcon from '@mui/icons-material/Download'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Main Section */}
      <div className="sidebar-section">
        <div className="sidebar-item active">
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className="sidebar-item">
          <PlayShortVideoIcon />
          <span>Shorts</span>
        </div>
        <div className="sidebar-item">
          <SubscriptionsIcon />
          <span>Subscriptions</span>
        </div>
      </div>

      {/* You Section */}
      <div className="sidebar-section">
        <div className="section-header">You</div>
        <div className="sidebar-item">
          <AccountCircleIcon />
          <span>Your channel</span>
        </div>
        <div className="sidebar-item">
          <HistoryIcon />
          <span>History</span>
        </div>
        <div className="sidebar-item">
          <VideoLibraryIcon />
          <span>Your videos</span>
        </div>
        <div className="sidebar-item">
          <WatchLaterIcon />
          <span>Watch later</span>
        </div>
        <div className="sidebar-item">
          <ThumbUpIcon />
          <span>Liked videos</span>
        </div>
        <div className="sidebar-item">
          <DownloadIcon />
          <span>Downloads</span>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="sidebar-section">
        <div className="section-header">Subscriptions</div>
        <div className="sidebar-item">
          <img className="channel-icon" src="https://via.placeholder.com/24" alt="Candle King" />
          <span>Candle King</span>
          <FiberManualRecordIcon className="live-indicator" />
        </div>
        <div className="sidebar-item">
          <img className="channel-icon" src="https://via.placeholder.com/24" alt="Chai aur Code" />
          <span>Chai aur Code</span>
        </div>
        <div className="sidebar-item">
          <img className="channel-icon" src="https://via.placeholder.com/24" alt="Godfather Ap" />
          <span>Godfather Ap</span>
        </div>
        <div className="sidebar-item">
          <img className="channel-icon" src="https://via.placeholder.com/24" alt="TJD" />
          <span>TJD</span>
        </div>
      </div>
    </div>
  )
}


export default Sidebar