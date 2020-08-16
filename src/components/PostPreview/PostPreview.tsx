import React from 'react';
import { Link } from 'gatsby';

import { useCategories } from '../../queries/useCategories';

import { PostStyled, Container, Category } from './styles';

interface Props {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  path: string;
}

interface Category {
  background: string;
  color: string;
  description: string;
  icon: string;
  name: string;
}

const PostPreview: React.FC<Props> = ({
  title,
  excerpt,
  category,
  date,
  path,
}) => {
  const dateFormatted = new Date(date).toLocaleDateString().replace(/\//g, '-');
  const categoryData: Category = useCategories().find(
    ({ name }) => name.toLowerCase() === category.toLowerCase()
  ) as Category;

  return (
    <Container>
      <PostStyled to={path}>
        <Link to={path}>
          <h2>{title}</h2>
        </Link>
        <span>{dateFormatted}</span>
        <p>{excerpt}</p>
      </PostStyled>
      <Category
        color={categoryData ? categoryData.color : 'black'}
        background={categoryData ? categoryData.background : 'white'}
        to={
          '/blog/category/' + category.toLowerCase().replace(/ /g, '-').trim()
        }
      >
        {category}
      </Category>
    </Container>
  );
};

export default PostPreview;
