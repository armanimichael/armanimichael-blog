import React, { memo, useEffect, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import { NavbarStyled, NavbarExtended, Logo } from './styles';

import { generateLinks } from '../../utils/generateLinks';
import NavbarWrapped from './NavbarWrapped';

interface ThemeButtonProps {
  openThemesModal: React.MouseEventHandler<SVGElement>;
}

interface NavbarProps extends ThemeButtonProps {
  logoSrc?: string;
  allowTheming?: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ openThemesModal }) => (
  <IoMdSettings onClick={openThemesModal} />
);

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  openThemesModal,
  allowTheming,
}) => {
  const [isWrapped, setMenuSize] = useState(false);

  // Check state before any zoom
  useEffect(() => {
    handleNavbarOverflow();
  }, []);

  // Check if zoom overflows
  useEffect(() => {
    window.addEventListener('resize', handleNavbarOverflow, true);

    return () => {
      window.removeEventListener('resize', handleNavbarOverflow, true);
    };
  });

  const handleNavbarOverflow = () => {
    const navbar: HTMLElement = document.getElementById(
      'navbar-extended'
    ) as HTMLElement;

    const navbarElements: NodeListOf<Element> = document.querySelectorAll(
      '#navbar-extended > *'
    );

    const logo: HTMLElement = document.getElementById('logo') as HTMLElement;

    let navbarElementsWidth = 0;
    for (let i = 0; i < navbarElements.length; i++) {
      navbarElementsWidth += navbarElements[i].clientWidth;
    }

    if (logo) {
      setMenuSize(
        navbar.clientWidth - (logo.clientWidth + 100) < navbarElementsWidth
      );
    } else {
      setMenuSize(navbar.clientWidth < navbarElementsWidth);
    }
  };

  return (
    <NavbarStyled>
      <div id="top" />
      <NavbarExtended isHidden={isWrapped} id="navbar-extended">
        <Logo isWrapped={false} id="logo" image={logoSrc} to="/" />
        {generateLinks()}
        {allowTheming && <ThemeButton openThemesModal={openThemesModal} />}
      </NavbarExtended>

      <NavbarWrapped
        isHidden={!isWrapped}
        id="navbar-wrapped"
        logoImg={logoSrc}
      >
        {allowTheming && <ThemeButton openThemesModal={openThemesModal} />}
        {generateLinks()}
      </NavbarWrapped>
    </NavbarStyled>
  );
};

export default memo(Navbar);
