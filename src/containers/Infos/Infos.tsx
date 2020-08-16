import React from 'react';

import { InfosStyled } from './styles';

const Infos: React.FC = ({ children }) => (
  <>
    <h2 className="section-title secondary">Let&apos;s meet</h2>
    <InfosStyled>{children}</InfosStyled>
  </>
);

export default Infos;
