import styled from "styled-components";
import { theme } from "../../theme/ui";

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 8px;
    border-bottom: 1px dashed ${theme.colors.forgGray};
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding-bottom: ${theme.spacing.xlarge};
`;