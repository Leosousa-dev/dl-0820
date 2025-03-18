import styled from "styled-components";
import { theme } from "../../theme/ui";




export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: red;
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;


export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 8px;
    border-bottom: 1px dashed ${theme.colors.forgGray};
`;

export const List = styled.ul`
    width: 100%;
    list-style: none;
    padding-bottom: ${theme.spacing.xlarge};
`;