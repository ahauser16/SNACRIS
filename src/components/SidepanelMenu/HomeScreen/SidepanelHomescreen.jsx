import React from 'react'
import './SidepanelHomescreen.css'
import SidepanelSubnav from './SidepanelSubnav/SidepanelSubnav'

const SidepanelHomescreen = () => {
  return (
    <div className="sidepanel-homescreen--container">
      <SidepanelSubnav />
      <h2>Sidepanel Homescreen</h2>
    </div>
  )
}

export default SidepanelHomescreen