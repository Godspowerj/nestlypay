import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles for the date picker
import { CalendarIcon } from "lucide-react"; // Icon for the button

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Store selected date

  return (
    <Popover>
      {/* Button to trigger the date picker */}
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? selectedDate.toDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>

      {/* Popover content containing the date picker */}
      <PopoverContent className="w-auto p-0">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline // Shows the calendar inside the popover
        />
      </PopoverContent>
    </Popover>
  );
};

export default CustomDatePicker;
