import { Box, Slider, Typography } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { useState } from 'react';

const CreditCard = () => {

    const [value, setValue] = useState(80);
    const max = 100;

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{width:'355px', height:'474px', top:'462px', left:'1115px', backgroundColor:'#FFFFFF', borderRadius:'8.74px'}}>
        <Box id="cerdit-card" sx={{
            width: '312px',height: '159px',borderRadius: '11.51px',
            background: 'linear-gradient(99.18deg, #841418 6.15%, #EA232B 55.99%, #F3941E 56.16%)',
            boxShadow: '0px 4px 4px 0px #00000040',
            position: 'absolute',top: '21px',left: '22px',color: 'white',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
            <Box sx={{width:'271.2px', height:'52.4px', top:'10.36px', left:'12.83px', position:'absolute'}}>
                <Box>
                    <Typography sx={{width:'149px', height:'25px', font:'Poppins', fontWeight:'600',fontSize:'16.96px', lineHeight:'100%'}}>
                        Maximum Credit
                    </Typography>
                </Box>
                <Box sx={{width:'81.69px', height:'32px',}}>
                <Typography sx={{ font:'Poppins', fontSize:'21.47px', fontWeight:'400', lineHeight:'100%'}}>
                    <CurrencyRupeeIcon sx={{width:'12.8px', height:'12.8px'}}/>30,000
                </Typography>
                </Box>
            </Box>
            <Box sx={{width:'84px', height:'39px', top:'108px', left:'29px', position:'absolute'}}>
                <Box>
                    <Typography sx={{width:'97.8px', height:'21px', left:'-14px', position:'absolute', fontFamily:'Poppins', fontWeight:'500',fontSize:'13.84px', lineHeight:'100%'}}>
                        Used Amount
                    </Typography>
                </Box>
                <Box sx={{width:'59.05px', height:'23px',top:'18px', left:'-11px', position:'absolute',display:'flex', flexDirection:'row'}}>
                    <Box>
                        <CurrencyRupeeIcon sx={{width:'3.5px', height:'5.24px', top:'8.48px', left:'2.01px', position:'absolute'}}/>
                    </Box>
                    <Box>
                        <Typography sx={{ left:'8.05px',width:'51px',height:'23px',fontFamily:'Poppins', fontSize:'15.27px', fontWeight:'400', lineHeight:'100%'
                            ,position:'absolute',display: 'flex',alignItems: 'center'
                        }}>
                            20,000
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography sx={{width:'112px', height:'21px', top:'108px', left:'188px', fontFamily:'Poppins', fontWeight:'500',
                    fontSize:'13.84px', position:'absolute', lineHeight:'100%',display: 'flex',alignItems: 'center', justifyContent:'center'
                }}>
                    Balance Credits
                </Typography>
                <Box sx={{width:'55.05px', height:'23px', top:'126px', left:'214px', position:'absolute'}}>
                    <Box sx={{width:'8.05px', height:'8.05px', top:'7.47px',position:'absolute'}}>
                        <CurrencyRupeeIcon sx={{width:'3.5px', height:'5.24px', top:'1.01px', left:'2.01px', position:'absolute'}}/>
                    </Box>
                    <Typography sx={{width:'47px', height:'23px', fontFamily:'Poppins', fontWeight:'400',
                    fontSize:'15.27px',lineHeight:'100%', left:'8.05px',position:'absolute',display: 'flex',alignItems: 'center'}}>
                        10,000
                    </Typography>

                </Box>
            </Box>
        </Box>
        <Box sx={{width:'311px', height:'53px', top:'202px', left:'23px', position:'absolute', borderRadius:'10.55px', border:'1px solid #000000'}}>
            <Box sx={{width:'282.59px', height:'30.59px', top:'12.05px', left:'17px', gap:'72px', position:'absolute'}}>
                <Box sx={{width:'147.59px', height:'30.59px', gap:'11px', position:'absolute',
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                
                    <Box sx={{width:'30.59px', height:'30.59px',borderRadius:'15.29px', background:'#000000',
                    display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <AccessTimeOutlinedIcon sx={{width:'16.88px', height:'16.88px', color:'#FFFFFF'}}/>
                    </Box>
                    <Typography sx={{width:'106px', height:'23px', fontFamily:'Poppins', fontWeight:'500', fontSize:'15.55px', lineHeight:'100%'
                        ,display: 'flex',alignItems: 'center'
                    }}>
                        Due Amount
                    </Typography>
                </Box>
                <Box sx={{width:'63px', height:'24px', right:'0px', top:'3.29px', position:'absolute',
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Box sx={{width:'10px', height:'10px', top:'7px', display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                        <CurrencyRupeeIcon sx={{width:'5px', height:'7.5px', top:'1.25px', left:'2.5px', color:'#000000'}}/>
                    </Box>
                    <Typography sx={{width:'53px', height:'24px', fontFamily:'Poppins', fontWeight:'400', fontSize:'15.71px', lineHeight:'100%',
                        display: 'flex',alignItems: 'center'
                    }}>
                        40,000
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'151.88px', height:'80px', top:'290px', left:'26px', position:'absolute'}}>
            <Box sx={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{width:'151.88px', height:'25px', fontFamily:'Poppins', fontWeight:'600', fontSize:'16.77px', lineHeight:'100%'}}>
                    Total Balance
                </Typography>
            </Box>
            <Box>
                <Typography sx={{width:'151.88px', height:'88px', fontFamily:'Poppins', fontWeight:'600', fontSize:'36.92px', lineHeight:'100%'}}>
                    1,00,000
                </Typography>
            </Box>
        </Box>
        <Box>
            <Box sx={{width:'284.78px', height:'12.66px', top:'398.42px', left:'30.22px', position:'absolute',}}>
                <Slider
                    aria-label="Always visible"
                    value={value}
                    onChange={handleChange}
                    max={max}
                    valueLabelDisplay="on"
                    color="#21A945"
                    sx={{
                    height: '12.66px',
                    borderRadius: '20.04px',
                    padding: 0,
                    border: '0px solid transparent',
                    '& .MuiSlider-thumb': {
                        width: '33.75px',
                        height: '33.75px',
                        backgroundColor: '#FFF',
                        border: '1.05px solid #F3F3F3',
                    },
                    '& .MuiSlider-rail': {
                        height: '12.66px',
                        borderRadius: '20.04px',
                        opacity: 0.3,
                        backgroundColor: '#A79F9F',
                    },
                    '& .MuiSlider-track': {
                        height: '12.66px',
                        borderRadius: '20.04px',
                        backgroundColor: '#21A945',
                        border: '0px solid #21A945',
                    },
                    }}
                />
            </Box>
            <Box sx={{width:'36.44px', height:'21px', left:'274.92px', top:'413.39px', position:'absolute'}}>
                <Typography sx={{width:'28px', height:'21px', top:'6.28px',position:'absolute',fontFamily:'Poppins', fontWeight:'400', fontSize:'14.15px', lineHeight:'100%',}}>
                    {max-value}%
                </Typography>

            </Box>

    </Box>
    </Box>
  )
}

export default CreditCard
