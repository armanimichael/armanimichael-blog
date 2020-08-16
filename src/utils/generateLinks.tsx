import React from 'react';
import { Link } from 'gatsby';

import { useNavbarlinks } from '../queries/useNavbarLinks';

export const generateLinks = (): any => {
  const links = useNavbarlinks();

  return links.map(({ path, name, id }) => (
    <Link key={id} to={path}>
      {name}
    </Link>
  ));
};
