import styled from 'styled-components';

export default styled.button`
  background: transparent;
  font-size: 36px;
  border-radius: 3px;
  border: 2px solid #d64541;
  color: #d64541;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
