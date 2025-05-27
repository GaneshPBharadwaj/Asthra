import { Avatar, Badge, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import avatar from '../media/avatar.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('Kaveri Hospital');
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Box sx={{ display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
      <IconButton
        sx={{ backgroundColor: '#000',color: '#fff',width: '66px',height: '50px',borderRadius: '10px',top:'39px', left:'31px', position:'absolute'
        }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography sx={{ width:'146px', height:'39px', top:'44px', left:'135px', position:'absolute',
        fontFamily: 'Poppins', fontSize: '25.93px', color: '#000', fontWeight:'500'}}>
        Dashboard
      </Typography>
      <Box sx={{
      backgroundColor: '#000000',
      width: '110px',height: '50px',position: 'absolute',top: '39px',left: '759px',borderRadius: '10px',border: '0.84px solid #ffffff',
      display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        <FormControl fullWidth size="small" sx={{ backgroundColor: '#000000', borderRadius: '6px', color: '#ffffff',}}>
            <Select defaultValue="GPO" id="demo-simple-select" sx={{
                height: '100%',
                color: '#ffffff',
                '& .MuiSvgIcon-root': {
                color: '#ffffff',
                }}}
            >
            <MenuItem value="GPO">GPO</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: '252px', height: '50.4px',position: 'absolute',top: '39px',left: '897px',borderRadius: '10px',border: '0.84px solid #00000059',
        display: 'flex',alignItems: 'center',justifyContent: 'space-between',gap: '8px',backgroundColor: '#fff',}}>
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
      </Box>
      <IconButton sx={{ border: '1px solid #ccc', borderRadius: '8px',
          width:'58px', height:'50px', top:'38px', left:'1175px', position:'absolute'
        }}>
          <Badge badgeContent={5} color="success">
              <NotificationsNoneIcon />
          </Badge>
      </IconButton>
                {/* Avatar */}
      <Avatar src={avatar} sx={{ width: '52px', height: '52px',
          top:'38px', left:'1260px',gap:'1.13px', position:'absolute',}}
      />
    </Box>
  );
};

export default Navbar;
