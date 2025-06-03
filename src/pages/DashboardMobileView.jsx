import React, { useRef, useState, useEffect } from 'react';
import { Avatar, Badge, Box, IconButton, Typography, Button, Menu, MenuItem, styled } from '@mui/material';
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
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { BarChart } from '@mui/x-charts/BarChart';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);


dayjs.extend(isBetweenPlugin);

const DashboardMobileView = ({data}) => {

  const {todays_order_summary_section,order_summary_section,requested_prods,credit_section,analytics_section} = data;


  //expandSidebar 
  const [selected, setSelected] = useState(null);
  

  const [openSidebar, setOpenSidebar] = useState(false);
  const [expandSidebar, setExpandSidebar] = useState(false);

  //topbar
  const [selectedOption, setSelectedOption] = useState('GPO');
  const [user, setUser] = useState('Kaveri hospital');
  const [userDropDown, setUserDropDown] = useState(false)
  const dropdownRef = useRef(null);
  const hospitalList = ['Kaveri Hospital, ABC Hospital', 'New Med Hospital'];
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const hospitalRef = useRef(null);

  //summarycards
  let dateSummary = new Date();
  const[valueSummary, setValueSummary] = useState(dayjs(dateSummary))
  const [totalOrders, setTotalOrders] = useState("0");
  const [totalApproval, setTotalApproval] = useState("0");


  useEffect(() => {
    const selectedDate = dayjs(valueSummary).format('YYYY-MM-DD');
    const selectedAnalytics = analytics_section.find(
      (entry) => entry.ordered_date === selectedDate
    );

    setTotalOrders(selectedAnalytics?.total_order_received ?? "0");
    setTotalApproval(selectedAnalytics?.order_approval_pending ?? "0");
  }, [valueSummary]);

  // analytic graph
  let dateAnalytic = new Date();
    const[valueAnalytic, setValueAnalytic] = useState(dayjs(dateAnalytic))
    // console.log(valueAnalytic)
  
    const generateXLabels = (selectedDate) => {
        const labels = [];
        const startOfMonth = dayjs(selectedDate).startOf('month');
        const endOfMonth = dayjs(selectedDate).endOf('month');
        const totalDays = endOfMonth.date(); // number of days in the month
    
        for (let i = 0; i < totalDays; i++) {
          const date = startOfMonth.add(i, 'day');
          labels.push(`${date.format('ddd')}\n${date.format('DD-MM')}`);
        }
        return labels;
      };
    
      const xLabels = generateXLabels(valueAnalytic);
    
    
      // console.log(xLabels);
    
      function getMonthlyOrderData(data, selectedDate) {
        const totalOrdersReceived = [];
        const ordersApprovalPending = [];
    
        const startDate = dayjs(selectedDate).startOf('month');
        const endDate = dayjs(selectedDate).endOf('month');
        const totalDays = endDate.date();
    
        for (let i = 0; i < totalDays; i++) {
          const currentDate = startDate.add(i, 'day');
          const formattedDate = currentDate.format('YYYY-MM-DD');
    
          const dailyData = data.find(item => item.ordered_date === formattedDate);
    
          if (dailyData) {
            totalOrdersReceived.push(parseInt(dailyData.total_order_received));
            ordersApprovalPending.push(parseInt(dailyData.order_approval_pending));
          } else {
            totalOrdersReceived.push(0);
            ordersApprovalPending.push(0);
          }
        }
        return { totalOrdersReceived, ordersApprovalPending };
      }
    
    const { totalOrdersReceived, ordersApprovalPending } = getMonthlyOrderData(analytics_section, valueAnalytic);
  
  // console.log("Total Orders Received (7 days):", totalOrdersReceived);
  // console.log("Orders Approval Pending (7 days):", ordersApprovalPending);

  //sidebar

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  const handleExpandSidebar = () => {
    setOpenSidebar(false);
    setExpandSidebar(!expandSidebar);
  }

  //sidebar mobile
  const iconStyle = {
        width: '40px',height: '40px',
    };

    const iconBoxStyle={
      width: '64.96px',height: '66.49px',
      border:'3.25px solid #B6B6B6' , borderRadius:'16.24px',display:'flex', alignItems:'center', justifyContent:'center'
    }

    const boxStyle = (top) => ({
        width: '107px',height: '105px',top: `${top}px`,left: '70px',position: 'absolute',display:'flex', alignItems:'center', justifyContent:'center',
        cursor: 'pointer',
        '&:hover': {
        backgroundColor:'#FCDFE0',
        color:'#EA232B',
        '&:hover .iconBox':{
          border:'3.25px solid #EA232B'
        }
        },
    });

    //expand sidebar mobile
    const boxStyleExp = (isSelected, top) => ({
        width: '214.8px',height: '42.53px',top: `${top}px`,left: '16px',position: 'absolute',borderRadius: '3.6px',
        backgroundColor: isSelected ? '#FBD7D9' : '#FFFFFF',opacity: isSelected ? '81%' : '100%',color: isSelected ? '#EA232B' : 'initial',
        cursor: 'pointer'
    });

    const iconBoxStyleExp = (isSelected) => ({
        width: '27.39px',height: '28.03px',left: '14px',top: '7px',position: 'absolute',borderRadius: '6.85px',
        border: `1.37px solid ${isSelected ? '#EA232B' : '#B6B6B6'}`
    });

    const iconStyleExp = {
        width: '15.5px',height: '15.03px',top: '5.14px',left: '5.93px',position: 'absolute'
    };

    const textStyleExp = {
        width: '125px',height: '24px',top: '10px',left: '63.39px',position: 'absolute',
        fontfamily:'Poppins', fontWeigth:'400', fontSize:'13.37px', lineHeight:'23.07px'
    };


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

    //TopbarMobile

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setUserDropDown(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    // GPO and NGPO
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

    // Hospital name

    const [anchorHo, setAnchorHo] = useState(null);
    const openHo = Boolean(anchorHo);

    const handleClickHo = (event) => {
    setAnchorHo(event.currentTarget);
    };

    const handleMenuItemClickHo = (value) => {
      setUser(value);       // Save the selected value to state
      setAnchorEl(null);             // Close the dropdown
    };

    const handleCloseHo = (value) => {
      setAnchorHo(null);
    };

    const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
    };

    const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    };

    //creditcard mobile
    const [valueProgress, setValueProgress] = useState(60);
    const max = 100;
  
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: '12.66px',
        borderRadius: '20.04px',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#A79F9F',
            Opacity:'68%'
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: '20.04px',
            backgroundColor: '#21A945',
        },
    }));

  return (
    <Box>

      { openSidebar && (<Box sx={{width:'247.5px', height:'1790px', left:'0px', top:'0px', position:'absolute',
      backgroundColor:'#FFFFFF', borderRight:'0.17px solid #220D5B', zIndex:1000
      }}>
        <Avatar src={Asthra} sx={{ width:'126.5px', height:'126.5px', top:'68.38px', left:'61.54px', position:'absolute'}} alt='logo'/>
        <Box sx={{width:'50px', height:'50px', left:'193px', top:'4px', position:'absolute'}} onClick={handleSidebar}>
            <DisabledByDefaultOutlinedIcon sx={{width:'33.33px', height:'33.33px', left:'8.33px', top:'8.33px', position:'absolute', color:'#B6B6B6'}}/>
        </Box>

        {menuItems.map((item, index) => (
            <Box key={item.id} sx={boxStyle(252 + index * 149.59)} onClick={handleExpandSidebar}>
              <Box className='iconBox' sx={iconBoxStyle}>
              {item.icon}
              </Box>
          </Box>
        ))}
      </Box>)}
      {expandSidebar &&(
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
              sx={boxStyleExp(selected === item.id, 179 + index * 62.5)} // vertical spacing
            >
              <Box sx={iconBoxStyleExp(selected === item.id)}>
                {React.cloneElement(item.icon, { sx: { ...iconStyleExp } })}
              </Box>
              <Typography sx={textStyleExp}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      <Box className='topbar' sx={{
        width:'412px', height:'133px', top:'0px', left:'0px', position:'absolute', backgroundColor:'#FFFFFF'
      }}>
          <Avatar src={Asthra} sx={{width:'33px', height:'33px', top:'16px', left:'20px', position:'absolute'}}/>
          <Typography sx={{
              width:'96px', height:'26px', top:'25px', left:'72px', position:'absolute', fontFamily:'Poppins', fontWeight:'500',
              fontsize:'17px', lineHeight:'100%', display:'flex', alignItems:'center'
          }}>
              Dashboard
          </Typography>

          {/* GPO or NGPO */}
          <Box sx={{
          backgroundColor: '#000000',
          width: '69px',height: '31.36px',position: 'absolute',top: '21px',left: '233px',borderRadius: '6.27px',border: '0.53px solid #000000',
          display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
              <div>
              <Button onClick={handleClick} variant="contained" sx={{borderRadius: '6.27px',fontSize:'10.3px', gap:'3px',textTransform: 'none', width:'69px', height:'31.36px', backgroundColor:'#000000' }}>
                  {selectedOption}<KeyboardArrowDownIcon />
              </Button>
              
              <Menu sx={{ width:'103px',left:'-1px', position:'absolute',
                  '& .MuiMenu-list': {
                  padding: '0px !important',
                  width:'80px !important',
                  },
              }} anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
                  transformOrigin={{vertical: 'top',horizontal: 'left',}}>
                  <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF',fontSize:'10.3px',
                  '&:hover':{
                      color:'#000000'
                  }
                  }} onClick={()=>handleMenuItemClick('NGPO')}>NGPO</MenuItem>
                  <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF',fontSize:'10.3px','&:hover':{
                      color:'#000000'
                  }}} onClick={()=>handleMenuItemClick('GPO')}>GPO</MenuItem>
              </Menu>
              </div>
          </Box>

          <Box sx={{border: '0.55px solid rgba(0,0,0,0.35)', borderRadius: '6.5px',width:'38px', height:'31.36px', top:'21px', left:'311px', position:'absolute'}}>
              <IconButton sx={{width:'17.69px', height:'17.69px', top:'7.53px', left:'9.83px', position:'absolute'}}>
                  <Badge badgeContent={5} color="success" sx={{
                  '& .MuiBadge-badge': {
                          top:'4px',
                          fontSize: '6.04px',
                          // width:'12.45px',
                          height: '12.45px',
                          minWidth: '11.45px',
                          padding: '0 4px',
                      }
                  }}>
                      <NotificationsActiveOutlinedIcon sx={{color:'#000000'}}/>
                  </Badge>
              </IconButton>
          </Box>

          
          <Box onClick={() => setUserDropDown(prev => !prev)} sx={{ width: '34px', height: '34px',top:'21px', left:'358px',gap:'1.13px', position:'absolute',
          background:'#656565', borderRadius:'26px', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
              <LocalHospitalOutlinedIcon sx={{color:'#FFFFFF', width:'20px', height:'20px'}}/>
          </Box>

          {userDropDown && (
              <Box ref={dropdownRef}
              sx={{ width: '160px',height: '60px',borderRadius: '4.14px',backgroundColor: '#FFFFFF',border: '0.96px solid rgba(0, 0, 0, 0.45)',
                  padding: '9.51px 5.19px',position: 'absolute',right: '15px',top: '70px',zIndex: 1000,}}>
              {/* User Info Row */}
                  <Box
                      sx={{width:'130.52px',height:'17.82px', left:'7.78px',top:'9.51px',display: 'flex',alignItems: 'center',gap: '11.24px',position:'absolute'}}>
                      <LocalHospitalIcon sx={{ left:'0px',position:'absolute',color: '#DFDFDF', fontSize: '20px' }} />
                      <Typography
                      sx={{width:'110px',left:'28.52px',position:'absolute',fontFamily: 'Poppins',fontWeight: 500,fontSize: '14.4px',color: '#000000',}}>
                      {user}
                      </Typography>
                  </Box>
              {/* Divider */}
                  <Box
                      sx={{width: '144.43px',height: '0.86px',left:'7.78px', top:'38.92px', position:'absolute'
                      ,backgroundColor: '#1B2535',opacity:'60%'}}/>
              {/* Logout Row */}
                  <Box
                      sx={{width:'99.46px', height:'17px', top:'51.99px', left:'11.24px',display: 'flex',alignItems: 'center',gap: '11.24px',position:'absolute'}}>
                      <LogoutIcon sx={{ left:'0px',position:'absolute',color: '#DFDFDF', fontSize: '18px' }} />
                      <Typography 
                      sx={{left:'25.65px',position:'absolute',fontFamily: 'Poppins',fontWeight: 500,fontSize: '14.4px',color: '#000000',}}>
                      Logout
                      </Typography>
                  </Box>
              </Box>
          )}


          <Box sx={{width:'18px', height:'15.83px', top:'91px', left:'26px', position:'absolute'}} onClick={handleSidebar}>
              <DehazeIcon sx={{width:'100%', height:'100%',color:'#1C1B1F', fontSize:'inherit'}}/>
          </Box>
          
          {/* hospital */}
          <Box sx={{ width: '311px', height: '34px',position: 'absolute',top: '84px',left: '81px',borderRadius: '6.73px',
              border: '0.56px solid #00000059',backgroundColor: '#FFFFFF',}}>
              <div>
              <Button onClick={handleClickHo} variant='text' sx={{width:'311px', height:'34px', left:'0px', top:'0px', position:'absolute',
                  color:'#000000', '&:hover': { background: 'none', boxShadow: 'none', textDecoration: 'none'}
              }}>
                  <SearchIcon sx={{ width:'13.65px',height:'13.56px',color: '#000', left:'12.99px', top:'10.17px', position:'absolute' }} />
                  <Typography sx={{width:'100px', height:'14px', top:'10px', left:'44px', fontFamily:'Poppins', fontWeight:'400',
                  fontSize:'9.6px', lineHeight:'100%', position:'absolute',display: 'flex',alignItems: 'center',justifyContent:'center'
                  }}>
                  {user}
                  </Typography>
                  <KeyboardArrowDownIcon sx={{width:'13.56px',height:'13.56px',left:'290px', top:'10px',position:'absolute',color:'#000000'}}/>
              </Button>
              
              <Menu anchorEl={anchorHo} open={openHo} onClose={handleCloseHo} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  sx={{
                  width: '313px important', top: '10px', 
                  '& .MuiMenu-list': {
                      height:'140px',
                      width: '313px !important',
                      boxShadow: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems:'center',
                  },
                  }}>
                  <Box sx={{width:'302.5px', height:'31px', top:'7px', left:'4px', position:'absolute',borderRadius:'10px', border:'0.84px solid rgba(0,0,0,0.35)'}}>
                      <SearchIcon sx={{ width:'13.36px',height:'13.36px',color: '#000', top:'10px', left:'12px', position:'absolute' }} />
                      <textarea placeholder='Search...' onChange={handleSelect} style={{width:'75px',height:'15px',left:'39px', top:'8px', position:'absolute',
                      border: 'none', padding: 0, outline: 'none', resize: 'none' }} />
                  </Box>
                  <Box sx={{top:'50px',left:'4px',width:'302.5px',border:'1px solid rgba(0,0,0,0.45)',borderRadius:'10px',
                      position:'absolute', backgroundColor:'#FFFFFF'}}>
                      <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                      }} onClick={() => handleMenuItemClickHo('Kaveri Hospital')}>
                      <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                      <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                      </Box>
                      <Typography sx={{left:'50px',top:'4.5px',position:'absolute'}}>Kaveri Hospital</Typography></Box>
                      </MenuItem>
                      <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                      }} onClick={() => handleMenuItemClickHo('ABC Hospital')}>
                      <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                      <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                      </Box>
                      <Typography sx={{left:'50px',top:'4.5px',position:'absolute'}}>ABC Hospital</Typography></Box>
                      </MenuItem>

                      <MenuItem sx={{backgroundColor: 'transparent',gap:'10px'
                      }} onClick={() => handleMenuItemClickHo('New Med Hospital')}>
                          <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center'}}>
                      <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px',top:'5px', position:'absolute', display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                      </Box>
                      <Typography sx={{left:'50px',top:'4.5px',position:'absolute'}}>New Med Hospital</Typography></Box>
                      
                      </MenuItem>
                  </Box>
                  </Menu>
              </div>
              </Box>
      </Box>
      {/* <Topbar handleSidebar={handleSidebar}/> */}
      <Box sx={{width:'426px', height:'1802px', top:'133px', left:'0px', position:'absolute', backgroundColor:'#EBEBE9'}}>
        <Box sx={{left:'20px', top:'10px', position:'absolute'}}>
            <Box sx={{width:'372px', height:'560px', borderRadius:'10px', backgroundColor:'#FFFFFF'}}>
      <Typography sx={{
        width:'56.9px', height:'14px', top:'21.16px', left:'150px', fontFamily:'Poppins', fontWeight:'500', fontSize:'9.15px', lineHeight:'100%',
        display:'flex', alignItems:'center', position:'absolute'
      }}>
        Sort By Date
      </Typography>
      <Box sx={{width:'145px',height:'10px',top:'7px',left:'217.5px', position:'absolute' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={valueSummary} onChange={(newValue)=> setValueSummary(newValue)} 
                           slotProps={{
                              layout:{
                                  sx:{
                                      zIndex:100,
                                      top:'10px',
                                      padding:'-2px',
                                  }
                              },
                              textField:{
                                  size:'small',
                                  sx:{
                                      width:'150px',
                                      '& .MuiInputBase-root': {
                                          height: '20.21px !important',
                                      },
                                      '& input': {
                                          padding: '0 8px !important',   // optional: control text padding
                                          fontSize: '13px !important',   // optional: control font size
                                      },
                                  }
                              }
                          }} 
                          >
            </DatePicker>
        </LocalizationProvider>
      </Box>
      <Box className="summary-card-1"
          sx={{width: '352px',height: '115px',top: '56px',left:'9px',borderRadius: '7.28px',border: '0.83px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#F3941E',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#E9E6E6',
                  opacity:'14%'
                },
                '& .icon > *': {
                  color: '#000000',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '95px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '28.39px',height: '27.24px',backgroundColor: 'orange',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6px',}}>
                  <Box className='icon' sx={{width:'28px',height:'14px',top:'6px', left:'0px',position:'absolute',}}>
                    <AddShoppingCartOutlinedIcon sx={{width:'14px',height:'14px',top:'0.75px', left:'7px',position:'absolute', color: '#FFFFFF' }} />
                  </Box>
              </Box>
              <Box className="price" sx={{width:'95px', height:'53.09px', top:'40.44px', gap:'5.09px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '23.28px',}}>
                  Total Orders
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '23.28px',}}>
                  {Number(totalOrders)}
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '93.13px', height: '93.13px', right: '0px',top:'18.94px', position: 'absolute' }}>
              <ShoppingCartOutlinedIcon sx={{ width: '66px', height: '67px', top:'7.28px', left:'13.64px', color: '#F5F5F5', position:'absolute'}}/>
            </Box>
          </Box>
        <Box className="summary-card-2"
          sx={{width: '352px',height: '115px',top: '181px',left:'9px',borderRadius: '7.28px',border: '0.8px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#EA232B',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#FFFFFF',
                  opacity:'25%'
                },
                '& .icon-box > *': {
                  color: '#EA232B',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '127px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '24.67px',height: '24.67px',backgroundColor: '#EA232B',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6.17px',}}>
                    <PendingActionsIcon sx={{width:'14.98px',height:'14.98px',top:'5.08px', left:'4.58px',position:'absolute', color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'122.68px', height:'48.8px', top:'44.67px', gap:'4.8px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '21.93px',}}>
                  Approval Pending
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '21.93px',}}>
                  {Number(totalApproval)}
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '56px', height: '56px', right: '20.89px',top:'14.91px', position: 'absolute' }}>
              <AccessTimeOutlinedIcon sx={{ width: '66px', height: '67px', top:'14.91px', color: 'rgba(91, 90, 95, 0.06)', position:'absolute'}}/>
            </Box>
          </Box>
          <Box className="summary-card-3"
          sx={{width: '352px',height: '115px',top: '306px',left:'9px',borderRadius: '7.28px',border: '0.8px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#0077B6',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#FFFFFF',
                  opacity:'25%'
                },
                '& .icon-box > *': {
                  color: '#0077B6',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '131px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '25.01px',height: '26.48px',backgroundColor: '#0077B6',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6.62px',}}>
                    <MultipleStopOutlinedIcon sx={{width:'16.07px',height:'14.06px',top:'7.13px', left:'4.02px',position:'absolute', color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'120px', height:'53.15px', top:'42.48px', gap:'5.15px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '23.53px',}}>
                  Total Transaction
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '23.53px',}}>
                  {Number(todays_order_summary_section.total_transaction)}
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '86.78px', height: '86.78px', right: '16.29px',top:'18.75px', position: 'absolute' }}>
              <CurrencyRupeeIcon sx={{ width: '66.94px', height: '66.82px', top:'8.52px', left:'21.63px', color: 'rgba(91, 90, 95, 0.06)', position:'absolute'}}/>
            </Box>
          </Box>
          <Box className="summary-card-4"
          sx={{width: '352px',height: '115px',top: '431px',left:'9px',borderRadius: '7.28px',border: '0.8px solid #D9D9D9',
            position: 'absolute',
              '&:hover': {
                backgroundColor: '#FF7308',
                boxShadow: '0px 0.88px 0.88px 0px #00000040',
                border: 'none',
                '& .price > *': {
                  color: '#FFFFFF',
                },
                '& .right-part > *': {
                  color: '#FFFFFF',
                  opacity:'25%'
                },
                '& .icon-box > *': {
                  color: '#FF7308',
                },
                '& .icon-box': {
                  backgroundColor: '#FFFFFF',
                },
              }
            }}>
            <Box className="left-part" sx={{width: '166px',height: '93px',top:'11px', left:'11px',position:'absolute'}}>
              <Box className="icon-box" sx={{width: '23.3px',height: '24.67px',backgroundColor: '#FF7308',display: 'flex',alignItems: 'center',
                justifyContent: 'center',borderRadius: '6.17px',}}>
                    <ThreePOutlinedIcon sx={{width:'14.23px',height:'14.23px',top:'6.61px', left:'4.49px',position:'absolute', color: '#FFFFFF' }} />
              </Box>
              <Box className="price" sx={{width:'162px', height:'49px', top:'44px', gap:'4.8px', position:'absolute'}}>
                <Typography sx={{ fontFamily: 'Poppins',fontSize: '13px',color: '#000',fontWeight: 400,lineHeight: '21.93px',}}>
                  Total Request Received
                </Typography>
                <Typography sx={{fontFamily: 'Poppins',fontSize: '25px',color: '#000',fontWeight: 600,lineHeight: '21.93px',}}>
                  {Number(requested_prods.total_request_received)}
                </Typography>
              </Box>
            </Box>
            <Box className="right-part" sx={{ width: '86.78px', height: '86.78px', right: '16.29px',top:'18.75px', position: 'absolute' }}>
              <ThreePOutlinedIcon sx={{ width: '66.94px', height: '66.82px', top:'8.52px', left:'21.63px', color: 'rgba(91, 90, 95, 0.06)', position:'absolute'}}/>
            </Box>
          </Box>
        </Box>
        </Box>
        <Box sx={{left:'20px', top:'582px', position:'absolute'}}>
            <Box sx={{
        width:'372px', height:'372px', borderRadius:'10px', backgroundColor:'#FFFFFF'
    }}>
        <Typography sx={{
            width:'81px', height:'26px', top:'17px', left:'20px', position:'absolute',fontFamily:'Poppins',fontWeight:'600', fontSize:'17px',
            lineHeight:'100%'
        }}>
            Analytics
        </Typography>
        <Box sx={{ width: '7.03px', height: '7.03px',top:'18px', left:'222px',position:'absolute', borderRadius: '50%', backgroundColor: '#EA232B' }} />
        <Typography sx={{ width:'109px',height:'15px',fontFamily:'Poppins', top:'14px', left:'235px',position:'absolute',
            fontWeight:'500',fontSize: '10.2px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                Total Order Received
        </Typography>
        <Box sx={{ width: '7.03px', height: '7.03px',top:'35px', left:'222px',position:'absolute', borderRadius: '50%', backgroundColor: '#FBD7D9' }} />
        <Typography sx={{ width:'131px',height:'15px',fontFamily:'Poppins', top:'31px', left:'235px',position:'absolute',
            fontWeight:'500',fontSize: '10.2px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                Orders Approval Pending
        </Typography>
        <Typography sx={{ width:'86px',height:'18px', top:'73.16px', left:'20px', position:'absolute',
        fontFamily:'Poppins', fontWeight:'500',fontSize: '12.19px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                Sort By Month
        </Typography>
        <Box sx={{width:'145px', height:'28.21px',top:'62px', left:'112.05px', position:'absolute', zIndex:100}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={valueAnalytic} onChange={(newValue)=> setValueAnalytic(newValue)} views={['year', 'month']}
                slotProps={{
                layout:{
                    sx:{
                        zIndex:100,
                        top:'10px',
                        padding:'-2px',
                    }
                },
                textField:{
                    size:'small',
                    sx:{
                        width:'150px',
                        '& .MuiInputBase-root': {
                            height: '20.21px',
                        },
                        '& input': {
                            padding: '0 8px',   // optional: control text padding
                            fontSize: '13px',   // optional: control font size
                            },
                        }
                    }
                }} 
                >
                </DatePicker>
            </LocalizationProvider>
            </Box>
            <Box
                sx={{width: '326px',height: '250px',top:'100px',left:'10px',overflowX: 'hidden',
                  overflowY: 'auto',position: 'absolute',display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                    <Box sx={{width:'100%',height:'100%' }}>
                <BarChart
                    yAxis={[
                    {
                        scaleType: 'band',
                        data: xLabels,
                        tickLabelStyle: {
                        fontSize: '6.33px',
                        whiteSpace: 'pre-line',
                        overflow: 'visible',
                        textAlign: 'center',
                        },
                    },
                    ]}
                    xAxis={[
                    {
                        tickMinStep: 5,
                        min: 0,
                        max: 25,
                        tickValues: [0, 5, 10, 15, 20, 25],
                    },
                    ]}
                    series={[
                    { data: totalOrdersReceived, stack: 'A', color: '#EA232B' },
                    { data: ordersApprovalPending, stack: 'A', color: '#FBD7D9' },
                    ]}
                    layout="horizontal"
                    grid={{ vertical: true }}
                    width={320}  // slightly smaller than Box for padding
                    height={xLabels.length * 20 }
                />
                </Box>
            </Box>
        </Box>
        </Box>
        <Box sx={{left:'20px', top:'968px', position:'absolute'}}>
            <Box sx={{
            width:'372px', height:'322.75px', borderRadius:'10px', backgroundColor:'#FFFFFF'
            }}>
              <FiberManualRecordIcon sx={{ color: '#21A945',top:'28px',left:'266px',width:'12.36px', height:'12.36px', position:'absolute' }} />
              <Typography sx={{top:'24px',left:'286.72px',width:'51px', height:'19px', position:'absolute',
                  fontFamily:'Poppins',fontSize:'16px', fontWeight: 700, color: '#21A945',display: 'flex',alignItems: 'center'
              }}>
                Active
              </Typography>
              <Box sx={{
                  width:'306.97px', height:'227.94px', top:'61.83px', left:'32.48px', position:'absolute'
              }}>
              <Box id="order-placed" sx={{width:'306.97px', height:'44.41px', gap:'23.05px'}}>
                  <Box id="left-part" sx={{width:'199.17px', height:'44.41px', gap:'32.48px', left:'0px', position:'absolute'}}>
                    <Box sx={{width:'44.41px', height:'44.41px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',
                      // padding:'13.86px', gap:'8.15px', 
                      backgroundColor:'#FFFAC9'}}>
                      <AddBoxOutlinedIcon sx={{width:'20px', height:'20px',top:'13.86px', 
                          color:'#F3941E'}} />
                    </Box>
                    <Typography sx={{width:'122.28px', height:'26px',top:'9.21px', left:'76.89px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'400', fontSize:'17px', lineHeight:'100%'}}>
                      Order Placed
                    </Typography>
                  </Box>
                  <Box id="right-part" sx={{width:'84.74px', height:'30px', top:'7.21px', right:'0px', position:'absolute'}}>
                    <Typography sx={{width:'29.04px', height:'30px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'600', fontSize:'20px', lineHeight:'100%'}}>
                      {Number(order_summary_section.order_placed)}
                    </Typography>
                    <Box sx={{width:'20.5px', height:'20.5px', top:'4.75px', left:'64.25px', position:'absolute'}}>
                        <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                    </Box>
                  </Box>
                </Box>
              <Box id="approved" sx={{width:'306.97px', height:'44.41px', top:'61.18px', position:'absolute', gap:'29.34px', }}>
                  <Box id="left-part" sx={{width:'192.85px', height:'44.41px', gap:'31.44px', left:'0px', position:'absolute'}}>
                    <Box sx={{width:'44.41px', height:'44.41px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',
                      // padding:'13.86px', gap:'8.15px', 
                      backgroundColor:'#FFFAC9'}}>
                      <AssignmentOutlinedIcon sx={{width:'20px', height:'20px', color:'#F3941E'}} />
                    </Box>
                    <Typography sx={{width:'117px', height:'27px',top:'8.71px', left:'75.85px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'400', fontSize:'18.33px', lineHeight:'100%'}}>
                      Approved
                    </Typography>
                  </Box>
                  <Box id="right-part" sx={{width:'83.59px', height:'30px', top:'7.21px', right:'0px', position:'absolute'}}>
                    <Typography sx={{width:'29.04px', height:'30px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'600', fontSize:'20px', lineHeight:'100%'}}>
                      {Number(order_summary_section.approved)}
                    </Typography>
                    <Box sx={{width:'20.5px', height:'20.5px', top:'4.75px', left:'63.1px', position:'absolute'}}>
                        <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                    </Box>
                  </Box>
                </Box>

                <Box id="shipped" sx={{width:'306.97px', height:'44.41px', top:'122.35px', position:'absolute',gap:'29.34px', }}>
                  <Box id="left-part" sx={{width:'192.85px', height:'44.41px', gap:'31.44px', left:'0px', position:'absolute'}}>
                    <Box sx={{width:'44.41px', height:'44.41px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',
                      // padding:'13.86px', gap:'8.15px', 
                      backgroundColor:'#FFFAC9'}}>
                      <LocalShippingOutlinedIcon sx={{width:'20px', height:'20px', color:'#F3941E'}} />
                    </Box>
                    <Typography sx={{width:'117px', height:'27px',top:'8.71px', left:'75.85px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'400', fontSize:'18.33px', lineHeight:'100%'}}>
                      Shipped
                    </Typography>
                  </Box>
                  <Box id="right-part" sx={{width:'83.59px', height:'30px', top:'7.21px', right:'0px', position:'absolute'}}>
                    <Typography sx={{width:'29.04px', height:'30px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'600', fontSize:'20px', lineHeight:'100%'}}>
                      {Number(order_summary_section.shipped)}
                    </Typography>
                    <Box sx={{width:'20.5px', height:'20.5px', top:'4.75px', left:'63.1px', position:'absolute'}}>
                        <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                    </Box>
                  </Box>
                </Box>

                <Box id="delivered" sx={{width:'306.97px', height:'44.41px', bottom:'0px', position:'absolute',gap:'50.3px', }}>
                  <Box id="left-part" sx={{width:'174.44px', height:'44.41px', gap:'32.48px', left:'0px', position:'absolute'}}>
                    <Box sx={{width:'44.41px', height:'44.41px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',
                      // padding:'13.86px', gap:'8.15px', 
                      backgroundColor:'#FFFAC9'}}>
                      <CreditCardOutlinedIcon sx={{width:'20px', height:'20px', color:'#F3941E'}} />
                    </Box>
                    <Typography sx={{width:'97.55px', height:'27px',top:'8.71px', left:'76.89px', position:'absolute',display: 'flex',alignItems: 'center',
                      fontFamily:'Poppins', fontWeight:'400', fontSize:'18.33px', lineHeight:'100%'}}>
                      Delivered
                    </Typography>
                  </Box>
                  <Box id="right-part" sx={{width:'78.45px', height:'30px', top:'7.21px', right:'0px', position:'absolute'}}>
                      <Typography sx={{width:'29.04px', height:'30px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                          fontFamily:'Poppins', fontWeight:'600', fontSize:'20px', lineHeight:'100%'}}>
                          {Number(order_summary_section.delivered)}
                      </Typography>
                      <ChevronRightIcon sx={{width:'20.5px', height:'20.5px', top:'4.2px', right:'0px', position:'absolute',color:'#000000'}} />
                  </Box>
                </Box>

              </Box>

              </Box>
        </Box>
        <Box sx={{left:'20px', bottom:'18px', position:'absolute'}}>
            <Box sx={{
                width:'372px', height:'476px', borderRadius:'10px', backgroundColor:'#FFFFFF'
            }}>
              <Box id="cerdit-card" sx={{
                    width: '326.94px',height: '166.61px',borderRadius: '12.06px',
                    background: 'linear-gradient(99.18deg, #841418 6.15%, #EA232B 55.99%, #F3941E 56.16%)',
                    boxShadow: '0px 4.19px 4.19px 0px #00000040',
                    position: 'absolute',top: '20px',left: '23.05px',color: 'white',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                }}>
                    <Box sx={{width:'284.19px', height:'56.18px', top:'10.85px', left:'13.44px', position:'absolute'}}>
                        <Box>
                            <Typography sx={{width:'156.14px', height:'27px', font:'Poppins', fontWeight:'600',fontSize:'17.77px', lineHeight:'100%'}}>
                                Maximum Credit
                            </Typography>
                        </Box>
                        <Box sx={{width:'85.61px', height:'34px', top:'22.18px', left:'0px', position:'absolute'}}>
                            <Box sx={{width:'13.41px', height:'13.41px', top:'10.29px', left:'0px', position:'absolute', display:'flex', alignItems:'center'}}>
                                <CurrencyRupeeIcon sx={{width:'13.41px', height:'13.41px'}}/>
                            </Box>
                            <Box sx={{width:'75px', height:'34px', top:'0px', left:'11.41px', position:'absolute', display:'flex', alignItems:'center'}}>
                                <Typography sx={{ font:'Poppins', fontSize:'22.5px', fontWeight:'400', lineHeight:'100%'}}>
                                    {Number(credit_section.used_credit)+Number(credit_section.balance_credits)}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{width:'88.02px', height:'40.87px', top:'113.17px', left:'30.39px', position:'absolute'}}>
                        <Box>
                            <Typography sx={{width:'102.49px', height:'22px', left:'-14.67px', position:'absolute', fontFamily:'Poppins', fontWeight:'500',fontSize:'14.5px', lineHeight:'100%'}}>
                                Used Amount
                            </Typography>
                        </Box>
                        <Box sx={{width:'61.44px', height:'24px',top:'18.86px', left:'-11.53px', position:'absolute',display:'flex', flexDirection:'row'}}>
                            <Box>
                                <CurrencyRupeeIcon sx={{width:'12px', height:'12px', top:'5.3px', left:'0px', position:'absolute'}}/>
                            </Box>
                            <Box>
                                <Typography sx={{ left:'11px',width:'53px',height:'24px',fontFamily:'Poppins', fontSize:'16px', fontWeight:'400', lineHeight:'100%'
                                    ,position:'absolute',display: 'flex',alignItems: 'center'
                                }}>
                                    {Number(credit_section.used_credit)}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{width:'118px', height:'22.01px', top:'113.17px', left:'197px', fontFamily:'Poppins', fontWeight:'500',
                            fontSize:'14.5px', position:'absolute', lineHeight:'100%',display: 'flex',alignItems: 'center', justifyContent:'center'
                        }}>
                            Balance Credits
                        </Typography>
                        <Box sx={{width:'57.4px', height:'24px', top:'132.03px', left:'224.25px', position:'absolute'}}>
                            <Box sx={{width:'8.44px', height:'8.44px', top:'5.3px',position:'absolute'}}>
                                <CurrencyRupeeIcon sx={{width:'12px', height:'12px', top:'0px', left:'1.01px', position:'absolute'}}/>
                            </Box>
                            <Typography sx={{width:'49px', height:'24px', fontFamily:'Poppins', fontWeight:'400',
                            fontSize:'16px',lineHeight:'100%', left:'11.44px',position:'absolute',display: 'flex',alignItems: 'center'}}>
                                {Number(credit_section.balance_credits)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'325.89px', height:'55.54px', top:'209.67px', left:'24.1px', position:'absolute', borderRadius:'11.05px', border:'1.05px solid #000000'}}>
                    <Box sx={{width:'295.58px', height:'32.05px', top:'12.63px', left:'17.81px', gap:'75.45px', position:'absolute'}}>
                        <Box sx={{width:'154.65px', height:'32.05px', gap:'11.53px', position:'absolute',
                            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        
                            <Box sx={{width:'32.05px', height:'32.05px',borderRadius:'16.03px', background:'#000000',
                            display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                                <PendingActionsIcon sx={{width:'17.68px', height:'17.68px', color:'#FFFFFF'}}/>
                            </Box>
                            <Typography sx={{width:'111.08px', height:'24px', fontFamily:'Poppins', fontWeight:'500', fontSize:'16.29px', lineHeight:'100%'
                                ,display: 'flex',alignItems: 'center'
                            }}>
                                Due Amount
                            </Typography>
                        </Box>
                        <Box sx={{width:'65.48px', height:'25px', right:'0px', top:'3.53px', position:'absolute',
                            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Box sx={{width:'10.48px', height:'10.48px', top:'7.26px', display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                                <CurrencyRupeeIcon sx={{width:'10.48px', height:'10.48px',color:'#000000'}}/>
                            </Box>
                            <Typography sx={{width:'55px', height:'25px', fontFamily:'Poppins', fontWeight:'400', fontSize:'16.46px', lineHeight:'100%',
                                display: 'flex',alignItems: 'center'
                            }}>
                                {Number(credit_section.due_amount)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'159.15px', height:'71px', top:'301px', left:'30.25px', position:'absolute'}}>
                  <Box sx={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                      <Typography sx={{width:'159.15px', height:'26px', fontFamily:'Poppins', fontWeight:'600', fontSize:'17.57px', lineHeight:'100%'}}>
                          Total Balance
                      </Typography>
                  </Box>
                  <Box>
                      <Typography sx={{width:'159.15px', height:'45px', fontFamily:'Poppins', fontWeight:'600', fontSize:'30px', lineHeight:'100%'}}>
                          {Number(credit_section.totalcredits)}
                      </Typography>
                  </Box>
                </Box>
                <Box sx={{width:'292.42px', height:'13.26px', top:'394.12px', left:'30px', position:'absolute',}}>
                    <BorderLinearProgress variant="determinate" value={valueProgress} />
                </Box>
                <Box sx={{width:'37.84px', height:'22px', left:'26px', top:'412.12px', position:'absolute'}}>
                    <Typography sx={{width:'29px', height:'22px', left:'8.84px',position:'absolute',fontFamily:'Poppins', fontWeight:'400', fontSize:'14.83px', lineHeight:'100%',}}>
                        {valueProgress}%
                    </Typography>
                </Box>
                <Box sx={{width:'38.84px', height:'22px', left:'293px', top:'412.12px', position:'absolute'}}>
                    <Typography sx={{width:'30px', height:'22px', left:'8.84px',position:'absolute',fontFamily:'Poppins', fontWeight:'400', fontSize:'14.83px', lineHeight:'100%',}}>
                        {max-valueProgress}%
                    </Typography>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
    
  )
}

export default DashboardMobileView
