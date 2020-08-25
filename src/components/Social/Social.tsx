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
    title={name.toUpperCase()}
  />
);

export default Social;
