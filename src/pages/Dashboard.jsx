import { Box } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainGrid from '../components/MainGrid'

const Dashboard = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Box>
        <Sidebar />
        <MainGrid/>
    </Box>
  )
}

export default Dashboard
