import React from 'react';
import { Link } from 'gatsby';

import { useNavbarlinks } from '../queries/useNavbarLinks';

const validateLink = (link: string): string => {
  let parsedLink = link.toLowerCase();

  // Check for Begin and End Slashes
  parsedLink = parsedLink[0] !== '/' ? `/${parsedLink}` : parsedLink;
  if (parsedLink.lastIndexOf('/') === -1) {
    parsedLink = `${parsedLink}/`;
  }

  // Check for url validity
  const urlMatch = new RegExp(/\/[a-z0-9|-]+\//g);
  const validUrl = urlMatch.test(parsedLink);

  // Return link if valid or fix and return
  return validUrl ? parsedLink : parsedLink.replace(/[^a-z0-9|\/|-]+/g, '');
};

const generateLinks = (): any => {
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

export { validateLink, generateLinks };
