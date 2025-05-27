import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import MainGrid from '../components/MainGrid'

const Dashboard = () => {
  return (
    <Box sx={{display: 'flex', flexDirection:'row', height:'1043px', width:'1497px'}}>
        <Sidebar/>
        <MainGrid/>
    </Box>
  )
}

export default Dashboard
