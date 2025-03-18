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


export const Content = styled.div`
    display: flex;
    max-width: 600px;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};
    width: 100%;
    padding-top: ${theme.spacing.small};
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: ${theme.spacing.xsmall};
`;

export const Image = styled.img`
    width: 200px;
`;

export const Title = styled.h1`
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.express};
`;
export const Subtitle = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.secondary};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.forgGray};
`;