import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { ModalStyled, Card, Title, Content } from './styles';

interface Props {
  title?: string;
  setVisibility: React.MouseEventHandler<SVGElement>;
}

const MenuButton: React.FC<Props> = ({
  setVisibility,
  title = 'Modal',
  children,
}) => (
  <ModalStyled>
    <Card>
      <Title>
        <h3>{title}</h3>
        <IoIosCloseCircleOutline onClick={setVisibility} />
      </Title>
      <Content>{children}</Content>
    </Card>
  </ModalStyled>
);

export default MenuButton;
