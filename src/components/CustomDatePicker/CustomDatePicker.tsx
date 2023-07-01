import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
// due to library restrictions, it was used a css file for some calendar parts instead of styled components 
import './css.css'

import { BsCalendarPlus } from "react-icons/bs";
import { CalendarButton, CalendarContainer } from "./CustomReactPickerStyle";

interface CustomDatePickerProps {
    startDate: Date | null,
    handleChange: (date: Date) => void,
    ariaLabel: string
}

export function CustomDatePicker({startDate, handleChange, ariaLabel} : CustomDatePickerProps) {

    // define the minimum date as today, 00:00:00
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <DatePicker 
            minDate={today}
            selected={startDate} 
            onChange={handleChange}
            withPortal 
            calendarContainer={CalendarContainer}
            disabledKeyboardNavigation
            customInput={
                <CalendarButton aria-label={ariaLabel} type="button">
                    <BsCalendarPlus />
                </CalendarButton>
            } 
            />
    );
   
}