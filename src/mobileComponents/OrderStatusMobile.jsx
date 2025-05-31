import React from 'react'
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const OrderStatusMobile = () => {

    return (
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
                20
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
                10
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
                10
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
                    10
                </Typography>
                <ChevronRightIcon sx={{width:'20.5px', height:'20.5px', top:'4.2px', right:'0px', position:'absolute',color:'#000000'}} />
            </Box>
          </Box>

        </Box>

        </Box>
    )
}

export default OrderStatusMobile
