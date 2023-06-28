import styled from "styled-components";
import { theme } from "../../global/style/style"

export const Main = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TaskTitle = styled.p`
    font-size: 1rem;
    /* color: ${theme.color.secondaryColor}; */
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-size: .7rem;
    height: 1.5rem;
    
    >*  {
           margin-right: 0.3rem;
        };
`;

export const TextArea = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    font-family: inherit;
    padding: 0.5rem 0;
    
    &:focus, &:focus, &:focus{
        outline: none;
    }
`;

export const CalendarButton = styled.button`
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    border-color: ${theme.color.secondaryColor};
    margin: 0;
    margin-right: 0.5rem;
    cursor: pointer;
`;

export const AddTaskButton = styled.button`
    font-size: 1.3rem;
    border: none;
    background-color: transparent;
    border-color: ${theme.color.secondaryColor};
    margin: 0;
    cursor: pointer;
`;
