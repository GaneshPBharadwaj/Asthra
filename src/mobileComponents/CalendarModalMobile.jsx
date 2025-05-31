import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {DatePicker} from '@mui/x-date-pickers/DatePicker'

export default function CalendarModalMobile() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{width:'334px', height:'344px'}}/>
    </LocalizationProvider>
  );
}
