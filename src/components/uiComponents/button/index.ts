import styled from "styled-components";
import { theme } from "../../../theme/ui";

export const Button = styled.button`
    background-color: ${theme.colors.express};
    color: ${theme.colors.pureWhite};
    padding: 14px 24px;
    border-radius: 15px;
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.semibold};
    font-family: ${theme.fonts.primary};
    width: 100%;
    border: none;
    cursor: pointer;
`;
