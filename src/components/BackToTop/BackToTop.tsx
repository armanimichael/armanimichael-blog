import React from 'react';

import { BackToTopStyled } from './styles';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTop: React.FC = () => (
  <BackToTopStyled to="#top">
    <IoIosArrowUp />
  </BackToTopStyled>
);

export default BackToTop;
