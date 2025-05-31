import { Avatar, Box, colors, IconButton, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Asthra from '../media/asthraLogo.png'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CategoryIcon from '@mui/icons-material/Category';



const SidebarMobile = ({handleSidebar, handleExpandSidebar}) => {

    // const [selected, setSelected] = useState(null);

    const iconStyle = {
        width: '40px',height: '40px',
    };

    const iconBoxStyle={
      width: '64.96px',height: '66.49px',top: '0px',left: '10px',position: 'absolute',
      border:'3.25px solid #B6B6B6' , borderRadius:'16.24px',display:'flex', alignItems:'center', justifyContent:'center'
    }

    const boxStyle = (top) => ({
        width: '84.96px',height: '86.49px',top: `${top}px`,left: '81.52px',position: 'absolute',
        cursor: 'pointer'
    });


    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon sx={iconStyle} /> },
      { id: 'orders', label: 'Order Summary', icon: <ShoppingCartIcon sx={iconStyle} /> },
      { id: 'purchase', label: 'Purchase Analysis', icon: <SearchIcon sx={iconStyle} /> },
      { id: 'brands', label: 'Brands', icon: <LockIcon sx={iconStyle} /> },
      { id: 'vendor', label: 'Vendor', icon: <GroupIcon sx={iconStyle} /> },
      { id: 'Category', label: 'Category', icon: <CategoryIcon sx={iconStyle} /> },
      { id: 'transaction', label: 'Transaction', icon: <CreditCardIcon sx={iconStyle} /> },
      { id: 'products', label: 'Products', icon: <Inventory2Icon sx={iconStyle} /> },
      { id: 'request', label: 'Requested Products', icon: <StorefrontIcon sx={iconStyle} /> },
      { id: 'logout', label: 'Logout', icon: <ExitToAppIcon sx={iconStyle} /> }
    ];

  return (
    <Box sx={{width:'247.5px', height:'1790px', left:'0px', top:'0px', position:'absolute',
      backgroundColor:'#FFFFFF', borderRight:'0.17px solid #220D5B', zIndex:1000
    }}>
        <Avatar src={Asthra} sx={{ width:'126.5px', height:'126.5px', top:'68.38px', left:'61.54px', position:'absolute'}} alt='logo'/>
        <Box sx={{width:'50px', height:'50px', left:'193px', top:'4px', position:'absolute'}} onClick={handleSidebar}>
            <DisabledByDefaultOutlinedIcon sx={{width:'33.33px', height:'33.33px', left:'8.33px', top:'8.33px', position:'absolute', color:'#B6B6B6'}}/>
        </Box>

        {menuItems.map((item, index) => (
          <Box key={item.id} sx={boxStyle(261.5 + index * 149.6)} onClick={handleExpandSidebar}>
            <Box sx={iconBoxStyle}>
            {item.icon}
            </Box>
          </Box>
        ))}

    </Box>
  )
}

export default SidebarMobile
