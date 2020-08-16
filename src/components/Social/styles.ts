import styled from 'styled-components';

interface SocialStyledProps {
  image: string;
  isSmall: boolean;
}

const SocialStyled = styled.a<SocialStyledProps>`
  position: relative;
  width: ${props => (props.isSmall ? '40px' : '160px')};
  height: ${props => (props.isSmall ? '40px' : '160px')};
  margin: 40px;
  border-radius: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  transition: 0.4s transform ease;

  @media (pointer: fine) {
    &:hover {
      transform: ${props => (props.isSmall ? 'rotate(0)' : 'rotate(-15deg)')};
    }
  }

  @media all and (max-width: 800px) {
    width: ${props => (props.isSmall ? '40px' : '100px')};
    height: ${props => (props.isSmall ? '40px' : '100px')};
    margin: ${props => (props.isSmall ? '15px' : '30px')};
  }
`;

export { SocialStyled };
