import styled from "styled-components";
import { theme } from '../../global/style/style';

export const Container = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 1rem;
    margin-top: 0;
    padding-top: 1rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    
    & * {
        margin: 0 0.3rem;
        font-size: 1.2rem;
    }
`;

export const ToggleButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 0 0.5rem;

    font-size: 1.5rem;
    cursor: pointer;

    &:hover * {
        color: ${theme.color.primaryColor};
    }
`;

export const HorizontalLine = styled.hr`
    width: 95%;
    margin: 1rem auto;
    height: 1px;
    border: none;
    background-color: ${theme.color.accentColor};
`;