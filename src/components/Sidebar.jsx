import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
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
import CategoryIcon from '@mui/icons-material/Category';

const iconStyle = {
  width: '38px',
  height: '38.89px',
  border: '1.9px solid #b6b6b6',
  borderRadius: '9.5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color:'#000000'
}

const activeIconStyle = {
  ...iconStyle,
  borderColor: 'red',
};

const Sidebar = () => {
  return (
    <Box sx={{display: 'flex', flexDirection:'column', width:'145px', height:'1043px', left:'-1px',position:'absolute',
      borderRight: '0.1px solid #220D5B', backgroundColor:'#FFFFFF'}}>
        <Avatar
            src={Asthra}
            alt='Logo'
            sx={{
                width:'74px', height:'74px', top:'40px', left:'35px', position:'absolute',
            }}
        />
        <Box sx={{width:'41px', height:'826.94px',top:'159px', left:'53px', position:'absolute'}}>
          <Box sx={{left:'0px', top:'0px', position:'absolute'}}>
            <IconButton sx={{...activeIconStyle}}>
                <HomeIcon sx={{ color: 'red', width: '21.5px', height: '20.86px' }} />
            </IconButton>
          </Box>
          <Box sx={{left:'0px', top:'87.1px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><ShoppingCartIcon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'175.02px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><SearchIcon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'262px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><LockIcon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'349px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><GroupIcon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'437px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><CategoryIcon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'524px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><CreditCardIcon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'605px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><Inventory2Icon /></IconButton>
          </Box>
          <Box sx={{left:'0px', top:'698px', position:'absolute'}}>
            <IconButton sx={{...iconStyle}}><StorefrontIcon /></IconButton>
          </Box>


          <div
            style={{left: '0px',top: '786px',position: 'absolute',display: 'flex',flexDirection: 'column',alignItems: 'center',
              '&:hover .hoverText': {
                opacity: 1,
              },}}>
            <IconButton sx={{ ...iconStyle }}>
              <ExitToAppIcon />
            </IconButton>
            <p className="hoverText" style={{opacity:0}}>logout</p>
          </div>



        </Box>
    </Box>
  )
}

export default Sidebar
