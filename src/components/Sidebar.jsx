import { Avatar, Box, IconButton } from '@mui/material'
import React from 'react'
import Asthra from '../media/asthraLogo.png';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const iconStyle = {
  width: 38,
  height: 38.89,
  border: '1.9px solid #b6b6b6',
  borderRadius: '9.5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const activeIconStyle = {
  ...iconStyle,
  borderColor: 'red',
};

const Sidebar = () => {
  return (
    <Box sx={{display: 'flex', flexDirection:'column', width:'145px', height:'1043px', left:'-1px',position:'absolute', borderRight: '0.1px solid #220D5B'
        , backgroundColor:'#FFFFFF'}}>
        <Avatar
            src={Asthra}
            alt='Logo'
            sx={{
                width:'74px', height:'74px', top:'40px', left:'35px', position:'absolute',
            }}
        />
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'41px', height:'826.94px'}}>
            <IconButton sx={{top: '159px', left:'52px', position:'absolute',...activeIconStyle}}>
                <HomeIcon sx={{ color: 'red', width: '21.5px', height: '20.86px' }} />
            </IconButton>
            <IconButton sx={{top: '246.51px', left:'52px', position:'absolute', ...iconStyle}}><ShoppingCartIcon /></IconButton>
            <IconButton sx={{top: '334.02px', left:'52px', position:'absolute', ...iconStyle}}><SearchIcon /></IconButton>
            <IconButton sx={{top: '421px', left:'52px', position:'absolute', ...iconStyle}}><LockIcon /></IconButton>
            <IconButton sx={{top: '508px', left:'52px', position:'absolute', ...iconStyle}}><GroupIcon /></IconButton>
            <IconButton sx={{top: '596px', left:'52px', position:'absolute', ...iconStyle}}><AccountTreeIcon /></IconButton>
            <IconButton sx={{top: '683px', left:'52px', position:'absolute', ...iconStyle}}><CreditCardIcon /></IconButton>
            <IconButton sx={{top: '764px', left:'52px', position:'absolute', ...iconStyle}}><Inventory2Icon /></IconButton>
            <IconButton sx={{top: '857px', left:'52px', position:'absolute', ...iconStyle}}><StorefrontIcon /></IconButton>
            <IconButton sx={{top: '945px', left:'52px', position:'absolute', ...iconStyle}}><ExitToAppIcon /></IconButton>
        </Box>
    </Box>
  )
}

export default Sidebar
