import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

// * Props
interface NavbarProps {
  isHidden: boolean;
}

interface ButtonProps {
  isClicked: boolean;
}

interface ContentWrappedProps extends NavbarProps {
  isClicked: boolean;
}

interface DisableBodyScrollProps {
  disableScroll: boolean;
}

interface LogoProps {
  isWrapped: boolean;
  image?: string;
  size?: number;
  marginLeft?: number;
}

// * Styles
const NavbarStyled = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  overflow-x: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  @media all and (max-width: 800px) {
    height: 50px;
  }
`;

const Navbar = styled.nav`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${props => props.theme.navbar.background};
  overflow-y: hidden;

  & a {
    color: ${props => props.theme.paragraph.primary};
    font-weight: bold;
  }
`;

const NavbarExtended = styled(Navbar)<NavbarProps>`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  /* padding: 10px; */
  justify-content: space-between;
  justify-content: flex-start;
  align-items: center;
  z-index: ${props => (props.isHidden ? 100 : 200)};

  & span {
    font-size: 22px;
    cursor: pointer;
    margin: 0 40px;

    &::selection {
      background: none;
    }
  }

  & svg {
    font-size: 28px;
    margin: 0 20px;
    vertical-align: middle;
    transform: rotate(0deg);
    transition: 0.2s ease transform;

    &:hover {
      transform: rotate(360deg);
    }
  }

  & a:not(#logo) {
    position: relative;
    padding: 0 20px;
    margin: 0 20px;
    word-break: keep-all;
    white-space: nowrap;
    text-transform: capitalize;
    text-decoration: none;
    border-radius: 100px;
    transition: color 0.2s cubic-bezier(0.5, 0, 0.5, 2);

    &::after {
      content: '';
      z-index: -1;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.button.primary};
      top: 0;
      left: 0;
      border-radius: 100px;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 2);
    }

    &:hover {
      color: ${props => props.theme.button.primaryColor};
      &::after {
        transform: scale(1);
      }
    }
  }

  /* Overloads Overflow checks if under max-width */
  @media screen and (max-width: 800px) {
    z-index: 200;
  }
`;

const NavbarWrappedStyled = styled(Navbar)<NavbarProps>`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  z-index: ${props => (props.isHidden ? 100 : 200)};

  /* Overloads Overflow checks if under max-width */
  @media screen and (max-width: 800px) {
    z-index: 200;
  }
`;

const MenuButtonStyled = styled.button`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  position: relative;
  margin-right: 36px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  display: block;
  background: ${props => props.theme.paragraph.primary};
  position: absolute;
`;

const Top = styled(Line)<ButtonProps>`
  transform: rotate(0);
  transition: 0.2s transform ease, 0.2s top ease, 0.2s background ease;
  top: ${props => (props.isClicked ? '17px' : '7px')};
  transform: ${props => (props.isClicked ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const Center = styled(Line)<ButtonProps>`
  top: 17px;
  transition: 0.2s opacity ease, 0.2s, 0.2s background ease;
  opacity: ${props => (props.isClicked ? 0 : 1)};
`;

const Bottom = styled(Line)<ButtonProps>`
  transform: rotate(0);
  transition: 0.2s transform ease, 0.2s top ease, 0.2s background ease;
  top: ${props => (props.isClicked ? '17px' : '27px')};
  transform: ${props => (props.isClicked ? 'rotate(-45deg)' : 'rotate(0deg)')};
`;

const ContentWrapped = styled.div<ContentWrappedProps>`
  position: fixed;
  height: 100vh;
  background: ${props => props.theme.backgrounds.primary};
  border-right: 2px solid rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  overflow-y: auto;
  transition: transform 0.2s ease;
  transform: ${props =>
    props.isClicked ? 'translate(0%, 0)' : 'translate(-100%, 0)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: ${props => (props.isHidden ? 0 : 1)};
  z-index: 200;

  & svg {
    font-size: 28px;
    margin: 1em auto 0 auto;
    vertical-align: middle;
    min-height: 28px;
  }

  & a,
  span {
    font-size: 24px;
    margin: 1em 2em 0 2em;
    word-break: break-all;
    white-space: normal;
    text-transform: capitalize;

    &:last-child {
      margin: 1em 2em 1em 2em;
    }
  }

  & span {
    text-align: center;
    cursor: pointer;

    &::selection {
      background: none;
    }
  }

  /* Overloads Opacity if under max-width */
  @media screen and (max-width: 800px) {
    opacity: 1;
  }
`;

const Logo = styled(Link)<LogoProps>`
  width: ${props => props.size || 65}px;
  height: ${props => props.size || 65}px;
  box-sizing: border-box;
  margin: ${props =>
    props.marginLeft ? `0 0 0 ${props.marginLeft}px` : '0 20px 0 40px'};
  position: ${props => (props.isWrapped ? 'absolute' : 'relative')};
  left: 0;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const DisableBodyScroll = createGlobalStyle<DisableBodyScrollProps>`
  body, html {
    overflow-y: ${props => (props.disableScroll ? 'hidden' : 'auto ')};
  }
`;

export {
  NavbarStyled,
  NavbarExtended,
  NavbarWrappedStyled,
  Top,
  Bottom,
  Center,
  MenuButtonStyled,
  ContentWrapped,
  DisableBodyScroll,
  Logo,
};
