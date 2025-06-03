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



const ExpandSidebar = ({handleToggle}) => {

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
        width: '298px',height: '59px',top: `${top}px`,left: '15px',position: 'absolute',borderRadius: '5px',
        backgroundColor: isSelected ? '#FBD7D9' : '#FFFFFF',opacity: isSelected ? '81%' : '100%',color: isSelected ? '#EA232B' : 'initial',
        cursor: 'pointer'
    });

    const iconBoxStyle = (isSelected) => ({
        width: '38px',height: '38.89px',left: '20px',top: '11px',position: 'absolute',borderRadius: '9.5px',
        border: `1.9px solid ${isSelected ? '#EA232B' : '#B6B6B6'}`
    });

    const iconStyle = {
        width: '21.5px',height: '20.86px',top: '7.13px',left: '8.23px',position: 'absolute'
    };

    const textStyle = {
        width: '200px',height: '32px',top: '15px',left: '88px',position: 'absolute',display: 'flex',alignItems: 'center',
        fontfamily:'Poppins', fontWeigth:'400', fontSize:'19px', lineHeight:'32px'
    };


  return (
    <Box sx={{
        width:'328px', height:'1043px', left:'0px', top:'0px', position:'absolute', backgroundColor:'#FFFFFF', borderRight:'0.1px solid #220D5B'
    }}>
        <Avatar src={Asthra} sx={{ width:'100px', height:'100px', top:'31px', left:'110px', position:'absolute'}} alt='logo'/>
        <Box sx={{width:'50px', height:'50px', left:'278px', top:'0px', position:'absolute'}} onClick={handleToggle}>
            <DisabledByDefaultOutlinedIcon sx={{width:'33.33px', height:'33.33px', left:'8.33px', top:'8.33px', position:'absolute', color:'#B6B6B6'}}/>
        </Box>

        {menuItems.map((item, index) => (
        <Box
          key={item.id}
          onClick={() => setSelected(item.id)}
          sx={boxStyle(selected === item.id, 164 + index * 84)} // vertical spacing
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

export default ExpandSidebar
