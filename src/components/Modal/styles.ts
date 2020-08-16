import styled from 'styled-components';

const ModalStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgrounds.primary + '1a'};
  backdrop-filter: blur(4px);
  z-index: 500;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @supports (backdrop-filter: blur) {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Card = styled.div`
  position: relative;
  width: 50vw;
  background: ${props => props.theme.backgrounds.primary};
  color: ${props => props.theme.paragraph.primary};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 80px rgba(0, 0, 0, 0.6);

  @media all and (max-width: 800px) {
    width: 92vw;
  }
`;

const Title = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${props => props.theme.card.paragraph};
  display: block;
  padding: 20px 40px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  & h3,
  svg {
    color: ${props => props.theme.card.background};
    margin: 0;
  }

  & svg {
    font-size: 28px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.alerts.danger};
    }
  }
`;

const Content = styled.div`
  padding: 20px 40px;
  background: ${props => props.theme.card.background};

  & p,
  a,
  li {
    color: ${props => props.theme.card.paragraph};
  }

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.card.heading};
  }
`;

export { ModalStyled, Card, Title, Content };
