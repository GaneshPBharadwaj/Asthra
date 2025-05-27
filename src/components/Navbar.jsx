import { Avatar, Badge, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
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
        <Box sx={{ width: '252px', height: '50.4px',position: 'absolute',top: '39px',left: '896px',borderRadius: '10px',border: '0.84px solid #00000059',
                display: 'flex',alignItems: 'center',justifyContent: 'space-between',gap: '8px',backgroundColor: '#fff',}}>
            <SearchIcon sx={{ color: '#000' }} />
            <FormControl fullWidth size="small" sx={{ backgroundColor: '#fff' }}>
                <Select defaultValue="GPO" id="demo-simple-select" disableUnderline
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    },
                    padding: '0',
                }}
                >
                <MenuItem value="GPO">GPO</MenuItem>
                <MenuItem value="Option2">Option 2</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <IconButton sx={{ border: '1px solid #ccc', borderRadius: '8px',
                width:'58px', height:'50px', top:'38px', left:'1175px', position:'absolute'
             }}>
                <Badge badgeContent={5} color="success">
                    <NotificationsNoneIcon />
                </Badge>
            </IconButton>
                {/* Avatar */}
            <Avatar src="/static/images/avatar/1.jpg" sx={{ width: '52px', height: '52px',
                top:'38px', left:'1260px',gap:'1.13px', position:'absolute',
             }} />
    </Box>
  );
};

export default Navbar;
