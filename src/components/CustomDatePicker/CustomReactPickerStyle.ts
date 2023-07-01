import styled from "styled-components";
import { theme } from "../../global/style/style"

export const CalendarContainer = styled.div`
    border-radius: none;
    background-color: ${theme.color.secondaryBackgroundColor};
`;

export const CalendarButton = styled.button`
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    border-color: ${theme.color.primaryColor};
    margin: 0;
    margin-right: 0.5rem;
    cursor: pointer;
    display: flex;
    padding: 1rem;

    &:hover {
        border-radius: 100%;
        background-color: #746d65;
    }
`;