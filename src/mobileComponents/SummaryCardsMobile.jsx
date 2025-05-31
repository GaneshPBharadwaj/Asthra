import { Box, Typography } from '@mui/material'
import React, { useState } from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const SummaryCardsMobile = () => {

  let date = new Date();
  const[value, setValue] = useState(dayjs(date))


  return (
    <Box sx={{width:'372px', height:'560px', borderRadius:'10px', backgroundColor:'#FFFFFF'}}>
      <Typography sx={{
        width:'56.9px', height:'14px', top:'21.16px', left:'150px', fontFamily:'Poppins', fontWeight:'500', fontSize:'9.15px', lineHeight:'100%',
        display:'flex', alignItems:'center', position:'absolute'
      }}>
        Sort By Date
      </Typography>
      <Box sx={{width:'145px',height:'10px',top:'7px',left:'217.5px', position:'absolute' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={value} onChange={(newValue)=> setValue(newValue)} 
                           slotProps={{
                              layout:{
                                  sx:{
                                      zIndex:100,
                                      top:'10px',
                                      padding:'-2px',
                                  }
                              },
                              textField:{
                                  size:'small',
                                  sx:{
                                      width:'150px',
                                      '& .MuiInputBase-root': {
                                          height: '20.21px !important',
                                      },
                                      '& input': {
                                          padding: '0 8px !important',   // optional: control text padding
                                          fontSize: '13px !important',   // optional: control font size
                                      },
                                  }
                              }
                          }} 
                          >
            </DatePicker>
        </LocalizationProvider>
      </Box>
      {/* <Box className='calendar' sx={{
        width:'89.73px', height:'23.24px', left:'268.27px', top:'13px', borderRadius:'5.49px', border:'0.46px solid rgba(0,0,0,0.35)', position:'absolute'
      }}>
        <Box sx={{width:'101.99px', height:'28.21px',top:'62px', left:'112.05px', position:'absolute', zIndex:100}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={value} onChange={(newValue)=> setValue(newValue)} 
                 slotProps={{
                    layout:{
                        sx:{
                            zIndex:100,
                            top:'10px',
                            padding:'-2px',
                        }
                    },
                    textField:{
                        size:'small',
                        sx:{
                            width:'150px',
                            '& .MuiInputBase-root': {
                                height: '20.21px',
                            },
                            '& input': {
                                padding: '0 8px',   // optional: control text padding
                                fontSize: '13px',   // optional: control font size
                            },
                        }
                    }
                }} 
                >
                </DatePicker>
                </LocalizationProvider>
            </Box>
      </Box> */}
      <Box className="summary-card-1"
          sx={{width: '352px',height: '115px',top: '56px',left:'9px',borderRadius: '7.28px',border: '0.83px solid #D9D9D9',
            position: 'absolute',
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
                '& .icon > *': {
                  color: '#000000',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '95px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '28.39px',height: '27.24px',backgroundColor: 'orange',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6px',}}>
                  <Box className='icon' sx={{width:'28px',height:'14px',top:'6px', left:'0px',position:'absolute',}}>
                    <AddShoppingCartOutlinedIcon sx={{width:'14px',height:'14px',top:'0.75px', left:'7px',position:'absolute', color: '#FFFFFF' }} />
                  </Box>
              </Box>
              <Box className="price" sx={{width:'95px', height:'53.09px', top:'40.44px', gap:'5.09px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '23.28px',}}>
                  Total Orders
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '23.28px',}}>
                  300
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '93.13px', height: '93.13px', right: '0px',top:'18.94px', position: 'absolute' }}>
              <ShoppingCartOutlinedIcon sx={{ width: '66px', height: '67px', top:'7.28px', left:'13.64px', color: '#F5F5F5', position:'absolute'}}/>
            </Box>
          </Box>
        <Box className="summary-card-2"
          sx={{width: '352px',height: '115px',top: '181px',left:'9px',borderRadius: '7.28px',border: '0.8px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#EA232B',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
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
            <Box className="left-part" sx={{width: '127px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '24.67px',height: '24.67px',backgroundColor: '#EA232B',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6.17px',}}>
                    <PendingActionsIcon sx={{width:'14.98px',height:'14.98px',top:'5.08px', left:'4.58px',position:'absolute', color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'122.68px', height:'48.8px', top:'44.67px', gap:'4.8px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '21.93px',}}>
                  Approval Pending
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '21.93px',}}>
                  50
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '56px', height: '56px', right: '20.89px',top:'14.91px', position: 'absolute' }}>
              <AccessTimeOutlinedIcon sx={{ width: '66px', height: '67px', top:'14.91px', color: 'rgba(91, 90, 95, 0.06)', position:'absolute'}}/>
            </Box>
          </Box>
          <Box className="summary-card-3"
          sx={{width: '352px',height: '115px',top: '306px',left:'9px',borderRadius: '7.28px',border: '0.8px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#0077B6',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#FFFFFF',
                  opacity:'25%'
                },
                '& .icon-box > *': {
                  color: '#0077B6',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '131px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '25.01px',height: '26.48px',backgroundColor: '#0077B6',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6.62px',}}>
                    <MultipleStopOutlinedIcon sx={{width:'16.07px',height:'14.06px',top:'7.13px', left:'4.02px',position:'absolute', color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'120px', height:'53.15px', top:'42.48px', gap:'5.15px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '23.53px',}}>
                  Total Transaction
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '23.53px',}}>
                  250
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '86.78px', height: '86.78px', right: '16.29px',top:'18.75px', position: 'absolute' }}>
              <CurrencyRupeeIcon sx={{ width: '66.94px', height: '66.82px', top:'8.52px', left:'21.63px', color: 'rgba(91, 90, 95, 0.06)', position:'absolute'}}/>
            </Box>
          </Box>
          <Box className="summary-card-4"
          sx={{width: '352px',height: '115px',top: '431px',left:'9px',borderRadius: '7.28px',border: '0.8px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#FF7308',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#FFFFFF',
                  opacity:'25%'
                },
                '& .icon-box > *': {
                  color: '#FF7308',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '166px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '23.3px',height: '24.67px',backgroundColor: '#FF7308',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6.17px',}}>
                    <ThreePOutlinedIcon sx={{width:'14.23px',height:'14.23px',top:'6.61px', left:'4.49px',position:'absolute', color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'162px', height:'49px', top:'44px', gap:'4.8px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '21.93px',}}>
                  Total Request Received
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '21.93px',}}>
                  20
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '86.78px', height: '86.78px', right: '16.29px',top:'18.75px', position: 'absolute' }}>
              <ThreePOutlinedIcon sx={{ width: '66.94px', height: '66.82px', top:'8.52px', left:'21.63px', color: 'rgba(91, 90, 95, 0.06)', position:'absolute'}}/>
            </Box>
          </Box>
        </Box>
  )
}



export default SummaryCardsMobile
