import styled from 'styled-components';
import { Link } from 'gatsby';

interface CategoryWebProps {
  background: string;
  color: string;
}

const ContainerWeb = styled.div`
  margin: 40px;
  width: calc(80% - 80px);
  display: flex;
  direction: row;

  &:first-child {
    margin: 80px 40px 40px 40px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const PostStyledWeb = styled(Link)`
  width: 70%;
  display: block;
  background: ${props => props.theme.backgrounds.secondary};
  padding: 40px;
  box-sizing: border-box;
  border-radius: 0 40px 40px 0;
  text-decoration: none;

  & h2,
  p {
    color: ${props => props.theme.headline.secondary + 'cd'};
    margin-bottom: 0;
  }

  & h2 {
    margin-top: 0;
  }
`;

const CategoryWeb = styled(Link)<CategoryWebProps>`
  width: 30%;
  display: flex;
  border-radius: 40px 0 0 40px;
  background: ${props => props.background};
  color: ${props => props.color};
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  padding: 40px;
  text-align: center;
`;

const SeparatorWeb = styled.div`
  width: 60px;
  height: 14px;
  background: ${props => props.theme.button.primary};
  margin: 20px 0;
`;

const BottomBarWeb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & span {
    color: ${props => props.theme.headline.secondary + 'b3'};
  }
`;

export { PostStyledWeb, ContainerWeb, CategoryWeb, SeparatorWeb, BottomBarWeb };
