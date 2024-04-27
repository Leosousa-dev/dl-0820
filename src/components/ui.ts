import styled from 'styled-components';

interface BoxProps {
  direction?: 'colum' | 'row';
  alignment?: 'center' | 'end' | 'start'
}

const Box = styled.button<BoxProps>`
  display: ${props => props.direction || 'flex'};
  justify-content: ${props => {
    if(props.alignment === "start") return 'flex-start';
    if(props.alignment === "end") return 'flex-end';
    return 'center'
  }};
`;

export default Box;
