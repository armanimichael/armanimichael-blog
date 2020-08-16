import React from 'react';

import { useSocials } from '../../queries/useSocials';
import { loadSocialImage } from '../../utils/socialsHandler';

import { Social } from '../../components';

export const DefaultSocials: React.FC = () => {
  const socialsInfo = useSocials();

  const generateSocialsElements = () =>
    React.Children.toArray(
      socialsInfo.map(({ image, link, id }) => (
        <Social href={link} image={loadSocialImage(image)} key={id} />
      ))
    );

  return <>{generateSocialsElements()}</>;
};
