import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import SummaryCards from './SummaryCards'
import OrderStatusCard from './OrderStatusCard'
import CreditCard from './CreditCard'
import AnalyticGraph from './AnalyticGraph'

const MainGrid = () => {
  return (
    <Box sx={{width:'1353px', height:'1043px', left:'0px', top:'0px',position:'absolute', }}>
      <Box sx={{backgroundColor: '#f5f5f5', width:'1352px', height:'1043px',left:'0px', position:'absolute'}}>
          <Navbar/>
      </Box>
      <Box sx={{width:'923px', height:'422px', top:'136px', left:'31px', position:'absolute'}}>
          <SummaryCards/>
      </Box>
      <Box sx={{width:'355px', height:'308px', top:'136px', left:'970px', position:'absolute'}}>
          <OrderStatusCard/>
      </Box>
      <Box sx={{width:'355px', height:'474px', top:'462px', left:'970px', position:'absolute'}}>
        <CreditCard/>
      </Box>
      <Box sx={{width:'922px', height:'406px', top:'575px', left:'32px', position:'absolute'}}>
        <AnalyticGraph/>
      </Box>
    </Box>
  )
}

export default MainGrid
