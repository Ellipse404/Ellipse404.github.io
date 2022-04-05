import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField, Box, FormControl, Button } from "@mui/material";
import ChildHeaderComponent from "../ChildHeader";

const DatePickerComponent = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <React.Fragment>
      <Box sx={{width: '100% !important'}}>
      <ChildHeaderComponent header="React DatePicker" />
      </Box>
      {/* <Box style={{ padding: "16px", background: "#216ba5", color: "#fff"}}> */}
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        // showTimeSelect
        // dateFormat="Pp"
        onChange={(update) => setDateRange(update)}
        isClearable={true}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {/* </Box> */}
    </React.Fragment>
  );
};

export default DatePickerComponent;
