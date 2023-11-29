// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

const date = new Date();


const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <div className="container mx-auto ">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="w-full p-2 border rounded-md border-gray-500"
      />
    </div>
  );
};

export default DatePickerComponent;
