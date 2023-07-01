import styled from "styled-components";
import { theme } from "../../global/style/style"

interface AddTaskButtonProps {
    isFormValid: boolean;
}

export const Main = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TasksContainer = styled.div`
    overflow-y: auto;
    height: 100%;
    `;
    
export const NoTasksWarning = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TasksDataContainer = styled.div`
    max-width: 80%;
`;

export const TaskTitle = styled.p`
    font-size: 1.3rem;
    color: ${theme.color.primaryColor};
    word-wrap: break-word
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

export const FormContainer = styled.form`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

export const AddTaskButton = styled.button<AddTaskButtonProps>`
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    border-color: ${theme.color.primaryColor};
    margin: 0;
    cursor: pointer;

    & path {
        fill: ${({ isFormValid }) => (isFormValid ? 'inherit' : theme.color.accentColor)};
    }
`;

export const TasksDivision = styled.hr`
    width: 95%;
    margin: 0.2rem auto;
    height: 1px;
    border: none;
    background-color: white;
`;
