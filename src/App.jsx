import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar/Sidebar'
import Categories from './components/categories/Categories'
import VideoGrid from './components/videoGrid/VideoGrid'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <Sidebar isOpen={sidebarOpen} />
        <div className="content-area">
          <Categories />
          <VideoGrid />
        </div>
      </div>
    </div>
  )
}

export default App
