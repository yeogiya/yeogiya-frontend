import { useState } from "react";
import Calendar from "react-calendar";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Calendar
      calendarType="gregory"
      onChange={() => setSelectedDate}
      value={selectedDate}
    />
  );
};

export default DatePicker;
