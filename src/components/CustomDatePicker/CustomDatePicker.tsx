import { DatePickerStyled } from "./CustomReactPickerStyle"

type HandleChangeFunction = (date: Date) => void

export function CustomDatePicker({startDate, handleChange} : {startDate: Date, handleChange: HandleChangeFunction}) {

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to 00:00:00

    return(
        <DatePickerStyled 
                calendarClassName="calendar"
                selected={startDate} 
                onChange={handleChange} 
                inline 
                minDate={today}
                />
    )
}