import React from 'react';
import { Link } from 'gatsby';

import { useCategories } from '../../queries/useCategories';

import {
  PostStyledWeb,
  ContainerWeb,
  CategoryWeb,
  SeparatorWeb,
  BottomBarWeb,
} from './web-styles';

import {
  PostStyledMobile,
  CategoryMobile,
  DateMobile,
  SeparatorMobile,
} from './mobile-styles';

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
    <>
      {/* //* WEB COMPONENTS */}
      <ContainerWeb>
        <CategoryWeb
          color={categoryData.color}
          background={categoryData.background}
          to={categoryLink}
        >
          {category}
        </CategoryWeb>
        <PostStyledWeb to={path}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <SeparatorWeb />
          <BottomBarWeb>
            <span>{dateFormatted}</span>
            <span>Read more...</span>
          </BottomBarWeb>
        </PostStyledWeb>
      </ContainerWeb>

      {/* //* MOBILE COMPONENTS */}
      <PostStyledMobile>
        <Link to={path}>
          <h2>{title}</h2>
          <DateMobile>{dateFormatted}</DateMobile>
          <SeparatorMobile />
          <p>{excerpt}</p>
        </Link>
        <CategoryMobile
          color={categoryData.color}
          background={categoryData.background}
          to={categoryLink}
        >
          <span>{category}</span>
        </CategoryMobile>
      </PostStyledMobile>
    </>
  );
};

export default PostPreview;
