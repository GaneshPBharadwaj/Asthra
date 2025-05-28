import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react';
import { CalendarToday } from '@mui/icons-material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarModal from './CalendarModal';

const SummaryCards = () => {

  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <Box sx={{
      width:'923px', height:'422px', top:'136px', left:'176px', borderRadius:'10px', backgroundColor:'#FFFFFF',
    }}>
      <Box>
        <Typography sx={{ width:'87px', height:'21px', top:'28px', left:'663px', position:'absolute',
          fontFamily: 'Poppins', fontSize: '13.18px', color: '#000', fontWeight:'500'}}>
          Sort by Date
        </Typography>
        <Button onClick={() => setCalendarOpen(prev => !prev)} variant='outlined'startIcon={<CalendarToday/>} sx={{
          position:'absolute', color:'#000', width:'139px', height:'36px', top:'20px', left:'761px', borderRadius:'8.51px', border:'0.71px solid #000000',}}>
          20-05-2025
        </Button>
        { calendarOpen && (
          <Box className="calendar" sx={{width:'334px', height:'300px', borderRadius:'8px', border:'1px', padding:'24px', gap:'24px', backgroundColor:'#FFFFFF',
              borderColor:'#D9D9D9',boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)', right:'20px', position:'absolute', top:'60px',
              zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center'

          }}>
              <Box>
              <CalendarModal/>
              </Box>
          </Box>)
          }
      </Box>
      <Box>
        <Box className="summary-card-1"
          sx={{width: '419.93px',height: '151.48px',top: '73px',left: '17px',borderRadius: '8.77px',border: '1px solid #D9D9D9',
            position: 'absolute',boxSizing: 'border-box',
              '&:hover': {
                backgroundColor: '#F3941E',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#E9E6E6',
                  opacity:'14%'
                },
                '& .icon-box > *': {
                  color: '#000000',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
          <Box className="inside-summary" sx={{width:'389.25px', height:'120.8px', top:'15.34px',left:'19.17px', position:'absolute',}}>
            <Box className="left-part" sx={{width: '114.06px',height: '113.46px',position:'absolute',
              display:'flex', flexDirection:'column', alignItems:'flex-start'
            }}>
              <Box className="icon-box" sx={{width: '33.56px',height: '33.56px',backgroundColor: 'orange',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '7.9px',}}>
              <AddShoppingCartOutlinedIcon sx={{ color: '#FFFFFF' }} />
            </Box>
              <Box className="price" sx={{width:'154px', height:'64.14px', top:'48.26px', gap:'6.14px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                  Total Orders
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                  300
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '112.31px', height: '112.31px', top: '7.72px', left: '279.83px', position: 'absolute' }}>
              <ShoppingCartOutlinedIcon sx={{ width: '93.5px', height: '93.59px', color: '#D9D9D9',}}/>
            </Box>
          </Box>
        </Box>
        <Box className="summary-card-2"
          sx={{width: '419.93px',height: '151.48px',top: '238.86px',left: '17px',borderRadius: '8.77px',border: '1px solid #D9D9D9',
            position: 'absolute',boxSizing: 'border-box',
            '&:hover': {
                backgroundColor: '#0077B6',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#FFFFFF',
                  opacity:'22%'
                },
                '& .icon-box > *': {
                  color: '#0077B6',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
          <Box className="inside-summary" sx={{width:'383.5px', height:'119.84px', top:'13.42px', left:'', position:'absolute',}}>
            <Box className="left-part" sx={{width: '156.17px',height: '111.92px',top: '3.96px',left: '19.17px', position:'absolute',
              display:'flex', flexDirection:'column', alignItems:'flex-start'
            }}>
              <Box className="icon-box" sx={{width: '29.83px',height: '31.59px',backgroundColor: '#0077B6',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '7.9px',}}>
                <MultipleStopOutlinedIcon sx={{ color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'154px', height:'64.14px', top:'48.26px', gap:'6.14px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                  Total Transaction
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                  250
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '103.53px', height: '103.53px', top: '7.72px', left: '279.83px', position: 'absolute' }}>
              <CurrencyRupeeIcon 
                sx={{ width: '95.3px', height: '95.3px', position: 'absolute', top: '7px', left: '25.88px', color: '#D9D9D9' }} />
            </Box>
          </Box>
        </Box>
        <Box className="summary-card-3"
          sx={{width: '450.61px',height: '151.48px',top: '73px',left: '449.49px',borderRadius: '8.77px',border: '0.96px solid #D9D9D9',
            position: 'absolute',boxSizing: 'border-box',
            '&:hover': {
                backgroundColor: '#EA232B',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part': {
                  color: '#FFFFFF',
                  opacity:'25%'
                },
                '& .icon-box > *': {
                  color: '#EA232B',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
          <Box className="inside-summary" sx={{width:'421.11px', height:'127.47px', top:'14.2px',left:'19.07px', position:'absolute',}}>
            <Box className="left-part" sx={{width: '157.05px',height: '112.4px',gap:'16.67',position:'absolute',
              display:'flex', flexDirection:'column', alignItems:'flex-start'
            }}>
              <Box className="icon-box" sx={{width: '31.59px',height: '31.59px',backgroundColor: '#EA232B',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '20%',}}>
              <PendingActionsIcon sx={{ color: '#FFFFFF' }} />
            </Box>
              <Box className="price" sx={{width:'154px', height:'64.14px', top:'48.26px', gap:'6.14px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                  Approval pending
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                  50
                </Typography>
              </Box>
            </Box>
            {/* <Box className="right-part" sx={{ width: '131.61px', height: '118.45px', right:'0px', position:'absolute'}}> */}
              <AccessTimeOutlinedIcon className="right-part" sx={{ width: '106.5px', height: '106.5px', top:'10.48px', left:'286.03px', position:'absolute', color: '#D9D9D9',}}/>
            {/* </Box> */}
          </Box>
        </Box>
        <Box className="summary-card-4"
          sx={{width: '450.61px',height: '150.52px',top: '238.86px',left: '449.39px',borderRadius: '8.77px',border: '1px solid #D9D9D9',
            position: 'absolute',boxSizing: 'border-box',
            '&:hover': {
                backgroundColor: '#FF7308',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#F5F5F5',
                  opacity:'27%'
                },
                '& .icon-box > *': {
                  color: '#FF7308',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
          <Box className="inside-summary" sx={{width:'423.76px', height:'120.8px', top:'13.42px',left:'18.22px', position:'absolute',}}>
            <Box className="left-part" sx={{width: '207.94px',height: '112.8px',top: '4px', position:'absolute',
              display:'flex', flexDirection:'column', alignItems:'flex-start'
            }}>
              <Box className="icon-box" sx={{backgroundColor:'#FF7308', width:'29.83px', height:'31.59px',top:'4px', borderRadius:'7.9px'}}>
                <ThreePOutlinedIcon sx={{ color: '#FFF', width:'18.22px', height:'18.22px',top:'8.46px',left:'5.75px',position:'absolute', borderRadius:'7.9px' }} />
              </Box>
              <Box className="price" sx={{width:'207.94px', height:'64.14px', top:'49.13px', gap:'6.14px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                  Total Request Received
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                  20
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '95.87px', height: '95.87px', top: '19.17px', left: '301.04px', position: 'absolute' }}>
              <ThreePOutlinedIcon 
                sx={{ width: '79.9px', height: '79.9px', position: 'absolute', top: '7.99px', left: '7.99px', color: '#D9D9D9' }} />
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default SummaryCards
