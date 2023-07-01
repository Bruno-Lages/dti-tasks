import styled, { keyframes } from "styled-components";
import { theme } from '../../global/style/style';


// zoom and background color change animation
const fillBackgroundAnimation = keyframes`
    from {
        background-color: transparent;
    }
    to {
        background-color: ${theme.color.primaryColor};
    }
`;


export const Button = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border: solid;
    background-color: transparent;
    border-radius: 100%;
    border-color: ${theme.color.primaryColor};
    margin: 0 0.2rem;
    cursor: pointer;

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        animation: ${fillBackgroundAnimation} 0.3s forwards;
    }
`;