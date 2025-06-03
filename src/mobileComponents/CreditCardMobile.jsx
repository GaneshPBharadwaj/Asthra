import { Box, Slider, Typography } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Opacity } from '@mui/icons-material';

const CreditCardMobile = () => {

    const [value, setValue] = useState(60);
    const max = 100;
  
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: '12.66px',
        borderRadius: '20.04px',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#A79F9F',
            Opacity:'68%'
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: '20.04px',
            backgroundColor: '#21A945',
        },
    }));

  return (
    <Box sx={{
        width:'372px', height:'476px', borderRadius:'10px', backgroundColor:'#FFFFFF'
    }}>
      <Box id="cerdit-card" sx={{
            width: '326.94px',height: '166.61px',borderRadius: '12.06px',
            background: 'linear-gradient(99.18deg, #841418 6.15%, #EA232B 55.99%, #F3941E 56.16%)',
            boxShadow: '0px 4.19px 4.19px 0px #00000040',
            position: 'absolute',top: '20px',left: '23.05px',color: 'white',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
            <Box sx={{width:'284.19px', height:'56.18px', top:'10.85px', left:'13.44px', position:'absolute'}}>
                <Box>
                    <Typography sx={{width:'156.14px', height:'27px', font:'Poppins', fontWeight:'600',fontSize:'17.77px', lineHeight:'100%'}}>
                        Maximum Credit
                    </Typography>
                </Box>
                <Box sx={{width:'85.61px', height:'34px', top:'22.18px', left:'0px', position:'absolute'}}>
                    <Box sx={{width:'13.41px', height:'13.41px', top:'10.29px', left:'0px', position:'absolute', display:'flex', alignItems:'center'}}>
                        <CurrencyRupeeIcon sx={{width:'13.41px', height:'13.41px'}}/>
                    </Box>
                    <Box sx={{width:'75px', height:'34px', top:'0px', left:'11.41px', position:'absolute', display:'flex', alignItems:'center'}}>
                        <Typography sx={{ font:'Poppins', fontSize:'22.5px', fontWeight:'400', lineHeight:'100%'}}>
                            30,000
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{width:'88.02px', height:'40.87px', top:'113.17px', left:'30.39px', position:'absolute'}}>
                <Box>
                    <Typography sx={{width:'102.49px', height:'22px', left:'-14.67px', position:'absolute', fontFamily:'Poppins', fontWeight:'500',fontSize:'14.5px', lineHeight:'100%'}}>
                        Used Amount
                    </Typography>
                </Box>
                <Box sx={{width:'61.44px', height:'24px',top:'18.86px', left:'-11.53px', position:'absolute',display:'flex', flexDirection:'row'}}>
                    <Box>
                        <CurrencyRupeeIcon sx={{width:'12px', height:'12px', top:'5.3px', left:'0px', position:'absolute'}}/>
                    </Box>
                    <Box>
                        <Typography sx={{ left:'11px',width:'53px',height:'24px',fontFamily:'Poppins', fontSize:'16px', fontWeight:'400', lineHeight:'100%'
                            ,position:'absolute',display: 'flex',alignItems: 'center'
                        }}>
                            20,000
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography sx={{width:'118px', height:'22.01px', top:'113.17px', left:'197px', fontFamily:'Poppins', fontWeight:'500',
                    fontSize:'14.5px', position:'absolute', lineHeight:'100%',display: 'flex',alignItems: 'center', justifyContent:'center'
                }}>
                    Balance Credits
                </Typography>
                <Box sx={{width:'57.4px', height:'24px', top:'132.03px', left:'224.25px', position:'absolute'}}>
                    <Box sx={{width:'8.44px', height:'8.44px', top:'5.3px',position:'absolute'}}>
                        <CurrencyRupeeIcon sx={{width:'12px', height:'12px', top:'0px', left:'1.01px', position:'absolute'}}/>
                    </Box>
                    <Typography sx={{width:'49px', height:'24px', fontFamily:'Poppins', fontWeight:'400',
                    fontSize:'16px',lineHeight:'100%', left:'11.44px',position:'absolute',display: 'flex',alignItems: 'center'}}>
                        10,000
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'325.89px', height:'55.54px', top:'209.67px', left:'24.1px', position:'absolute', borderRadius:'11.05px', border:'1.05px solid #000000'}}>
            <Box sx={{width:'295.58px', height:'32.05px', top:'12.63px', left:'17.81px', gap:'75.45px', position:'absolute'}}>
                <Box sx={{width:'154.65px', height:'32.05px', gap:'11.53px', position:'absolute',
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                
                    <Box sx={{width:'32.05px', height:'32.05px',borderRadius:'16.03px', background:'#000000',
                    display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <PendingActionsIcon sx={{width:'17.68px', height:'17.68px', color:'#FFFFFF'}}/>
                    </Box>
                    <Typography sx={{width:'111.08px', height:'24px', fontFamily:'Poppins', fontWeight:'500', fontSize:'16.29px', lineHeight:'100%'
                        ,display: 'flex',alignItems: 'center'
                    }}>
                        Due Amount
                    </Typography>
                </Box>
                <Box sx={{width:'65.48px', height:'25px', right:'0px', top:'3.53px', position:'absolute',
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Box sx={{width:'10.48px', height:'10.48px', top:'7.26px', display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <CurrencyRupeeIcon sx={{width:'10.48px', height:'10.48px',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{width:'55px', height:'25px', fontFamily:'Poppins', fontWeight:'400', fontSize:'16.46px', lineHeight:'100%',
                        display: 'flex',alignItems: 'center'
                    }}>
                        40,000
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'159.15px', height:'71px', top:'301px', left:'30.25px', position:'absolute'}}>
          <Box sx={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
              <Typography sx={{width:'159.15px', height:'26px', fontFamily:'Poppins', fontWeight:'600', fontSize:'17.57px', lineHeight:'100%'}}>
                  Total Balance
              </Typography>
          </Box>
          <Box>
              <Typography sx={{width:'159.15px', height:'45px', fontFamily:'Poppins', fontWeight:'600', fontSize:'30px', lineHeight:'100%'}}>
                  1,00,000
              </Typography>
          </Box>
        </Box>
        <Box sx={{width:'292.42px', height:'13.26px', top:'394.12px', left:'30px', position:'absolute',}}>
            <BorderLinearProgress variant="determinate" value={value} />
        </Box>
        <Box sx={{width:'37.84px', height:'22px', left:'26px', top:'412.12px', position:'absolute'}}>
            <Typography sx={{width:'29px', height:'22px', left:'8.84px',position:'absolute',fontFamily:'Poppins', fontWeight:'400', fontSize:'14.83px', lineHeight:'100%',}}>
                {value}%
            </Typography>
        </Box>
        <Box sx={{width:'38.84px', height:'22px', left:'293px', top:'412.12px', position:'absolute'}}>
            <Typography sx={{width:'30px', height:'22px', left:'8.84px',position:'absolute',fontFamily:'Poppins', fontWeight:'400', fontSize:'14.83px', lineHeight:'100%',}}>
                {max-value}%
            </Typography>
        </Box>

    </Box>
  )
}

export default CreditCardMobile
