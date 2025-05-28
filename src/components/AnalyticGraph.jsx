import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import CalendarModal from './CalendarModal';

const AnalyticGraph = () => {

    const [calendarOpen, setCalendarOpen] = useState(false);

  const xLabels = [
    'Monday\n01-05-2025',
    'Tuesday\n02-05-2025',
    'Wednesday\n03-05-2025',
    'Thursday\n04-05-2025',
    'Friday\n05-05-2025',
    'Saturday\n06-05-2025',
    'Sunday\n07-05-2025',
  ];

  return (
    <Box sx={{width:'922px', height:'406px', top:'575px', left:'177px', backgroundColor:'#FFFFFF', borderRadius:'8.59px'}}>
        <Typography sx={{ width:'95px',height:'30px',left:'28px',top:'25px',fontFamily:'Poppins',
            fontWeight:'500',fontSize: '20.29px', lineHeight: '100%', position:'absolute'}}>
                Analytics
        </Typography>
        <Box sx={{width:'132.25px', height:'15px', top:'32px', left:'314px', position:'absolute', gap:'8.02px',
            display:'flex', flexDirection:'row' }}>
            <Box sx={{ width: '14.24px', height: '14.24px', borderRadius: '50%', backgroundColor: '#EA232B' }} />
            <Typography sx={{ width:'110px',height:'15px',fontFamily:'Poppins', 
                fontWeight:'400',fontSize: '10.2px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                    Total Order Received
            </Typography>
        </Box>
        <Box sx={{width:'154.25px', height:'15px', top:'32.89px', left:'461.86px', position:'absolute', gap:'8.02px',
            display:'flex', flexDirection:'row' }}>
            <Box sx={{ width: '14.24px', height: '14.24px', borderRadius: '50%', backgroundColor: '#FBD7D9' }} />
            <Typography sx={{ width:'132px',height:'15px',fontFamily:'Poppins', 
                fontWeight:'400',fontSize: '10.2px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                    Orders Approval Pending
            </Typography>
        </Box>
        <Typography sx={{ width:'99px',height:'21px', top:'31px', left:'635px', position:'absolute',
        fontFamily:'Poppins', fontWeight:'500',fontSize: '13.18px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                Sort By Month
        </Typography>
        <Box sx={{width:'118.56px', height:'32.79px', top:'25px', left:'742px',borderRadius:'7.82px',
             border:'0.66px solid rgba(0,0,0,0.35)', position:'absolute'}}>
                <Box sx={{width:'17.66px', height:'17.66px', top:'7.38px', left:'15.46px', position:'absolute',}}>
                    <CalendarMonthOutlinedIcon sx={{width:'13.24px', height:'14.72px', top:'1.47px', left:'2.21px', position:'absolute',}}/>
                </Box>
                <Box onClick={() => setCalendarOpen(prev => !prev)} sx={{width:'60px', height:'18px', top:'6.2px', left:'42px',gap:'12.26px', position:'absolute'}}>
                    <Typography sx={{ width:'60px',height:'18px',
                    fontFamily:'Poppins', fontWeight:'400',fontSize: '12.31px', lineHeight: '100%',  display: 'flex',alignItems: 'center',}}>
                            Mar 2025
                    </Typography>
                </Box>
                { calendarOpen && (
                <Box className="calendar" sx={{width:'334px', height:'300px', borderRadius:'8px', border:'1px', padding:'24px', gap:'24px', backgroundColor:'#FFFFFF',
                    borderColor:'#D9D9D9',boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)', right:'-30px', position:'absolute', top:'40px',
                    zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center'

                }}>
                    <Box>
                    <CalendarModal/>
                    </Box>
                </Box>)
                }
        </Box>
        <Box sx={{width:'705.37px', height:'270.8px', left:'60.39px', top:'66.63px', position:'absolute'}}>
            <BarChart
                height={350}
                series={[
                    { data: [10, 10, 5, 4, 1, 3, 6], stack: 'A', color: '#EA232B'},
                    { data: [22, 15, 13, 17, 4, 10, 5], stack: 'A', color: '#FBD7D9'},
                ]}
                xAxis={[
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
                yAxis={[
                    {
                    tickMinStep: 5,
                    min: 0,
                    max: 25,
                    tickValues: [0, 5, 10, 15, 20, 25], // manually defined ticks
                    },
                ]}
            />
        </Box>
    </Box> 
  );
};

export default AnalyticGraph;