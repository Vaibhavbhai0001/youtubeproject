import React from 'react'
import './VideoGrid.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

function VideoGrid() {
  const videos = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/sample1/maxresdefault.jpg",
      title: "I Spent 100 Hours Inside The Pyramids!",
      channel: "MrBeast",
      verified: true,
      views: "16M",
      timestamp: "6 hours ago",
      duration: "21:43",
      avatar: "https://yt3.ggpht.com/sample1"
    },
    // Add more video objects here
  ]

  return (
    <div className="video-grid">
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <div className="thumbnail">
            <img src={video.thumbnail} alt={video.title} />
            <span className="duration">{video.duration}</span>
          </div>
          <div className="video-info">
            <img className="channel-avatar" src={video.avatar} alt={video.channel} />
            <div className="video-details">
              <h3 className="video-title">{video.title}</h3>
              <div className="channel-info">
                <p className="channel-name">
                  {video.channel}
                  {video.verified && <CheckCircleIcon className="verified-badge" />}
                </p>
                <p className="video-stats">
                  {video.views} views • {video.timestamp}
                </p>
              </div>
            </div>
            <button className="more-options">
              <MoreVertIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoGrid 