import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import Asthra from '../media/asthraLogo.png';
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
import AccountTreeIcon from '@mui/icons-material/AccountTree';


const Sidebar = ({handleToggle}) => {

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
      width: '38px',
      height: '38.89px',
      border: '1.9px solid #b6b6b6',
      borderRadius: '9.5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#000000',
      position: 'absolute',
      top: `${top}px`,
      backgroundColor: isSelected ? '#FCEEEE' : 'transparent',
      '&:hover .hover-text': {
        display: 'block',
        transform: 'translateX(0)',
        opacity: 1,
      },
    });


  const iconStyle = {
    width:'21.5px',height:'20.86', top:'7.13px', left:'8.23px', position:'absolute'
  };


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
          {
            menuItems.map((item, index) => (
              <Box key={item.id} onClick={()=> {setSelected(item.id); handleToggle();}} sx={boxStyle(selected === item.id, index * 87.59)}>
                {React.cloneElement(item.icon, { sx: { ...iconStyle } })}
                <Typography className="hover-text"
                  sx={{width: '150px',fontFamily: 'Poppins',fontSize: '15px',position: 'absolute',top: '48px', left: '-53px',
                  color: selected === item.id ? '#EA232B' : 'red',display: 'none',opacity: 0,textAlign: 'center',}}>
                  {item.label}
                </Typography>
              </Box>
            ))
          }
        </Box>
    </Box>
  )
}

export default Sidebar
