import React from 'react';

import { PageButtonStyled, NextPageButton, PreviousPageButton } from './styles';

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
      return '/blog/';
    }

    return `/blog/page/${pageNumber - 1}`;
  };

  const previousRedirect = () => {
    if (pageNumber === 0) {
      return '/blog/page/1';
    }

    if (Number(pageNumber) < Math.ceil(totalPages / 10) - 1) {
      return `/blog/page/${Number(pageNumber) + 1}`;
    }

    return '/blog/';
  };

  return (
    <>
      {previous && latest && <hr />}
      <PageButtonStyled>
        {latest ? (
          <NextPageButton to={latestRedirect()} title="Next Page" />
        ) : null}
        {latest && previous ? <div style={{ width: '20%' }}></div> : null}
        {previous ? (
          <PreviousPageButton to={previousRedirect()} title="Previous Page" />
        ) : null}
      </PageButtonStyled>
    </>
  );
};

export default PageButtons;
