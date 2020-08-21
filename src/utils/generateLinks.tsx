import React from 'react';
import { Link } from 'gatsby';

import { useNavbarlinks } from '../queries/useNavbarLinks';

export const generateLinks = (): any => {
  const links = useNavbarlinks();

  return links.map(({ path, name, id }) => {
    const isInternal = /^\/(?!\/)/.test(path);

    if (isInternal) {
      return (
        <Link key={id} to={path}>
          {name}
        </Link>
      );
    }

    return (
      <a
        key={id}
        href={path}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {name}
      </a>
    );
  });
};
