import styled from "styled-components";
import { theme } from "../../../theme/ui";
export const Checkbox = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid ${theme.colors.forgGray};
    transition: all 0.2s;

    &:checked {
        background-color: ${theme.colors.express};
        border-color: ${theme.colors.express};
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L3.5 6.5L8.5 1.5' stroke='white' stroke-width='2'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
    }
`;
