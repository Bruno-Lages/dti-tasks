import styled from "styled-components";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerStyled = styled(DatePicker)`
    & .mais {   
        
            margin-bottom: -0.5rem !important;
            margin-left: 1rem !important;
            background-color: red !important;
        }
    
    /* div.react-datepicker__month-container {
        margin-bottom: -0.8rem;
        margin-left: 1rem;
    } */
`;