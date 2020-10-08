import React from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import { Container, PageButtonStyled } from './styles';

interface Props {
  previous: boolean;
  latest: boolean;
  pageNumber: number;
  totalPages: number;
}

const PageButtons: React.FC<Props> = ({
  previous,
  latest,
  pageNumber,
  totalPages,
}) => {
  const latestRedirect = () => {
    if (Number(pageNumber) === 1) {
      return '/';
    }

    return `/page/${pageNumber - 1}`;
  };

  const previousRedirect = () => {
    if (pageNumber === 0) {
      return '/page/1';
    }

    if (Number(pageNumber) < Math.ceil(totalPages / 10) - 1) {
      return `/page/${Number(pageNumber) + 1}`;
    }

    return '/';
  };

  return (
    <>
      {previous && latest && <hr className="blog-feed-separator" />}
      <Container latest={latest} previous={previous}>
        {latest && (
          <PageButtonStyled
            latest={latest}
            previous={previous}
            to={latestRedirect()}
            title="Latest Posts"
          >
            <IoMdArrowDropleft />
            Latest Posts
          </PageButtonStyled>
        )}
        {previous && (
          <PageButtonStyled
            latest={latest}
            previous={previous}
            to={previousRedirect()}
            title="Older Posts"
          >
            Older Posts <IoMdArrowDropright />
          </PageButtonStyled>
        )}
      </Container>
    </>
  );
};

export default PageButtons;
