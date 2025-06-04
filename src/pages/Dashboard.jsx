import { Box, Avatar, Typography, Menu, Button, Badge, IconButton, MenuItem } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
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
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BarChart } from '@mui/x-charts/BarChart';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import isoWeek from 'dayjs/plugin/isoWeek';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
dayjs.extend(isoWeek);


dayjs.extend(isBetweenPlugin);


const Dashboard = ({data}) => {

  // data from response

  const {todays_order_summary_section,order_summary_section,requested_prods,credit_section,analytics_section} = data;

  const completedProg = (((Number(credit_section.used_credit) + Number(credit_section.balance_credits))/Number(credit_section.used_credit))*100).toFixed(2)
  // console.log(completedProg)
  // const leftProg

  const [isExpanded, setIsExpanded] = useState(true)

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  // sidebar
  const [selectedSide, setSelectedSide] = useState(null);

  // sidebarExpand
  const [selectedExpSide, setSelectedExpSide] = useState(null);

  //Navbar
  const [selectedOption, setSelectedOption] = useState('GPO');
    const [user, setUser] = useState('Kaveri hospital');
    const [userDropDown, setUserDropDown] = useState(false)
    const hospitalList = ['Kaveri Hospital, ABC Hospital', 'New Med Hospital'];
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
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

    // summary cards
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

    // Collapsed Sidebar Icon Box Style
// Collapsed Sidebar Icon Box Style
  const boxStyle = (isSelected) => ({
    width: '38px',
    height: '38.89px',
    border: '1.9px solid #b6b6b6',
    borderRadius: '9.5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isSelected ? '#FCEEEE' : 'transparent',
    color: '#000000',
    cursor: 'pointer',
    position: 'relative',
    '&:hover .hover-text': {
      display: 'block',
      transform: 'translateX(0)',
      opacity: 1,
    },
  });

  const iconStyle = {
    width: '21.5px',
    height: '20.86px',
  };

  // Expanded Sidebar Menu Box
  const boxStyleExp = (isSelected) => ({
    width: '100%',
    // height: '59px',
    borderRadius: '5px',
    backgroundColor: isSelected ? '#FBD7D9' : '#FFFFFF',
    opacity: isSelected ? 0.81 : 1,
    color: isSelected ? '#EA232B' : 'initial',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    gap: '30px',
  });

  // Icon container inside expanded sidebar item
  const iconBoxStyleExp = (isSelected) => ({
    width: '38px',
    height: '38.89px',
    borderRadius: '9.5px',
    border: `1.9px solid ${isSelected ? '#EA232B' : '#B6B6B6'}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  });

  const iconStyleExp = {
    width: '21.5px',
    height: '20.86px',
  };

  // Label text style inside expanded sidebar
  const textStyleExp = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '19px',
    lineHeight: '32px',
    color: 'inherit',
  };



  const [value, setValue] = useState(70);
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

  //Analytics
  
  
  let dateAnalytic = new Date();
  const[valueAnalytic, setValueAnalytic] = useState(dayjs(dateAnalytic))
  // console.log(valueAnalytic)

//   const generateXLabels = (selectedDate) => {
//     const labels = [];
//     const startOfMonth = dayjs(selectedDate).startOf('month');
//     const endOfMonth = dayjs(selectedDate).endOf('month');
//     const totalDays = endOfMonth.date(); // number of days in the month

//     for (let i = 0; i < totalDays; i++) {
//       const date = startOfMonth.add(i, 'day');
//       labels.push(`${date.format('ddd')}\n${date.format('DD-MM')}`);
//     }
//     return labels;
//   };



//   // console.log(xLabels);

//   function getMonthlyOrderData(data, selectedDate) {
//     const totalOrdersReceived = [];
//     const ordersApprovalPending = [];

//     const startDate = dayjs(selectedDate).startOf('month');
//     const endDate = dayjs(selectedDate).endOf('month');
//     const totalDays = endDate.date();

//     for (let i = 0; i < totalDays; i++) {
//       const currentDate = startDate.add(i, 'day');
//       const formattedDate = currentDate.format('YYYY-MM-DD');

//       const dailyData = data.find(item => item.ordered_date === formattedDate);

//       if (dailyData) {
//         totalOrdersReceived.push(parseInt(dailyData.total_order_received));
//         ordersApprovalPending.push(parseInt(dailyData.order_approval_pending));
//       } else {
//         totalOrdersReceived.push(0);
//         ordersApprovalPending.push(0);
//       }
//     }
//     return { totalOrdersReceived, ordersApprovalPending };
//   }

// const { totalOrdersReceived, ordersApprovalPending } = getMonthlyOrderData(analytics_section, valueAnalytic);

// updated one for analytics
    const generateXLabels = (selectedDate) => {
      const labels = [];
      const startOfMonth = dayjs(selectedDate).startOf('month');
      const totalDays = startOfMonth.daysInMonth();

      for (let i = 0; i < totalDays; i++) {
        const date = startOfMonth.add(i, 'day');
        labels.push({
          label: `${date.format('ddd')}\n${date.format('DD-MM')}`,
          dateKey: date.format('YYYY-MM-DD'), // to match with `ordered_date`
        });
      }
      return labels;
    };

    const xLabels = generateXLabels(valueAnalytic);


    const getMonthlyOrderData = (data, xLabels) => {
      const totalOrdersReceived = [];
      const ordersApprovalPending = [];

      xLabels.forEach(({ dateKey }) => {
        const dailyData = data.find(item => item.ordered_date === dateKey);
        totalOrdersReceived.push(dailyData ? parseInt(dailyData.total_order_received) : 0);
        ordersApprovalPending.push(dailyData ? parseInt(dailyData.order_approval_pending) : 0);
      });

      return { totalOrdersReceived, ordersApprovalPending };
    };

    const fullXLabels = generateXLabels(valueAnalytic);
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 7;
    const maxIndex = fullXLabels.length - visibleCount;

    const visibleLabels = fullXLabels.slice(startIndex, startIndex + visibleCount);
    const { totalOrdersReceived, ordersApprovalPending } = getMonthlyOrderData(analytics_section, visibleLabels);


  return (
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <Box className='sidebar' sx={{display: 'flex', flexDirection: 'column', height: '100%' }}>
        {!isExpanded && (
            <Box sx={{ alignSelf: 'flex-end', marginRight: '10px', cursor: 'pointer' }} onClick={handleToggle}>
              <DisabledByDefaultOutlinedIcon sx={{ fontSize: '30px', color: '#B6B6B6' }} />
            </Box>
          )}
        <Box
          sx={{
            width: isExpanded ? '145px' : '328px',
            height: '100%',
            backgroundColor: '#FFFFFF',
            borderRight: '0.1px solid #220D5B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: -3,
          }}
        >
          
          <Box>
          <Avatar src={Asthra} alt='Logo' sx={{
              width: isExpanded ? '74px' : '100px',
              height: isExpanded ? '74px' : '100px',
              paddingTop: isExpanded ? 3: 0,
              mb: -3,
            }}
          />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, mt: isExpanded ? '100px' : '60px' }}>
            {menuItems.map((item, index) => {
              const isSelected = isExpanded ? selectedSide === item.id : selectedExpSide === item.id;

              return isExpanded ? (
                <Box
                  key={item.id}
                  onClick={() => {
                    setSelectedSide(item.id);
                    handleToggle();
                  }}
                  sx={{
                    ...boxStyle(isSelected),
                  }}
                >
                  {React.cloneElement(item.icon, { sx: { ...iconStyle } })}
                  <Typography
                    className="hover-text"
                    sx={{
                      position: 'absolute',
                      top: '48px',
                      left: '-40x',
                      fontFamily: 'Poppins',
                      fontSize: '15px',
                      color: isSelected ? '#EA232B' : 'red',
                      opacity: 0,
                      display: 'none',
                      textAlign: 'center',
                      width:'170px'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ) : (
                <Box key={item.id} onClick={() => setSelectedExpSide(item.id)} sx={boxStyleExp(isSelected)}>
                  <Box sx={iconBoxStyleExp(isSelected)}>
                    {React.cloneElement(item.icon, { sx: iconStyleExp })}
                  </Box>
                  <Typography sx={textStyleExp}>{item.label}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

  
      <Box className='mainContent' sx={{width:'100%', height:'100%', backgroundColor:'#EBEBE9'}}>
              <Box className='navbar' sx={{ height:'5%',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent:'space-between',minWidth:0, flexShrink:0,
                backgroundColor:'#EBEBE9'}}>
                  <Box className='leftPart'sx ={{padding:'20px',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap:'16px'}}>
                    <IconButton
                      sx={{ backgroundColor: '#000',color: '#fff',width: '66px',height: '50px',borderRadius: '10px',
                      }}>
                      <ArrowBackIcon />
                    </IconButton>
                    <Typography sx={{ width:'146px', height:'39px',
                      fontFamily: 'Poppins', fontSize: '25.93px', color: '#000', fontWeight:'500'}}>
                      Dashboard
                    </Typography>
                  </Box>
                <Box className='rightPart'sx ={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px', gap:'16px',
                flexWrap: 'nowrap',overflow: 'hidden',minWidth: 0, flexShrink:1}}>
                  <Box sx={{
                  backgroundColor: '#000000',
                  width: '80px',height: '50px',borderRadius: '10px',border: '0.84px solid #ffffff',
                  display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                    <div>
                      <Button onClick={handleClick} variant="contained" sx={{borderRadius: '10px', gap:'3px',textTransform: 'none', height:'50px', backgroundColor:'#000000' }}>
                        {selectedOption}<KeyboardArrowDownIcon />
                      </Button>
                      
                      <Menu sx={{ width:'120px',
                        '& .MuiMenu-list': {
                          padding: '0px !important',
                          width:'80px',
                          
                        },
                      }} anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
                        transformOrigin={{vertical: 'top',horizontal: 'left',}}
                      >
                        <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF',
                          '&:hover':{
                              color:'#000000'
                          }
                        }} onClick={()=>handleMenuItemClick('NGPO')}>NGPO</MenuItem>
                        <MenuItem sx={{backgroundColor:'#000000',color:'#FFFFFF','&:hover':{
                              color:'#000000'
                          }}} onClick={()=>handleMenuItemClick('GPO')}>GPO</MenuItem>
                      </Menu>
                    </div>
                  </Box>
                  <Box sx={{ width: '252px', height: '50.4px',borderRadius: '10px',display:"flex", flexDirection:'row', alignItems: 'center',justifyContent: 'space-between',
                    border: '0.84px solid #00000059',gap: '8.4px',backgroundColor: 'transparent',}}>
                      <Button
                        onClick={handleClickHo}
                        variant="text"
                        sx={{
                          width: '214px',height: '40px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',
                          padding: '12px',color: '#000000',textTransform: 'none',
                          '&:hover': {
                            background: 'none',
                            boxShadow: 'none',
                            textDecoration: 'none',
                          },
                        }}>
                        <SearchIcon sx={{ width: '20px', height: '20px', color: '#000000' }} />
                        <Typography sx={{fontFamily: 'Poppins',fontWeight: 400,fontSize: '12px',lineHeight: 1,color: '#000000',}}>
                          {user}
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ width: '20px', height: '20px', color: '#000000' }} />
                      </Button>

                      
                      <Menu anchorEl={anchorHo} open={openHo} onClose={handleCloseHo} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        sx={{
                          width: '302px', top: '30px', display:'flex',flexDirection:'column',justifyContent:'space-around',
                          '& .MuiMenu-list': {
                            height:'140px',
                            width: '252px',
                            boxShadow: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems:'center',
                            justifyContent:'space-between',
                            gap:'5px',
                          },
                        }}>
                          <Box sx={{width:'235px', height:'34px',borderRadius:'10px', border:'0.84px solid rgba(0,0,0,0.35)', 
                            display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', gap:'5px'}}>
                            <SearchIcon sx={{ width:'20.16px',height:'20.16px',color: '#000', }} />
                            <textarea placeholder='Search...' onChange={handleSelect} style={{height:'18px',
                              border: 'none', padding: 0, outline: 'none', resize: 'none' }} />
                          </Box>
                          <Box sx={{width:'235px',border:'1px solid rgba(0,0,0,0.45)',borderRadius:'10px', backgroundColor:'#FFFFFF'}}>
                            <MenuItem sx={{backgroundColor: 'transparent',gap:'10px', display:'flex', 
                              }} onClick={() => handleMenuItemClickHo('Kaveri Hospital')}>
                              <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center',}}>
                                <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                                    <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                                </Box>
                                <Typography sx={{padding:'10px'}}>Kaveri Hospital</Typography></Box>
                            </MenuItem>
                            <MenuItem sx={{backgroundColor: 'transparent',gap:'10px', display:'flex', 
                              }} onClick={() => handleMenuItemClickHo('ABC Hospital')}>
                              <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center',}}>
                                <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                                    <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                                </Box>
                                <Typography sx={{padding:'10px'}}>ABC Hospital</Typography></Box>
                            </MenuItem>
                            <MenuItem sx={{backgroundColor: 'transparent',gap:'10px', display:'flex', 
                              }} onClick={() => handleMenuItemClickHo('New Med Hospital')}>
                              <Box sx={{width:'250px', height:'20px',display:'flex', alignItems:'center',}}>
                                <Box sx={{width:'20px',height:'20px',backgroundColor:'#D9D9D9',borderRadius:'20px', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                                    <LocalHospitalIcon sx={{width:'14px',height:'14px',backgroundColor:'#D9D9D9',color:'#000000'}}/>
                                </Box>
                                <Typography sx={{padding:'10px'}}>New Med Hospital</Typography></Box>
                            </MenuItem>
                          </Box>
                        </Menu>
                    </Box>
                    <Box>
                      <IconButton sx={{ border: '1px solid #ccc', borderRadius: '8px',
                          width:'58px', height:'50px'
                        }}>
                          <Badge badgeContent={5} color="success">
                              <NotificationsIcon />
                          </Badge>
                      </IconButton>
                    </Box>
                    <Box sx={{position:'relative'}}>
                      <Box onClick={() => setUserDropDown(prev => !prev)} sx={{ width: '52px', height: '52px', background:'#FFFFFF', borderRadius:'26px', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
                        <LocalHospitalOutlinedIcon sx={{color:'#656565', width:'32px', height:'32px'}}/>
                      </Box>
                      
                    </Box>
                  </Box>
                </Box>
                {userDropDown && (
                        <Box
                          sx={{
                            position: 'fixed',top: '60px',right: '10px',width: '180px',borderRadius: '5px',backgroundColor: '#FFFFFF',
                            border: '1px solid rgba(0, 0, 0, 0.45)',boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',zIndex: 1000,
                            p: 1.5,display: 'flex',flexDirection: 'column',}}>
                          {/* User Info Row */}
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <LocalHospitalIcon sx={{ color: '#DFDFDF', fontSize: '20px' }} />
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px', color: '#000000' }}>
                              {user}
                            </Typography>
                          </Box>

                          {/* Divider */}
                          <Box sx={{ height: '1px', backgroundColor: '#1B2535', opacity: 0.6, my: 0.5 }} />

                          {/* Logout Row */}
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <LogoutIcon sx={{ color: '#DFDFDF', fontSize: '18px' }} />
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px', color: '#000000' }}>
                              Logout
                            </Typography>
                          </Box>
                        </Box>
                      )}
                <Box className='bottomPart' sx={{height:'95%', display: 'flex', flexDirection:{sm:'column', md:'row'}, gap: 7, padding:5, overflow:'visible'}}>
                <Box className='bottomPartLeft' sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',width:{md:'60%', sm:'100%'},
                   alignItems:'center', height:'100%',gap:3}}>
                    <Box className='summaryCard' sx={{width:'100%',display:'flex', flexDirection:'column', gap:2, backgroundColor:'#FFFFFF',padding:2, borderRadius:'10px'}}>
                      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                      <Box className='topPart' sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap:1}}>
                          <Typography sx={{width:'90px', height:'21px', display:'flex', alignItems:'center',
                            fontFamily:'Poppins', fontWeight:'500',fontSize:'14.18px', lineHeight:'100%'
                          }}>
                            Sort By Date
                          </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker value={valueSummary} onChange={(newValue)=> setValueSummary(newValue)} 
                                        slotProps={{
                                            layout:{
                                                sx:{
                                                    zIndex:100,
                                                    mt:'4px',
                                                }
                                            },
                                            textField:{
                                                size:'small',
                                                sx:{
                                                    width:'150px',
                                                    '& .MuiInputBase-root': {
                                                        height: '30px !important',
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
                      </Box>
                      <Box className='bottomPart'sx={{width:'95%',display:'flex', flexDirection:'column', gap:3,alignItems:'center', paddingLeft:3 }}>
                        <Box className='top' sx={{width:'100%',display:'flex', flexDirection:'row', alignItems:'center', gap:2}}>
                          <Box className="summary-card-1"
                              sx={{width: '100%',height: '151.5px',borderRadius: '8.77px',
                                border: '1px solid #D9D9D9',boxSizing: 'border-box',transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#F3941E',
                                  boxShadow: '0px 0.88px 0.88px 0px #00000040',
                                  border: 'none',
                                  '& .price > *': {
                                    color: '#FFFFFF',
                                  },
                                  '& .right-part > *': {
                                    color: '#E9E6E6',
                                    opacity: 0.14,
                                  },
                                  '& .icon-box > *': {
                                    color: '#000000',
                                  },
                                  '& .icon-box': {
                                    backgroundColor: '#FFFFFF',
                                  },
                                },
                              }}
                            >
                              <Box className="inside-summary"
                                sx={{position: 'relative',width: '100%',height: '100%',display: 'flex',alignItems:'center',
                                  justifyContent: 'space-around',gap:3}}>
                                <Box className="left-part"sx={{display: 'flex',flexDirection: 'column', paddingLeft:1}}>
                                  <Box className="icon-box" sx={{width: '34px',height: '34px',backgroundColor: 'orange',display: 'flex',
                                      alignItems: 'center',justifyContent: 'center',borderRadius: '8px',}}>
                                    <AddShoppingCartOutlinedIcon sx={{ color: '#FFFFFF' }} />
                                  </Box>
                                  {/* Price Info */}
                                  <Box className="price" sx={{ mt: 1 }}>
                                    <Typography sx={{fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                                      Total Orders
                                    </Typography>
                                    <Typography
                                      sx={{ fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                                      {Number(totalOrders)}
                                    </Typography>
                                  </Box>
                                </Box>
                                {/* Right Part Icon */}
                                <Box className="right-part" sx={{ alignSelf: 'center' }}>
                                  <ShoppingCartOutlinedIcon sx={{width: '93.5px',height: '93.59px',color: '#D9D9D9',}}/>
                                </Box>
                              </Box>
                            </Box>
                            <Box className="summary-card-2"
                              sx={{width: '100%',height: '151.5px',borderRadius: '8.77px',
                                border: '1px solid #D9D9D9',boxSizing: 'border-box',transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#EA232B',
                                  boxShadow: '0px 0.88px 0.88px 0px #00000040',
                                  border: 'none',
                                  '& .price > *': {
                                    color: '#FFFFFF',
                                  },
                                  '& .right-part > *': {
                                    color: '#FFFFFF',
                                    opacity: '25%',
                                  },
                                  '& .icon-box > *': {
                                    color: '#EA232B',
                                  },
                                  '& .icon-box': {
                                    backgroundColor: '#FFFFFF',
                                  },
                                },
                              }}
                            >
                              <Box className="inside-summary"
                                sx={{position: 'relative',width: '100%',height: '100%',display: 'flex',alignItems:'center',
                                  justifyContent: 'space-around',gap:3}}>
                                <Box className="left-part"sx={{display: 'flex',flexDirection: 'column', paddingLeft:1}}>
                                  <Box className="icon-box" sx={{width: '34px',height: '34px',backgroundColor: '#EA232B',display: 'flex',
                                      alignItems: 'center',justifyContent: 'center',borderRadius: '8px',}}>
                                    <PendingActionsIcon sx={{ color: '#FFFFFF' }} />
                                  </Box>
                                  {/* Price Info */}
                                  <Box className="price" sx={{ mt: 1 }}>
                                    <Typography sx={{fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                                      Approval Pending
                                    </Typography>
                                    <Typography
                                      sx={{ fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                                      {Number(totalApproval)}
                                    </Typography>
                                  </Box>
                                </Box>
                                {/* Right Part Icon */}
                                <Box className="right-part" sx={{ alignSelf: 'center' }}>
                                  <ShoppingCartOutlinedIcon sx={{width: '93.5px',height: '93.59px',color: '#D9D9D9',}}/>
                                </Box>
                              </Box>
                            </Box>
                        </Box>
                        <Box className='top' sx={{width:'100%',display:'flex', flexDirection:'row', alignItems:'center', gap:2}}>
                          <Box className="summary-card-3"
                              sx={{width: '100%',height: '151.5px',borderRadius: '8.77px',
                                border: '1px solid #D9D9D9',boxSizing: 'border-box',transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#0077B6',
                                  boxShadow: '0px 0.88px 0.88px 0px #00000040',
                                  border: 'none',
                                  '& .price > *': {
                                    color: '#FFFFFF',
                                  },
                                  '& .right-part > *': {
                                    color: '#FFFFFF',
                                    opacity: '25%',
                                  },
                                  '& .icon-box > *': {
                                    color: '#0077B6',
                                  },
                                  '& .icon-box': {
                                    backgroundColor: '#FFFFFF',
                                  },
                                },
                              }}
                            >
                              <Box className="inside-summary"
                                sx={{position: 'relative',width: '100%',height: '100%',display: 'flex',alignItems:'center',
                                  justifyContent: 'space-around',gap:3}}>
                                <Box className="left-part"sx={{display: 'flex',flexDirection: 'column', paddingLeft:1}}>
                                  <Box className="icon-box" sx={{width: '34px',height: '34px',backgroundColor: '#0077B6',display: 'flex',
                                      alignItems: 'center',justifyContent: 'center',borderRadius: '8px',}}>
                                    <MultipleStopOutlinedIcon sx={{ color: '#FFFFFF' }} />
                                  </Box>
                                  {/* Price Info */}
                                  <Box className="price" sx={{ mt: 1 }}>
                                    <Typography sx={{fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                                      Total Transaction
                                    </Typography>
                                    <Typography
                                      sx={{ fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                                      {Number(todays_order_summary_section.total_transaction)}
                                    </Typography>
                                  </Box>
                                </Box>
                                {/* Right Part Icon */}
                                <Box className="right-part" sx={{ alignSelf: 'center' }}>
                                  <CurrencyRupeeIcon sx={{width: '93.5px',height: '93.59px',color: '#D9D9D9',}}/>
                                </Box>
                              </Box>
                            </Box>
                            <Box className="summary-card-4"
                              sx={{width: '100%',height: '151.5px',borderRadius: '8.77px',
                                border: '1px solid #D9D9D9',boxSizing: 'border-box',transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#FF7308',
                                  boxShadow: '0px 0.88px 0.88px 0px #00000040',
                                  border: 'none',
                                  '& .price > *': {
                                    color: '#FFFFFF',
                                  },
                                  '& .right-part > *': {
                                    color: '#FFFFFF',
                                    opacity: '25%',
                                  },
                                  '& .icon-box > *': {
                                    color: '#FF7308',
                                  },
                                  '& .icon-box': {
                                    backgroundColor: '#FFFFFF',
                                  },
                                },
                              }}
                            >
                              <Box className="inside-summary"
                                sx={{position: 'relative',width: '100%',height: '100%',display: 'flex',alignItems:'center',
                                  justifyContent: 'space-around',}}>
                                <Box className="left-part"sx={{display: 'flex',flexDirection: 'column', paddingLeft:1}}>
                                  {/* changes */}
                                  <Box className="icon-box" sx={{width: '34px',height: '34px',backgroundColor: '#FF7308',display: 'flex',
                                      alignItems: 'center',justifyContent: 'center',borderRadius: '8px',}}>
                                    <ThreePOutlinedIcon sx={{ color: '#FFFFFF' }} />
                                  </Box>
                                  {/* Price Info */}
                                  <Box className="price" sx={{ mt: 1 }}>
                                    <Typography sx={{width:'100%',fontFamily: 'Poppins',fontSize: '16.67px',color: '#000',fontWeight: 400,lineHeight: '28.08px',}}>
                                      Total Request Received
                                    </Typography>
                                    <Typography
                                      sx={{ fontFamily: 'Poppins',fontSize: '38.61px',color: '#000',fontWeight: 600,lineHeight: '28.08px',}}>
                                      {Number(todays_order_summary_section.total_transaction)}
                                    </Typography>
                                  </Box>
                                </Box>
                                {/* Right Part Icon */}
                                <Box className="right-part" sx={{ alignSelf: 'center' }}>
                                  <ThreePOutlinedIcon sx={{width: '93.5px',height: '93.59px',color: '#D9D9D9',}}/>
                                </Box>
                              </Box>
                            </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box className='analyticCard' sx={{width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'#ffffff', padding:2, borderRadius:'10px'}}>
                      <Box className='top' sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
                        <Box className='topLeft'>
                          <Typography sx={{fontFamily: 'Poppins',fontWeight: 500,fontSize: '20.29px',lineHeight: '100%',}}>
                          Analytics
                          </Typography>
                        </Box>
                        <Box className='topRight' sx={{width:'70%',display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}>
                            <Box sx={{ width:'100%',justifyContent:'center',display: 'flex', alignItems: 'center', gap: 0.5}}>
                              <Box sx={{width: '14.24px',height: '14.24px',borderRadius: '50%',backgroundColor: '#EA232B',}}/>
                              <Typography sx={{fontFamily: 'Poppins',fontWeight: 400,fontSize: '10.2px',}}>
                                Total Order Received
                              </Typography>
                            </Box>
                            <Box sx={{width:'100%',justifyContent:'center', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <Box sx={{width: '14.24px',height: '14.24px',borderRadius: '50%',backgroundColor: '#FBD7D9',}}/>
                              <Typography sx={{fontFamily: 'Poppins',fontWeight: 400,fontSize: '10.2px',}}>
                                Orders Approval Pending
                              </Typography>
                            </Box>
                            <Typography sx={{display:'flex', justifyContent:'center',width:'100%',fontFamily: 'Poppins',fontWeight: 500,fontSize: '13.18px',}}>
                              Sort By Month
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker views={['year', 'month']}
                                value={valueAnalytic}
                                onChange={(newValue) => setValueAnalytic(newValue)}
                                slotProps={{
                                  layout: {
                                    sx: {
                                      zIndex: 100,
                                    },
                                  },
                                  textField: {
                                    size: 'small',
                                    sx: {
                                      width: '70%',
                                      '& .MuiInputBase-root': {
                                        height: '20.21px !important',
                                      },
                                      '& input': {
                                        padding: '0 8px !important',
                                        fontSize: '13px !important',
                                      },
                                    },
                                  },
                                }}
                              />
                            </LocalizationProvider>
                        </Box>
                      </Box>
                      <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <IconButton onClick={() => setStartIndex(prev => Math.min(prev - 7, 0))} disabled={startIndex === 0}
                          sx={{ backgroundColor: '#fff',color: '#000000',width: '66px',height: '50px',borderRadius: '10px', transform:'rotate(180deg)'
                          }}>
                          <PlayCircleOutlinedIcon />
                        </IconButton>
                        <Box className='bottom' sx={{width:'100%',display:'flex',alignItems:'center', justifyContent:'flex-start', overflowX: 'auto' }}>
                          <Box sx={{ minWidth: '100%' }}>
                          <BarChart
                            height={290}
                            series={[
                              { data: totalOrdersReceived, stack: 'A', color: '#EA232B' },
                              { data: ordersApprovalPending, stack: 'A', color: '#FBD7D9' },
                            ]}
                            xAxis={[
                              {
                                scaleType: 'band',
                                data: visibleLabels.map(l => l.label),
                                tickLabelStyle: {
                                  fontSize: '6.33px',
                                  whiteSpace: 'pre-line',
                                  overflow: 'visible',
                                  textAlign: 'center',
                                },
                              },
                            ]}
                            yAxis={[
                              {
                                tickMinStep: 5,
                                min: 0,
                                max: 25,
                                tickValues: [0, 5, 10, 15, 20, 25],
                              },
                            ]}
                          />
                        </Box>
                        </Box>
                        <IconButton onClick={() => setStartIndex(prev => Math.min(prev +7, maxIndex))} disabled={startIndex >= maxIndex}
                          sx={{ backgroundColor: '#fff',color: '#000000',width: '66px',height: '50px',borderRadius: '10px',
                          }}>
                          <PlayCircleOutlinedIcon />
                        </IconButton>
                      </Box>
                    </Box>
                </Box>
                <Box className='bottomPartright' sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',width:{md:'40%', sm:'100%'},
                   alignItems:'center', height:'100%', gap:2}}>
                  <Box className='OrderStatus' sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start',
                     backgroundColor:'#ffffff', width:'100%',padding:2,borderRadius:'10px',}}>
                    <Box className='topPart' sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center',
                       gap:1}}>
                      <FiberManualRecordIcon sx={{ color: '#21A945',width:'12.75px', height:'12.75px' }} />
                      <Typography sx={{width:'50px', height:'19px',fontFamily:'Poppins',fontSize:'15.94px', fontWeight: 700, 
                        color: '#21A945',display: 'flex',alignItems: 'center'}}>
                        Active
                      </Typography>
                    </Box>
                    <Box className='belowPart' sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:2.5}}>
                      <Box className='orderPlaced' sx={{width:'100%',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                        <Box id="right-part" sx={{display:'flex', flexDirection:'row', alignItems:'center', gap:1}}>
                          <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',
                            backgroundColor:'#FFFAC9'}}>
                            <AddBoxOutlinedIcon sx={{width:'20px', height:'20px',top:'13.86px', 
                              color:'#F3941E'}} />
                          </Box>
                          <Typography sx={{width:'116.69px', height:'26px',display: 'flex',alignItems: 'center',
                            fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                            Order Placed
                          </Typography>
                          <Typography sx={{width:'27.71px', height:'31px',display: 'flex',alignItems: 'center',
                            fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                            {Number(order_summary_section.order_placed)}
                          </Typography>
                        </Box>
                        <Box sx={{width:'19.56px', height:'19.56px'}}>
                            <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                        </Box>
                      </Box>
                      <Box className='approved' sx={{width:'100%',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',}}>
                        <Box id="right-part" sx={{display:'flex', flexDirection:'row', alignItems:'center', gap:1}}>
                          <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',gap:1.5,
                            backgroundColor:'#FFFAC9'}}>
                            <AssignmentOutlinedIcon sx={{width:'20px', height:'20px',top:'13.86px', 
                              color:'#F3941E'}} />
                          </Box>
                          <Typography sx={{width:'116.69px', height:'26px',display: 'flex',alignItems: 'center',gap:1.5,
                            fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                            Approved
                          </Typography>
                          <Typography sx={{width:'27.71px', height:'31px',display: 'flex',alignItems: 'center',gap:1.5,
                            fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                            {Number(order_summary_section.approved)}
                          </Typography>
                        </Box>
                        <Box sx={{width:'19.56px', height:'19.56px'}}>
                            <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                        </Box>
                      </Box>
                      <Box className='shipped' sx={{width:'100%',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',}}>
                        <Box id="right-part" sx={{display:'flex', flexDirection:'row', alignItems:'center', gap:1}}>
                          <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',gap:1.5,
                            backgroundColor:'#FFFAC9'}}>
                            <LocalShippingOutlinedIcon sx={{width:'20px', height:'20px',top:'13.86px', 
                              color:'#F3941E'}} />
                          </Box>
                          <Typography sx={{width:'116.69px', height:'26px',display: 'flex',alignItems: 'center',gap:1.5,
                            fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                            Shipped
                          </Typography>
                          <Typography sx={{width:'27.71px', height:'31px',display: 'flex',alignItems: 'center',gap:1.5,
                            fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                            {Number(order_summary_section.shipped)}
                          </Typography>
                        </Box>
                        <Box sx={{width:'19.56px', height:'19.56px'}}>
                            <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                        </Box>
                      </Box>
                      <Box className='delivered' sx={{width:'100%',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',}}>
                        <Box id="right-part" sx={{display:'flex', flexDirection:'row', alignItems:'center', gap:1}}>
                          <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',display:'flex', justifyContent:'center', alignItems:'center',gap:1.5,
                            backgroundColor:'#FFFAC9'}}>
                            <CreditCardOutlinedIcon sx={{width:'20px', height:'20px',top:'13.86px', 
                              color:'#F3941E'}} />
                          </Box>
                          <Typography sx={{width:'116.69px', height:'26px',display: 'flex',alignItems: 'center',gap:1.5,
                            fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                            Delivered
                          </Typography>
                          <Typography sx={{width:'27.71px', height:'31px',display: 'flex',alignItems: 'center',gap:1.5,
                            fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                            {Number(order_summary_section.delivered)}
                          </Typography>
                        </Box>
                        <Box sx={{width:'19.56px', height:'19.56px'}}>
                            <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className='creditCard' sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start',
                     backgroundColor:'#ffffff', width:'100%',padding:2,borderRadius:'10px',}}>
                      <Box sx={{width:'100%', backgroundColor:'#FFFFFF', borderRadius:'8.74px', display:'flex', flexDirection:'column', justifyContent:'center', gap:2}}>
                        <Box id="cerdit-card" sx={{
                            height: '190px',borderRadius: '11.51px',
                            background: 'linear-gradient(99.18deg, #841418 6.15%, #EA232B 55.99%, #F3941E 56.16%)',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            color: 'white',padding:2,
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', 
                        }}>
                            <Box className='top' sx={{width:'271.2px', height:'52.4px',display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                                <Box sx={{display:'flex', flexDirection:'column',justifyContent:'flex-start', gap:1}}>
                                  <Typography sx={{fontFamily:'Poppins', fontWeight:'500',
                                      fontSize:'20.85px', lineHeight:'100%',display: 'flex',alignItems: 'center', justifyContent:'center',
                                  }}>
                                      Maximum Credit
                                  </Typography>
                                  <Box sx={{display:'flex', alignItems:'center'}}>
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <CurrencyRupeeIcon sx={{fontSize:'20.85px'}}/>
                                    </Box>
                                    <Typography sx={{fontFamily:'Poppins', fontWeight:'400',
                                    fontSize:'30.85px',lineHeight:'100%',display: 'flex',alignItems: 'center'}}>
                                        {Number(credit_section.balance_credits)+Number(credit_section.used_credit)}
                                    </Typography>
                              </Box>
                            </Box>
                            </Box>
                            <Box className='belowCredit' sx={{width: '100%',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                              <Box sx={{display:'flex', flexDirection:'column',justifyContent:'flex-start', gap:1}}>
                                <Typography sx={{fontFamily:'Poppins', fontWeight:'500',
                                    fontSize:'20.85px', lineHeight:'100%',display: 'flex',alignItems: 'center', justifyContent:'center',
                                }}>
                                    Used Amount
                                </Typography>
                                <Box sx={{display:'flex', alignItems:'center'}}>
                                  <Box sx={{display:'flex', alignItems:'center'}}>
                                      <CurrencyRupeeIcon sx={{fontSize:'20.85px'}}/>
                                  </Box>
                                  <Typography sx={{fontFamily:'Poppins', fontWeight:'400',
                                  fontSize:'20.85px',lineHeight:'100%',display: 'flex',alignItems: 'center'}}>
                                      {Number(credit_section.used_credit)}
                                  </Typography>
                                </Box>
                              </Box>
                              <Box sx={{display:'flex', flexDirection:'column',justifyContent:'flex-start', gap:1, paddingLeft:8}}>
                                <Typography sx={{fontFamily:'Poppins', fontWeight:'500',
                                    fontSize:'20.85px', lineHeight:'100%',display: 'flex',alignItems: 'center', justifyContent:'center',
                                }}>
                                    Balance Credits
                                </Typography>
                                <Box sx={{display:'flex', alignItems:'center'}}>
                                  <Box sx={{display:'flex', alignItems:'center'}}>
                                      <CurrencyRupeeIcon sx={{fontSize:'20.85px'}}/>
                                  </Box>
                                  <Typography sx={{fontFamily:'Poppins', fontWeight:'400',
                                  fontSize:'20.85px',lineHeight:'100%',display: 'flex',alignItems: 'center'}}>
                                      {Number(credit_section.balance_credits)}
                                  </Typography>
                                </Box>
                              </Box>
                          </Box>
                      </Box>
                      <Box
                        sx={{display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: '#ffffff',justifyContent:'space-between',
                          border: '1px solid #000000',borderRadius: '10.55px',gap: 2,padding: '8px 12px',}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box
                            sx={{width: '30.59px',height: '30.59px',borderRadius: '50%',backgroundColor: '#000000',display: 'flex',
                              alignItems: 'center',justifyContent: 'center',}}>
                            <PendingActionsIcon sx={{ fontSize: '25.88px', color: '#FFFFFF' }} />
                          </Box>
                          <Typography sx={{fontFamily: 'Poppins',fontWeight: 500,fontSize: '10.55px',lineHeight: '100%',}}>
                            Due Amount
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CurrencyRupeeIcon sx={{ fontSize: '10.71px', color: '#000000' }} />
                          <Typography sx={{fontFamily: 'Poppins',fontWeight: 400,fontSize: '20.71px',lineHeight: '100%',}}>
                            {Number(credit_section.due_amount)}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', padding:2}}>
                        <Typography sx={{width:'151.88px', height:'25px', fontFamily:'Poppins', fontWeight:'600', fontSize:'16.77px', lineHeight:'100%'}}>
                            Total Balance
                        </Typography>
                        <Typography sx={{width:'151.88px', fontFamily:'Poppins', fontWeight:'600', fontSize:'36.92px', lineHeight:'100%'}}>
                            {Number(credit_section.totalcredits)}
                        </Typography>
                      </Box>
                      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:1}}>
                        <Box sx={{width:'90%', height:'12.66px', display:'flex', flexDirection:'column'}}>
                            <BorderLinearProgress variant="determinate" value={completedProg} />
                        </Box>
                        <Box sx={{width:'90%',display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Typography sx={{fontFamily:'Poppins', fontWeight:'400', fontSize:'20.15px', lineHeight:'100%',}}>
                            {completedProg}%
                        </Typography>
                        <Typography sx={{fontFamily:'Poppins', fontWeight:'400', fontSize:'20.15px', lineHeight:'100%',}}>
                            {100-completedProg}%
                        </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
        </Box>
      </Box>
      </Box>
  )
}

export default Dashboard
