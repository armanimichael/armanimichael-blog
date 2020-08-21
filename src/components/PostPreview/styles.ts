import styled from 'styled-components';
import { Link } from 'gatsby';

interface CategoryProps {
  background: string;
  color: string;
}

const Container = styled.div`
  width: calc(50% + 40px);
  margin: 0px 40px 0px 40px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  &:first-child {
    margin: 40px 40px 0px 40px;
  }

  @media screen and (max-width: 800px) {
    &:first-child {
      margin: 44px 30px 0 30px;
    }

    margin: 0px 30px 0 30px;
    width: 100%;
  }
`;

const PostStyled = styled(Link)`
  display: block;
  border: 2px solid ${props => props.theme.backgrounds.secondary};
  padding: 40px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  text-decoration: none;

  & span {
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    padding: 30px;
  }
`;

const Category = styled(Link)<CategoryProps>`
  display: block;
  width: calc(50% + 40px);
  text-decoration: none;
  box-sizing: border-box;
  padding: 10px 40px;
  border: 2px solid ${props => props.theme.backgrounds.secondary};
  border-top: none;
  border-radius: 0 0 10px 10px;
  text-align: center;
  background: ${props => props.background};
  color: ${props => props.color};
  margin-bottom: 40px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 10px 30px;
    margin-bottom: 44px;
  }
`;

export { PostStyled, Container, Category };
