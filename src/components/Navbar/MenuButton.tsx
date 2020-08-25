import React from 'react';

import { MenuButtonStyled, Top, Bottom, Center } from './styles';

interface Props {
  isClicked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButton: React.FC<Props> = ({ isClicked, onClick }) => (
  <MenuButtonStyled onClick={onClick} title="Open Navigation">
    <Top isClicked={isClicked} />
    <Center isClicked={isClicked} />
    <Bottom isClicked={isClicked} />
  </MenuButtonStyled>
);

export default MenuButton;
