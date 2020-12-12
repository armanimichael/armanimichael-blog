import styled from 'styled-components';
import { Link } from 'gatsby';

const CategoriesListStyled = styled.aside`
  position: sticky;
  top: 0;
  display: block;
  padding: 2.4rem 10px;
  box-sizing: border-box;

  & h2 {
    margin-top: 0;
    display: block;
  }

  @media all and (max-width: 800px) {
    width: 100%;
    text-align: left;
    padding: 1.2rem 10px;

    & a,
    h2 {
      width: 90%;
    }
  }
`;

const Category = styled(Link)`
  display: block;
  margin-bottom: 0.4em;
`;

const Container = styled.div`
  @media all and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { CategoriesListStyled, Category, Container };
