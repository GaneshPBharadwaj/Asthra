import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const OrderStatusCard = () => {

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
        <Typography sx={{top:'22px',left:'274.5px',width:'50px', height:'19px', position:'absolute',
            font:'Inter',fontSize:'15.94px', fontWeight: 700, color: '#21A945',display: 'flex',alignItems: 'center'
        }}>
          Active
        </Typography>

        <Box sx={{width:'292.94px', height:'217.52px', top:'59px', left:'31px', position:'absolute'}}>
          <Box id="order-placed" sx={{width:'292.94px', height:'42.38px', gap:'22px'}}>
            <Box id="left-part" sx={{width:'190.07px', height:'42.38px', gap:'31px', left:'0px', position:'absolute'}}>
              <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',
                // padding:'13.86px', gap:'8.15px', 
                backgroundColor:'#FFFAC9'}}>
                <AddBoxOutlinedIcon sx={{width:'14.47px', height:'13.86px',top:'13.86px', left:'13.85px', position:'absolute', color:'#F3941E'}} />
              </Box>
              <Typography sx={{width:'116.69px', height:'26px',top:'8.19px', left:'73.38px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                Order Placed
              </Typography>
            </Box>
            <Box id="right-part" sx={{width:'80.87px', height:'31px', top:'5.69px', right:'0px', position:'absolute'}}>
              <Typography sx={{width:'27.71px', height:'31px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                20
              </Typography>
              <Box sx={{width:'19.56px', height:'19.56px', top:'5.72px', left:'61.31px', position:'absolute'}}>
                  <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
              </Box>
            </Box>
          </Box>

          <Box id="approved" sx={{width:'292.94px', height:'42.38px', top:'58.38px', position:'absolute', gap:'28px', }}>
            <Box id="left-part" sx={{width:'190.07px', height:'42.38px', gap:'31px', left:'0px', position:'absolute'}}>
              <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',
                // padding:'13.86px', gap:'8.15px', 
                backgroundColor:'#FFFAC9'}}>
                <AssignmentOutlinedIcon sx={{width:'14.47px', height:'13.86px',top:'13.86px', left:'13.85px', position:'absolute', color:'#F3941E'}} />
              </Box>
              <Typography sx={{width:'116.69px', height:'26px',top:'8.19px', left:'73.38px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                Approved
              </Typography>
            </Box>
            <Box id="right-part" sx={{width:'80.87px', height:'31px', top:'5.69px', right:'0px', position:'absolute'}}>
              <Typography sx={{width:'27.71px', height:'31px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                10
              </Typography>
              <Box sx={{width:'19.56px', height:'19.56px', top:'5.72px', left:'61.31px', position:'absolute'}}>
                  <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
              </Box>
            </Box>
          </Box>

          <Box id="shipped" sx={{width:'292.94px', height:'42.38px', top:'116.76px', position:'absolute',gap:'28px', }}>
            <Box id="left-part" sx={{width:'190.07px', height:'42.38px', gap:'31px', left:'0px', position:'absolute'}}>
              <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',
                // padding:'13.86px', gap:'8.15px', 
                backgroundColor:'#FFFAC9'}}>
                <LocalShippingOutlinedIcon sx={{width:'14.47px', height:'13.86px',top:'13.86px', left:'13.85px', position:'absolute', color:'#F3941E'}} />
              </Box>
              <Typography sx={{width:'116.69px', height:'26px',top:'8.19px', left:'73.38px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                Shipped
              </Typography>
            </Box>
            <Box id="right-part" sx={{width:'80.87px', height:'31px', top:'5.69px', right:'0px', position:'absolute'}}>
              <Typography sx={{width:'27.71px', height:'31px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                10
              </Typography>
              <Box sx={{width:'19.56px', height:'19.56px', top:'5.72px', left:'61.31px', position:'absolute'}}>
                  <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
              </Box>
            </Box>
          </Box>

          <Box id="delivered" sx={{width:'292.94px', height:'42.38px', bottom:'0px', position:'absolute',gap:'48px', }}>
            <Box id="left-part" sx={{width:'190.07px', height:'42.38px', gap:'31px', left:'0px', position:'absolute'}}>
              <Box sx={{width:'42.38px', height:'42.38px', borderRadius:'50%',
                // padding:'13.86px', gap:'8.15px', 
                backgroundColor:'#FFFAC9'}}>
                <CreditCardOutlinedIcon sx={{width:'14.47px', height:'13.86px',top:'13.86px', left:'13.85px', position:'absolute', color:'#F3941E'}} />
              </Box>
              <Typography sx={{width:'116.69px', height:'26px',top:'8.19px', left:'73.38px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'400', fontSize:'17.49px', lineHeight:'100%'}}>
                Delivered
              </Typography>
            </Box>
            <Box id="right-part" sx={{width:'80.87px', height:'31px', top:'5.69px', right:'0px', position:'absolute'}}>
              <Typography sx={{width:'27.71px', height:'31px',top:'0px', left:'0px', position:'absolute',display: 'flex',alignItems: 'center',
                fontFamily:'Poppins', fontWeight:'600', fontSize:'20.75px', lineHeight:'100%'}}>
                10
              </Typography>
              <Box sx={{width:'19.56px', height:'19.56px', top:'5.72px', left:'61.31px', position:'absolute'}}>
                  <ChevronRightIcon sx={{width:'100%', height:'100%',color:'#000000'}} />
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default OrderStatusCard;
