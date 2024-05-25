
import React from "react";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, setValue] = useState(new Date());
  const onChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      {/*  CLAENDER */}
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Calender; 
