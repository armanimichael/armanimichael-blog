import React from 'react';

import { SocialStyled } from './styles';

interface Props {
  href: string;
  image: string;
  name: string;
  isSmall?: boolean;
}

const Social: React.FC<Props> = ({ href, image, name, isSmall = false }) => (
  <SocialStyled
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
    image={image}
    isSmall={isSmall}
    title={name.substring(0, 1).toUpperCase() + name.substring(1)}
  />
);

export default Social;
