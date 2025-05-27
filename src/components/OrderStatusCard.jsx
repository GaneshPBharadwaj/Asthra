import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const OrderStatusCard = () => {
  const items = [
    { icon: <AddBoxOutlinedIcon />, label: "Order Placed", value: "20" },
    { icon: <AssignmentOutlinedIcon />, label: "Approved", value: "10" },
    { icon: <LocalShippingOutlinedIcon />, label: "Shipped", value: "15" },
    { icon: <CreditCardOutlinedIcon />, label: "Delivered", value: "01" },
  ];

  return (
    <Box
      sx={{
        width: '355px',
        height: '308px',
        top: '136px',
        left: '1115px',
        borderRadius: '8.47px',
        backgroundColor: '#FFFFFF'}}>
      {/* Header */}
        <FiberManualRecordIcon sx={{ color: '#21A945',top:'25.19px',left:'249px',width:'12.75px', height:'12.75px', position:'absolute' }} />
        <Box sx={{top:'22px',left:'274.5px',width:'50px', height:'19px', position:'absolute'}}>
            <Typography sx={{ font:'Inter',fontSize:'15.94px', fontWeight: 700, color: '#21A945' }}>Active</Typography>
        </Box>
        
        <Box
      sx={{
        width: "292.94px",
        height: "217.52px",
        top: "59px",
        left: "31px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "42.38px",
            backgroundColor: "#ffffff",
            padding: "0 10px",
            borderRadius: "8px",
          }}
        >
          {/* Icon inside yellow circle */}
          <Box
            sx={{
              backgroundColor: "#FFF4CB",
              color:'#F3941E',
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            {item.icon}
          </Box>

          {/* Text and value section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {item.label}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {item.value}
              </Typography>
              <ChevronRightIcon />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>

      {/* {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
            py: 1.5,
            px: 1.5,
            mb: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFF5CC',
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            {item.icon}
          </Box>

          <Typography sx={{ flexGrow: 1, fontWeight: 500 }}>{item.label}</Typography>

          <Typography sx={{ fontWeight: 700, mr: 1 }}>{item.value}</Typography>

          <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
        </Box>
      ))} */}
    </Box>
  );
};

export default OrderStatusCard;
