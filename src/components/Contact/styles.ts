import styled from 'styled-components';

const ContactStyled = styled.a`
  display: block;
  position: relative;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }

  & h3 {
    margin-top: 40px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 0;
  }

  @media all and (max-width: 800px) {
    margin: 30px;

    & h3 {
      margin-top: 30px;
    }
  }
`;

const IconContainer = styled.div`
  display: block;
  position: relative;
  background: ${props => props.theme.backgrounds.primary};
  width: 160px;
  height: 160px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.headline.primary};
  font-size: 100px;

  @media all and (max-width: 800px) {
    width: 100px;
    height: 100px;
    font-size: 80px;
  }
`;

export { ContactStyled, IconContainer };
