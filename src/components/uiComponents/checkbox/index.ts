import styled from 'styled-components';
import { theme } from '../../../theme/ui';

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px dashed ${theme.colors.iceGray};
    padding: ${theme.spacing.xsmall} 0;
    margin-top: ${theme.spacing.medium};
`;

export const text = styled.label`
    width: 100%;
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.express};
`;