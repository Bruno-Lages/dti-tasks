import styled from "styled-components";
import { theme } from '../../global/style/style';

export const Container = styled.div`
    padding: .5rem 0.7rem;
    background-color: ${ theme.color.primaryColor };
    margin: 1rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: ${theme.color.accentColor};
    }
`;
