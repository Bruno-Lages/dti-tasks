import styled from "styled-components";
import { theme } from '../../global/style/style';

export const Container = styled.div`
    padding: .5rem 0.7rem;
    background-color: ${ theme.color.secondaryBackgroundColor };
    margin: 0.5rem 1rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: ${theme.color.accentColor};
    }
`;
