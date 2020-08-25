import styled from 'styled-components';
import { Link } from 'gatsby';

interface Props {
  previous: boolean;
  latest: boolean;
}

const Container = styled.div<Props>`
  width: calc(50% + 40px);
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.previous && props.latest ? 'space-between' : 'center'};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const PageButtonStyled = styled(Link)<Props>`
  display: block;
  width: ${props => (props.previous && props.latest ? '44%' : '80%')};
  font-size: 18px;
  text-align: center;
  margin: 40px 0;
  background: ${props => props.theme.button.primary};
  color: ${props => props.theme.button.primaryColor};
  padding: 10px 0;
  text-decoration: none;
  border-radius: 10px;

  & svg {
    font-size: 18px;
    vertical-align: text-bottom;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 44px 0;
  }
`;

export { PageButtonStyled, Container };
