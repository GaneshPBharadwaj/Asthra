import { Box } from '@mui/material'
import React from 'react'
import SummaryCardsMobile from './SummaryCardsMobile'
import AnalyticGraphMobile from './AnalyticGraphMobile'
import OrderStatusMobile from './OrderStatusMobile'
import CreditCardMobile from './CreditCardMobile'

const MainGridMobile = () => {
  return (
    <Box sx={{width:'412px', height:'1802px', top:'133px', left:'0px', position:'absolute', backgroundColor:'#EBEBE9'}}>
        <Box sx={{left:'20px', top:'10px', position:'absolute'}}>
            <SummaryCardsMobile/>
        </Box>
        <Box sx={{left:'20px', top:'582px', position:'absolute'}}>
            <AnalyticGraphMobile/>
        </Box>
        <Box sx={{left:'20px', top:'968px', position:'absolute'}}>
            <OrderStatusMobile/>
        </Box>
        <Box sx={{left:'20px', bottom:'18px', position:'absolute'}}>
            <CreditCardMobile/>
        </Box>
    </Box>
  )
}

export default MainGridMobile
