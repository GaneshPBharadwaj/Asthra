import { Box, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import CalendarModalMobile from './CalendarModalMobile';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const AnalyticGraphMobile = () => {

    let date = new Date();
    const[value, setValue] = useState(dayjs(date))

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
            <DatePicker value={value} onChange={(newValue)=> setValue(newValue)} 
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
            sx={{width: '326px',height: '250px',top:'100px',left:'10px',
            position: 'absolute',display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
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
                { data: [10, 10, 5, 4, 1, 3, 6], stack: 'A', color: '#EA232B' },
                { data: [22, 15, 13, 17, 4, 10, 5], stack: 'A', color: '#FBD7D9' },
                ]}
                layout="horizontal"
                grid={{ vertical: true }}
                width={350}  // slightly smaller than Box for padding
                height={280}
            />
        </Box>
    </Box>
  )
}

export default AnalyticGraphMobile
