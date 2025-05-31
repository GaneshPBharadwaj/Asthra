import { Box } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainGrid from '../components/MainGrid'
import ExpandSidebar from '../components/ExpandSidebar'

const Dashboard = () => {

  const [isExpanded, setIsExpanded] = useState(true)
  // true - not expand, false - expand

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Box>
      { isExpanded ? (
        <Box sx={{width:'145px', height:'1043px', left:'0px', position:'absolute'}}>
        <Sidebar handleToggle={handleToggle}/>
        </Box>
      ) : (
        <Box sx={{width:'328px', height:'1043px', left:'0px', position:'absolute'}}>
        <ExpandSidebar handleToggle={handleToggle}/>
      </Box>
      )
      }      
      <Box sx={{width:'1352px', height:'1043px', left: isExpanded ? '145px' : '328px', position:'absolute'}}>
        <MainGrid/>
      </Box>
    </Box>
  )
}

export default Dashboard
