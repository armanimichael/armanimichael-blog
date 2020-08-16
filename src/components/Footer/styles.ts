import styled from 'styled-components';

// * Props
interface LogoProps {
  image: string;
  backgroundColor?: string;
}

// * Styles
const FooterStyled = styled.footer`
  padding: 40px;
  background: rgb(20, 20, 20);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;

  & > div {
    margin: 0px 30px;
    display: flex;
    text-align: left;
    flex-direction: column;

    & p,
    a,
    h3 {
      color: rgba(255, 255, 255, 0.9);
    }

    & a {
      margin-bottom: 6px;
    }

    & p {
      margin-top: 0;
    }
  }

  @media all and (max-width: 800px) {
    padding: 30px;

    flex-direction: column;
    justify-content: center;

    & > div:not(:first-child) {
      & h3 {
        margin: 30px 0 6px 0;
      }
    }
  }
`;

const Logo = styled.div<LogoProps>`
  width: 100px;
  height: 100px;
  background: ${props => props.backgroundColor || 'transparent'};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media all and (max-width: 800px) {
    width: 50px;
    height: 50px;
    border: 4px solid ${props => props.backgroundColor || 'transparent'};
  }
`;

const SocialsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid rgb(50, 50, 50);
  background: rgb(20, 20, 20);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;

  @media all and (max-width: 800px) {
    padding: 30px 0;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 200px;
  justify-content: flex-start;
  align-items: flex-start;

  & a {
    margin-right: 20px;
    text-transform: capitalize;
  }
`;

export { FooterStyled, Logo, SocialsContainer, LinksContainer };
