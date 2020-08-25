import React from 'react';

import { BackToTopStyled } from './styles';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTop: React.FC = () => (
  <BackToTopStyled to="#top" title="Back to Top">
    <IoIosArrowUp />
  </BackToTopStyled>
);

export default BackToTop;
