import { Avatar, Badge, Box, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Asthra from '../media/asthraLogo.png'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';


const Topbar = ({handleSidebar}) => {

    const [selectedOption, setSelectedOption] = useState('GPO');
    const [user, setUser] = useState('Kaveri hospital');
    const [userDropDown, setUserDropDown] = useState(false)
    const dropdownRef = useRef(null);
    const hospitalList = ['Kaveri Hospital, ABC Hospital', 'New Med Hospital'];
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const hospitalRef = useRef(null);


    useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropDown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);

    // GPO and NGPO
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (value) => {
    setSelectedOption(value);       // Save the selected value to state
    setAnchorEl(null);             // Close the dropdown
    };

    const handleClose = (value) => {
    setAnchorEl(null);
    };

    // Hospital name

    const [anchorHo, setAnchorHo] = useState(null);
    const openHo = Boolean(anchorHo);

    const handleClickHo = (event) => {
    setAnchorHo(event.currentTarget);
    };

    const handleMenuItemClickHo = (value) => {
    setUser(value);       // Save the selected value to state
    setAnchorEl(null);             // Close the dropdown
    };

    const handleCloseHo = (value) => {
    setAnchorHo(null);
    };

    const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
    };

    const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    };

  return (
    <Box className='topbar' sx={{
        width:'412px', height:'133px', top:'0px', left:'0px', position:'absolute', backgroundColor:'#FFFFFF'
    }}>
        <Avatar src={Asthra} sx={{width:'33px', height:'33px', top:'16px', left:'20px', position:'absolute'}}/>
        <Typography sx={{
            width:'96px', height:'26px', top:'25px', left:'72px', position:'absolute', fontFamily:'Poppins', fontWeight:'500',
            fontsize:'17px', lineHeight:'100%', display:'flex', alignItems:'center'
        }}>
            Dashboard
        </Typography>

        {/* GPO or NGPO */}
        <Box sx={{
        backgroundColor: '#000000',
        width: '69px',height: '31.36px',position: 'absolute',top: '21px',left: '233px',borderRadius: '6.27px',border: '0.53px solid #000000',
        display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
            <div>
            <Button onClick={handleClick} variant="contained" sx={{borderRadius: '6.27px',fontSize:'10.3px', gap:'3px',textTransform: 'none', width:'69px', height:'31.36px', backgroundColor:'#000000' }}>
                {selectedOption}<KeyboardArrowDownIcon />
            </Button>
            
            <Menu sx={{ width:'103px',left:'-1px', position:'absolute',
                '& .MuiMenu-list': {
                padding: '0px !important',
                width:'80px !important',
                },
            }} anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
                transformOrigin={{vertical: 'top',horizontal: 'left',}}>
                <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF',fontSize:'10.3px',
                '&:hover':{
                    color:'#000000'
                }
                }} onClick={()=>handleMenuItemClick('NGPO')}>NGPO</MenuItem>
                <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF',fontSize:'10.3px','&:hover':{
                    color:'#000000'
                }}} onClick={()=>handleMenuItemClick('GPO')}>GPO</MenuItem>
            </Menu>
            </div>
        </Box>

        <Box sx={{border: '0.55px solid rgba(0,0,0,0.35)', borderRadius: '6.5px',width:'38px', height:'31.36px', top:'21px', left:'311px', position:'absolute'}}>
            <IconButton sx={{width:'17.69px', height:'17.69px', top:'7.53px', left:'9.83px', position:'absolute'}}>
                <Badge badgeContent={5} color="success" sx={{
                '& .MuiBadge-badge': {
                        top:'4px',
                        fontSize: '6.04px',
                        // width:'12.45px',
                        height: '12.45px',
                        minWidth: '11.45px',
                        padding: '0 4px',
                    }
                }}>
                    <NotificationsActiveOutlinedIcon sx={{color:'#000000'}}/>
                </Badge>
            </IconButton>
        </Box>

        
        <Box onClick={() => setUserDropDown(prev => !prev)} sx={{ width: '34px', height: '34px',top:'21px', left:'358px',gap:'1.13px', position:'absolute',
         background:'#656565', borderRadius:'26px', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
            <LocalHospitalOutlinedIcon sx={{color:'#FFFFFF', width:'20px', height:'20px'}}/>
        </Box>

        {userDropDown && (
            <Box ref={dropdownRef}
            sx={{ width: '160px',height: '60px',borderRadius: '4.14px',backgroundColor: '#FFFFFF',border: '0.96px solid rgba(0, 0, 0, 0.45)',
                padding: '9.51px 5.19px',position: 'absolute',right: '15px',top: '70px',zIndex: 1000,}}>
            {/* User Info Row */}
                <Box
                    sx={{width:'130.52px',height:'17.82px', left:'7.78px',top:'9.51px',display: 'flex',alignItems: 'center',gap: '11.24px',position:'absolute'}}>
                    <LocalHospitalIcon sx={{ left:'0px',position:'absolute',color: '#DFDFDF', fontSize: '20px' }} />
                    <Typography
                    sx={{width:'110px',left:'28.52px',position:'absolute',fontFamily: 'Poppins',fontWeight: 500,fontSize: '14.4px',color: '#000000',}}>
                    {user}
                    </Typography>
                </Box>
            {/* Divider */}
                <Box
                    sx={{width: '144.43px',height: '0.86px',left:'7.78px', top:'38.92px', position:'absolute'
                    ,backgroundColor: '#1B2535',opacity:'60%'}}/>
            {/* Logout Row */}
                <Box
                    sx={{width:'99.46px', height:'17px', top:'51.99px', left:'11.24px',display: 'flex',alignItems: 'center',gap: '11.24px',position:'absolute'}}>
                    <LogoutIcon sx={{ left:'0px',position:'absolute',color: '#DFDFDF', fontSize: '18px' }} />
                    <Typography 
                    sx={{left:'25.65px',position:'absolute',fontFamily: 'Poppins',fontWeight: 500,fontSize: '14.4px',color: '#000000',}}>
                    Logout
                    </Typography>
                </Box>
            </Box>
        )}


        <Box sx={{width:'18px', height:'15.83px', top:'91px', left:'26px', position:'absolute'}} onClick={handleSidebar}>
            <DehazeIcon sx={{width:'100%', height:'100%',color:'#1C1B1F', fontSize:'inherit'}}/>
        </Box>
        
        {/* hospital */}
        <Box sx={{ width: '311px', height: '34px',position: 'absolute',top: '84px',left: '81px',borderRadius: '6.73px',
            border: '0.56px solid #00000059',backgroundColor: '#FFFFFF',}}>
            <div>
            <Button onClick={handleClickHo} variant='text' sx={{width:'311px', height:'34px', left:'0px', top:'0px', position:'absolute',
                color:'#000000', '&:hover': { background: 'none', boxShadow: 'none', textDecoration: 'none'}
            }}>
                <SearchIcon sx={{ width:'13.65px',height:'13.56px',color: '#000', left:'12.99px', top:'10.17px', position:'absolute' }} />
                <Typography sx={{width:'100px', height:'14px', top:'10px', left:'44px', fontFamily:'Poppins', fontWeight:'400',
                fontSize:'9.6px', lineHeight:'100%', position:'absolute',display: 'flex',alignItems: 'center',justifyContent:'center'
                }}>
                {user}
                </Typography>
                <KeyboardArrowDownIcon sx={{width:'13.56px',height:'13.56px',left:'290px', top:'10px',position:'absolute',color:'#000000'}}/>
            </Button>
            
            <Menu anchorEl={anchorHo} open={openHo} onClose={handleCloseHo} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                sx={{
                width: '313px important', top: '10px', 
                '& .MuiMenu-list': {
                    height:'140px',
                    width: '313px !important',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'center',
                },
                }}>
                <Box sx={{width:'302.5px', height:'31px', top:'7px', left:'4px', position:'absolute',borderRadius:'10px', border:'0.84px solid rgba(0,0,0,0.35)'}}>
                    <SearchIcon sx={{ width:'13.36px',height:'13.36px',color: '#000', top:'10px', left:'12px', position:'absolute' }} />
                    <textarea placeholder='Search...' onChange={handleSelect} style={{width:'75px',height:'15px',left:'39px', top:'8px', position:'absolute',
                    border: 'none', padding: 0, outline: 'none', resize: 'none' }} />
                </Box>
                <Box sx={{top:'50px',left:'4px',width:'302.5px',border:'1px solid rgba(0,0,0,0.45)',borderRadius:'10px',
                    position:'absolute', backgroundColor:'#FFFFFF'}}>
                    <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                    }} onClick={() => handleMenuItemClickHo('Kaveri Hospital')}>
                    <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{left:'50px',top:'4.5px',position:'absolute'}}>Kaveri Hospital</Typography></Box>
                    </MenuItem>
                    <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                    }} onClick={() => handleMenuItemClickHo('ABC Hospital')}>
                    <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{left:'50px',top:'4.5px',position:'absolute'}}>ABC Hospital</Typography></Box>
                    </MenuItem>

                    <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                    }} onClick={() => handleMenuItemClickHo('New Med Hospital')}>
                        <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{left:'50px',top:'4.5px',position:'absolute'}}>New Med Hospital</Typography></Box>
                    
                    </MenuItem>
                </Box>
                </Menu>
            </div>
            </Box>
    </Box>
  )
}

export default Topbar
