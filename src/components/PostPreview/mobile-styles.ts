import styled from 'styled-components';
import { Link } from 'gatsby';

interface CategoryProps {
  color: string;
  background: string;
}

const PostStyledMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.paragraph.primary + '7f'};
  padding: 20px;

  & a {
    text-decoration: none;
    width: 90%;
  }

  & h2 {
    margin: 0;
  }

  & > a > p {
    margin: 0 0 20px 0;
  }

  @media all and (min-width: 801px) {
    display: none;
  }
`;

const CategoryMobile = styled(Link)<CategoryProps>`
  margin: 10px 0 0 0;
  width: 90%;
  display: flex;
  align-items: center;

  & span {
    color: ${props => props.color};
    border-radius: 10px;
    font-size: 18px;
    padding: 0 10px;
    background: ${props => props.background};
  }
`;

const DateMobile = styled.p`
  font-size: 18px;
  margin: 0;
  opacity: 80%;
`;

const SeparatorMobile = styled.div`
  width: 40px;
  height: 8px;
  background: ${props => props.theme.button.primary};
  margin: 10px 0;
`;

export { PostStyledMobile, CategoryMobile, DateMobile, SeparatorMobile };
