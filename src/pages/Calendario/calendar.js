import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import events from './events';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';

const localizer = BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
  ); 

const MyCalendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor='startDate'
      endAccessor='endDate'
      style={{ height: 500, margin: 50 }}
    />
  </div>
)

export default MyCalendar;
