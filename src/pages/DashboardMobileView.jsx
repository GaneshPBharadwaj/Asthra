import React, { useState } from 'react';
import Topbar from '../mobileComponents/Topbar';
import { Box } from '@mui/material';
import MainGridMobile from '../mobileComponents/MainGridMobile';
import SidebarMobile from '../mobileComponents/SidebarMobile';
import ExpandSidebarMobile from '../mobileComponents/ExpandSidebarMobile';

const DashboardMobileView = () => {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [expandSidebar, setExpandSidebar] = useState(false);


  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  const handleExpandSidebar = () => {
    setOpenSidebar(false);
    setExpandSidebar(!expandSidebar);
  }

  return (
    <Box>
      {openSidebar && (
        <SidebarMobile handleSidebar={handleSidebar} handleExpandSidebar={handleExpandSidebar}/>
      )}
      {expandSidebar &&(
        <ExpandSidebarMobile handleExpandSidebar={handleExpandSidebar}/>
      )}
      <Topbar handleSidebar={handleSidebar}/>
      <MainGridMobile/>
    </Box>
    
  )
}

export default DashboardMobileView
