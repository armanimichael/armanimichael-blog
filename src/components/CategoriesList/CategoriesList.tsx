import React from 'react';

import { CategoriesListStyled, Category, Container } from './styles';

import { useCategories } from '../../queries/useCategories';

const CategoriesList: React.FC = () => (
  <CategoriesListStyled>
    <Container>
      <h2>Categories</h2>
      {useCategories().map(category => (
        <Category
          to={`/category/${category.name
            .toLowerCase()
            .replace(/ /g, '-')
            .trim()}`}
          key={category.id}
        >
          {category.name}
        </Category>
      ))}
    </Container>
  </CategoriesListStyled>
);

export default CategoriesList;
