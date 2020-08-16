import React from 'react';

import { DefaultSocials } from '../../utils/socialsHandler';

interface Props {
  title?: string;
}

const Socials: React.FC<Props> = ({
  title = "Let's Get Social!",
  children,
}) => (
  <>
    <h2 className="section-title">{title}</h2>
    <section className="transparent socials">
      <DefaultSocials />
      {children}
    </section>
  </>
);

export default Socials;
