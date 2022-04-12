import styled from 'styled-components';

export const MyButton = styled.button`

  background: ${props => props.success ? "green" : props.danger ? "tomato" : props.primary ? "blue" : props.color };
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.success ? "green" : props.danger ? "tomato" : props.primary ? "blue" : "none" };
  border-radius: 3px;
  cursor: pointer;
  opacity: 80%
`;

