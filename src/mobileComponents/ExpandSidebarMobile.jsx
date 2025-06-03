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



const ExpandSidebarMobile = ({handleExpandSidebar}) => {

    const [selected, setSelected] = useState(null);


    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
        { id: 'orders', label: 'Order Summary', icon: <ShoppingCartIcon /> },
        { id: 'purchase', label: 'Purchase Analysis', icon: <SearchIcon /> },
        { id: 'brands', label: 'Brands', icon: <LockIcon /> },
        { id: 'vendor', label: 'Vendor', icon: <GroupIcon /> },
        { id: 'Category', label: 'Category', icon: <CategoryIcon /> },
        { id: 'transaction', label: 'Transaction', icon: <CreditCardIcon /> },
        { id: 'products', label: 'Products', icon: <Inventory2Icon /> },
        { id: 'request', label: 'Requested Products', icon: <StorefrontIcon /> },
        { id: 'logout', label: 'Logout', icon: <ExitToAppIcon /> }
    ];

    const boxStyle = (isSelected, top) => ({
        width: '214.8px',height: '42.53px',top: `${top}px`,left: '16px',position: 'absolute',borderRadius: '3.6px',
        backgroundColor: isSelected ? '#FBD7D9' : '#FFFFFF',opacity: isSelected ? '81%' : '100%',color: isSelected ? '#EA232B' : 'initial',
        cursor: 'pointer'
    });

    const iconBoxStyle = (isSelected) => ({
        width: '27.39px',height: '28.03px',left: '14px',top: '7px',position: 'absolute',borderRadius: '6.85px',
        border: `1.37px solid ${isSelected ? '#EA232B' : '#B6B6B6'}`
    });

    const iconStyle = {
        width: '15.5px',height: '15.03px',top: '5.14px',left: '5.93px',position: 'absolute'
    };

    const textStyle = {
        width: '125px',height: '24px',top: '10px',left: '63.39px',position: 'absolute',
        fontfamily:'Poppins', fontWeigth:'400', fontSize:'13.37px', lineHeight:'23.07px'
    };


  return (
    <Box sx={{zIndex:'1000',
        width:'245px', height:'1789px', left:'0px', top:'0px', position:'absolute', backgroundColor:'#FFFFFF', borderRight:'0.17px solid #220D5B'
    }}>
        <Avatar src={Asthra} sx={{ width:'86px', height:'86px', top:'61px', left:'76px', position:'absolute'}} alt='logo'/>
        <Box sx={{width:'31.33px', height:'31.33px', left:'200px', top:'8px', position:'absolute'}} onClick={handleExpandSidebar}>
            <DisabledByDefaultOutlinedIcon sx={{width:'31.33px', height:'31.33px', left:'0px', top:'0px', position:'absolute', color:'#B6B6B6'}}/>
        </Box>

        {menuItems.map((item, index) => (
        <Box
          key={item.id}
          onClick={() => setSelected(item.id)}
          sx={boxStyle(selected === item.id, 179 + index * 62.5)} // vertical spacing
        >
          <Box sx={iconBoxStyle(selected === item.id)}>
            {React.cloneElement(item.icon, { sx: { ...iconStyle } })}
          </Box>
          <Typography sx={textStyle}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default ExpandSidebarMobile