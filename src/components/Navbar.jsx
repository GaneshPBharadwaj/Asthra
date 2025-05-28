import { Avatar, Badge, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../media/avatar.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import { Menu, Button } from '@mui/material';


const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('GPO');
  const [user, setUser] = useState('Kaveri hospital');
  const [userDropDown, setUserDropDown] = useState(false)

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
      <Box sx={{ width: '252px', height: '50.4px',position: 'absolute',top: '39px',left: '897px',borderRadius: '10px',border: '0.84px solid #00000059',
        display: 'flex',alignItems: 'center',justifyContent: 'space-between',gap: '8px',backgroundColor: 'transparent',}}>
          <Box sx={{width:'214px', height:'20.16px', top:'15.12px', left:'19.32px', position:'absolute',
          display: 'flex',alignItems: 'center', display: 'flex',alignItems: 'center'}}>
            <SearchIcon sx={{ width:'20.16px',height:'20.16px',color: '#000' }} />
            <Typography sx={{width:'106px', height:'21px', top:'0.88px', left:'36.68px', fontFamily:'Poppins', fontWeight:'400',
              fontSize:'14px', lineHeight:'100%', position:'absolute'
            }}>
              Kaveri Hospital
            </Typography>
            <KeyboardArrowDownIcon sx={{width:'20.16px',height:'20.16px',left:'193.16px',position:'absolute',color:'#000000'}}/>           
          </Box>
      </Box>



      {/* <Box sx={{ width: '252px', height: '50.4px',position: 'absolute',top: '39px',left: '897px',borderRadius: '10px',border: '0.84px solid #00000059',
        display: 'flex',alignItems: 'center',justifyContent: 'space-between',gap: '8px',backgroundColor: 'transparent',}}>
          <Box sx={{width:'214px', height:'20.16px', top:'15.12px', left:'19.32px', position:'absolute',
          display: 'flex',alignItems: 'center',}}>
              <SearchIcon sx={{ width:'20.16px',height:'20.16px',color: '#000' }} />
              <select
                value={selectedOption}
                onChange={handleChange}
                style={{
                  width: '106px',
                  height:'21px',
                  top:'0.88px',
                  left:'36.68px',
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  fontSize: '14p.28x',
                  position: 'absolute',
                  border: 'none',              
                  outline: 'none',             
                  background: 'transparent',   
                  appearance: 'none',
                }}
              >
                <option value="Kaveri Hospital">Kaveri Hospital</option>
                <option value="Option2">Option 2</option>
                <option value="Option3">Option 3</option>
              </select> 
              <KeyboardArrowDownIcon sx={{width:'20.16px',height:'20.16px',left:'193.16px',position:'absolute',color:'#000000'}}/>           
          </Box>
      </Box> */}
      <IconButton sx={{ border: '1px solid #ccc', borderRadius: '8px',
          width:'58px', height:'50px', top:'38px', left:'1175px', position:'absolute'
        }}>
          <Badge badgeContent={5} color="success">
              <NotificationsIcon />
          </Badge>
      </IconButton>
                {/* Avatar */}
      <Avatar src={avatar} onClick={() => setUserDropDown(prev => !prev)} sx={{ width: '52px', height: '52px',
          top:'38px', left:'1260px',gap:'1.13px', position:'absolute',}}
      />
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
