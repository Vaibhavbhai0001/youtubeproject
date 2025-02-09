import React from 'react'
import './Categories.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function Categories() {
  const categories = [
    'All', 'Disha Vakani', 'Gaming', 'JavaScript', 'Tents', 
    'Strategies', 'Podcasts', 'Music', 'News', 'Mixes', 
    'Algorithms', 'Live', 'Thoughts', 'Telenovelas'
  ]

  return (
    <div className="categories-container">
      <div className="scroll-button left">
        <ArrowBackIosNewIcon />
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`category-chip ${index === 0 ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="scroll-button right">
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default Categories 