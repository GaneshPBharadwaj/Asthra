import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import SummaryCards from './SummaryCards'
import OrderStatusCard from './OrderStatusCard'

const MainGrid = () => {
  return (
    <>
    <Box sx={{backgroundColor: '#f5f5f5', width:'1352px', height:'1043px', position:'absolute', left:'145px'}}>
        <Navbar/>
    </Box>
    <Box sx={{width:'923px', height:'422px', top:'136px', left:'176px', position:'absolute'}}>
        <SummaryCards/>
    </Box>
    <Box sx={{width:'355px', height:'308px', top:'136px', left:'1115px', position:'absolute'}}>
        <OrderStatusCard/>
    </Box>
    </>
  )
}

export default MainGrid
