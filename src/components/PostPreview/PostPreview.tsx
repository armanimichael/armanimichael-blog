import React from 'react';
import { Link } from 'gatsby';

import { useCategories } from '../../queries/useCategories';

import { PostStyled, Category, DateContainer, Separator } from './styles';

interface Props {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  path: string;
}

interface CategoryWeb {
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
  const dateFormatted = new Date(date)
    .toLocaleDateString()
    .replace(/\//g, ' / ');
  const categoryLink = `/category/${category
    .toLowerCase()
    .replace(/ /g, '-')
    .trim()}`;

  const categoryData: CategoryWeb = useCategories().find(
    ({ name }) => name.toLowerCase() === category.toLowerCase()
  ) as CategoryWeb;

  return (
    <PostStyled>
      <Link to={path}>
        <h2>{title}</h2>
        <DateContainer>{dateFormatted}</DateContainer>
        <Separator />
        <p>{excerpt}</p>
      </Link>
      <Category
        color={categoryData.color}
        background={categoryData.background}
        to={categoryLink}
      >
        <span>{category}</span>
      </Category>
    </PostStyled>
  );
};

export default PostPreview;
