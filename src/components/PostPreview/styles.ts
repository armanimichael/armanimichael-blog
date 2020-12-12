import styled from 'styled-components';
import { Link } from 'gatsby';

interface CategoryProps {
  color: string;
  background: string;
}

const PostStyled = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.paragraph.primary + '7f'};
  padding: 2.4rem 10px;
  margin-right: 12em;
  box-sizing: border-box;

  & a {
    transition: opacity 0.2s ease;
    text-decoration: none;
    width: 90%;

    &:hover {
      opacity: 0.5;
    }
  }

  & h2 {
    margin: 0;
  }

  & > a > p {
    margin: 0 0 20px 0;
  }

  @media all and (max-width: 800px) {
    width: 100%;
    padding: 1.2rem 10px;
    margin-right: 0;
  }
`;

const Category = styled(Link)<CategoryProps>`
  margin: 10px 0 0 0;
  width: 90%;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;

  & span {
    color: ${props => props.color};
    border-radius: 10px;
    font-size: 18px;
    padding: 0 10px;
    background: ${props => props.background};
  }

  @media all and (pointer: fine) {
    &:hover {
      opacity: 0.5;
    }
  }
`;

const DateContainer = styled.p`
  font-size: 18px;
  margin: 0;
  opacity: 80%;
`;

const Separator = styled.div`
  width: 40px;
  height: 8px;
  background: ${props => props.theme.button.primary};
  margin: 10px 0;
`;

export { PostStyled, Category, DateContainer, Separator };
