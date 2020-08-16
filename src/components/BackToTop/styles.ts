import styled from 'styled-components';
import { Link } from 'gatsby';

const BackToTopStyled = styled(Link)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 38px;
  height: 38px;
  background: ${props => props.theme.backgrounds.primary};
  box-sizing: border-box;
  border: 2px solid ${props => props.theme.paragraph.primary};
  z-index: 5000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 38px;
  }
`;

export { BackToTopStyled };
