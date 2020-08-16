import React from 'react';

import { ButtonGroupStyled } from './styles';

const ButtonGroup: React.FC = ({ children }) => (
  <ButtonGroupStyled>{children}</ButtonGroupStyled>
);

export default ButtonGroup;
