import React from 'react';

import { SocialStyled } from './styles';

interface Props {
  href: string;
  image: string;
  isSmall?: boolean;
}

const Social: React.FC<Props> = ({ href, image, isSmall = false }) => (
  <SocialStyled
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
    image={image}
    isSmall={isSmall}
  />
);

export default Social;
