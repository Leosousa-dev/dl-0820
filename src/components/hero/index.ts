import styled from "styled-components";
import { theme } from "../../theme/ui";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: ${theme.spacing.small};
    padding-bottom: ${theme.spacing.small};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-items: center;
`;

export const Image = styled.img`
    width: 200px;
`;

export const Title = styled.h1`
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.express};
    margin-top: ${theme.spacing.medium};
`;
export const Subtitle = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.secondary};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.forgGray};
  margin-top: ${theme.spacing.xsmall};
`;