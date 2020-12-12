import styled from 'styled-components';

const mobileHeight = '50px';
const NavbarStyled = styled.nav`
  height: 80px;
  width: 100%;
  background: ${props => props.theme.navbar.background};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 2.5em;

  @media all and (max-width: 800px) {
    height: ${mobileHeight};
    justify-content: space-evenly;
  }
`;

const NavItem = styled.div`
  width: 80px;
  height: 80px;
  font-size: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & svg,
  span {
    cursor: pointer;

    &::selection {
      background: transparent;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  & svg {
    font-size: 1em;
  }

  & span {
    font-size: 0.8em;
  }

  &:nth-child(2) {
    margin: 0 4rem;
  }

  @media all and (max-width: 800px) {
    width: ${mobileHeight};
    height: ${mobileHeight};
    font-size: 32px;
  }
`;

export { NavbarStyled, NavItem };
