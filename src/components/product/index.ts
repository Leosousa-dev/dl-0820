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