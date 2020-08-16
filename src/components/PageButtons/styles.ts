import styled from 'styled-components';
import { Link } from 'gatsby';

const arrowSize = 8;
const PageButtonStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled(Link)`
  border: solid ${props => props.theme.paragraph.primary};
  border-width: 0 ${arrowSize}px ${arrowSize}px 0;
  display: inline-block;
  padding: ${arrowSize}px;
  transform: rotate(135deg);
  margin: ${arrowSize * 4}px 0;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const NextPageButton = styled(PageButton)`
  transform: rotate(135deg);
`;

const PreviousPageButton = styled(PageButton)`
  transform: rotate(-45deg);
`;

export { PageButtonStyled, NextPageButton, PreviousPageButton };
