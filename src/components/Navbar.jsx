import { Avatar, Badge, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import { Menu, Button } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';


const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('GPO');
  const [user, setUser] = useState('Kaveri hospital');
  const [userDropDown, setUserDropDown] = useState(false)
  const hospitalList = ['Kaveri Hospital, ABC Hospital', 'New Med Hospital'];
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
    <Box sx={{ display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'center', backgroundColor:'#FFFFFF'}}>
      <IconButton
        sx={{ backgroundColor: '#000',color: '#fff',width: '66px',height: '50px',borderRadius: '10px',top:'39px', left:'31px', position:'absolute'
        }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography sx={{ width:'146px', height:'39px', top:'44px', left:'135px', position:'absolute',
        fontFamily: 'Poppins', fontSize: '25.93px', color: '#000', fontWeight:'500'}}>
        Dashboard
      </Typography>

      {/* GPO or NGPO */}
      <Box sx={{
      backgroundColor: '#000000',
      width: '80px',height: '50px',position: 'absolute',top: '39px',left: '759px',borderRadius: '10px',border: '0.84px solid #ffffff',
      display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        <div>
          <Button onClick={handleClick} variant="contained" sx={{borderRadius: '10px', gap:'3px',textTransform: 'none', width:'80px', height:'50px', backgroundColor:'#000000' }}>
            {selectedOption}<KeyboardArrowDownIcon />
          </Button>
          
          <Menu sx={{ width:'120px',top:'-11px',
            '& .MuiMenu-list': {
              padding: '0px !important',
              width:'80px',
              
            },
          }} anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
            transformOrigin={{vertical: 'top',horizontal: 'left',}}
          >
            <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF',
              '&:hover':{
                  color:'#000000'
              }
            }} onClick={()=>handleMenuItemClick('NGPO')}>NGPO</MenuItem>
            <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF','&:hover':{
                  color:'#000000'
              }}} onClick={()=>handleMenuItemClick('GPO')}>GPO</MenuItem>
          </Menu>
        </div>
      </Box>

      {/* hospital name */}

      <Box sx={{ width: '252px', height: '50.4px',position: 'absolute',top: '39px',left: '897px',borderRadius: '10px',
        border: '0.84px solid #00000059',gap: '8.4px',backgroundColor: 'transparent',}}>
        <div>
          <Button onClick={handleClickHo} variant='text' sx={{width:'214px', height:'20.16px', left:'19.32px', top:'15.12px', position:'absolute',
            color:'#000000', '&:hover': { background: 'none', boxShadow: 'none', textDecoration: 'none'}
          }}>
            <SearchIcon sx={{ width:'20.16px',height:'20.16px',color: '#000', left:'0px', position:'absolute' }} />
            <Typography sx={{width:'106px', height:'21px', top:'0.88px', left:'36.68px', fontFamily:'Poppins', fontWeight:'400',
              fontSize:'12px', lineHeight:'100%', position:'absolute',display: 'flex',alignItems: 'center',justifyContent:'center'
            }}>
              {user}
            </Typography>
            <KeyboardArrowDownIcon sx={{width:'20.16px',height:'20.16px',left:'193.16px',position:'absolute',color:'#000000'}}/>
          </Button>
          
          <Menu anchorEl={anchorHo} open={openHo} onClose={handleCloseHo} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{
              width: '252px', top: '30px', 
              '& .MuiMenu-list': {
                height:'140px',
                width: '252px',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
              },
            }}>
              <Box sx={{width:'210px', height:'34px', top:'7px', left:'4px', position:'absolute',borderRadius:'10px', border:'0.84px solid rgba(0,0,0,0.35)'}}>
                <SearchIcon sx={{ width:'20.16px',height:'20.16px',color: '#000', top:'6px', left:'11px', position:'absolute' }} />
                <textarea placeholder='Search...' onChange={handleSelect} style={{height:'18px',left:'42px', top:'8px', position:'absolute',
                   border: 'none', padding: 0, outline: 'none', resize: 'none' }} />
              </Box>
              <Box sx={{top:'50px',left:'4px',width:'210px',border:'1px solid rgba(0,0,0,0.45)',borderRadius:'10px',
                 position:'absolute', backgroundColor:'#FFFFFF'}}>
                <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                  }} onClick={() => handleMenuItemClickHo('Kaveri Hospital')}>
                   <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{left:'50px',top:'3.5px',position:'absolute'}}>Kaveri Hospital</Typography></Box>
                </MenuItem>
                <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                  }} onClick={() => handleMenuItemClickHo('ABC Hospital')}>
                   <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{left:'50px',top:'3.5px',position:'absolute'}}>ABC Hospital</Typography></Box>
                </MenuItem>
                <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                  }} onClick={() => handleMenuItemClickHo('New Med Hospital')}>
                   <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                    </Box>
                    <Typography sx={{left:'50px',top:'3.5px',position:'absolute'}}>New Med Hospital</Typography></Box>
                </MenuItem>
              </Box>
            </Menu>
          </div>
        </Box>
        
      <IconButton sx={{ border: '1px solid #ccc', borderRadius: '8px',
          width:'58px', height:'50px', top:'38px', left:'1175px', position:'absolute'
        }}>
          <Badge badgeContent={5} color="success">
              <NotificationsIcon />
          </Badge>
      </IconButton>
                {/* Avatar */}
      {/* <Avatar src={avatar} onClick={() => setUserDropDown(prev => !prev)} sx={{ width: '52px', height: '52px',
          top:'38px', left:'1260px',gap:'1.13px', position:'absolute',}}
      /> */}

      <Box onClick={() => setUserDropDown(prev => !prev)} sx={{ width: '52px', height: '52px',top:'38px', left:'1260px',gap:'1.13px', position:'absolute',
         background:'#FFFFFF', borderRadius:'26px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <LocalHospitalOutlinedIcon sx={{color:'#656565', width:'32px', height:'32px'}}/>
      </Box>
       {userDropDown && (
        <Box
          sx={{ width: '185px',height: '68px',borderRadius: '4.79px',backgroundColor: '#FFFFFF',border: '0.96px solid rgba(0, 0, 0, 0.45)',
            padding: '11px 6px 11px 6px',position: 'absolute',right: '40px',top: '100px',zIndex: 1000,}}>
          {/* User Info Row */}
          <Box
            sx={{width:'149.98px',height:'20px', left:'9px',top:'11px',display: 'flex',alignItems: 'center',gap: '13px',position:'absolute'}}>
            <LocalHospitalIcon sx={{ left:'0px',position:'absolute',color: '#DFDFDF', fontSize: '20px' }} />
            <Typography
              sx={{left:'32.98px',position:'absolute',fontFamily: 'Poppins',fontWeight: 500,fontSize: '15px',color: '#000000',}}>
              {user}
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{width: '167px',height: '1px',left:'9px', top:'45px', position:'absolute'
            ,backgroundColor: '#1B2535',opacity: 0.6,}}/>
          {/* Logout Row */}
          <Box
            sx={{width:'115px', height:'20px', top:'60.11px', left:'13px',display: 'flex',alignItems: 'center',gap: '13px',position:'absolute'}}>
            <LogoutIcon sx={{ left:'0px',position:'absolute',color: '#DFDFDF', fontSize: '18px' }} />
            <Typography 
            sx={{left:'29.65px',position:'absolute',fontFamily: 'Poppins',fontWeight: 500,fontSize: '15px',color: '#000000',}}>
              Logout
            </Typography>
          </Box>
        </Box>
      )}

    </Box>
  );
};

export default Navbar;
