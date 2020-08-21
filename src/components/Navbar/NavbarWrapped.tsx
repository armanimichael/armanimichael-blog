import React, { useState } from 'react';

import {
  NavbarWrappedStyled,
  ContentWrapped,
  DisableBodyScroll,
  Logo,
} from './styles';

import MenuButton from './MenuButton';

interface Props {
  isHidden: boolean;
  logoImg?: string;
  themeButton: JSX.Element;
  [index: string]: any;
}

const NavbarWrapped: React.FC<Props> = props => {
  const [isOpen, setOpen] = useState(false);
  const links = React.Children.map(props.children, link =>
    React.cloneElement(link as React.ReactElement, {
      onClick: () => setOpen(false),
    })
  );

  return (
    <NavbarWrappedStyled {...props}>
      <DisableBodyScroll disableScroll={isOpen && !props.isHidden} />
      <Logo
        isWrapped={true}
        image={props.logoImg}
        to="/"
        size={40}
        marginLeft={35}
      />
      <MenuButton isClicked={isOpen} onClick={() => setOpen(!isOpen)} />
      <ContentWrapped isClicked={isOpen} isHidden={props.isHidden}>
        {props.themeButton}
        {links}
      </ContentWrapped>
    </NavbarWrappedStyled>
  );
};

export default NavbarWrapped;
