import styled from 'styled-components';

interface ButtonProps {
  styles?: {
    color: string;
    background: string;
  };
}

const ButtonStyled = styled.button<ButtonProps>`
  position: relative;
  padding: 18px 32px;
  background: ${props =>
    props.styles ? props.styles.background : props.theme.button.primary};
  border-radius: 100px;
  outline: none;
  border: none;
  margin: 20px;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.6);

  & p {
    position: relative;
    margin: 0;
    color: ${props =>
      props.styles ? props.styles.color : props.theme.button.primaryColor};
    font-size: 16pt;
  }

  &::before {
    content: '';
    border-radius: 100px;
    position: absolute;
    display: block;
    background: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    transition: clip-path 0.4s ease;
    clip-path: circle(0%);
  }

  &:hover {
    &::before {
      clip-path: circle(100%);
    }
  }

  @media all and (max-width: 800px) {
    padding: 18px 22px;
  }
`;

export { ButtonStyled };
