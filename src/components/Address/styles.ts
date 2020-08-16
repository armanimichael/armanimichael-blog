import styled from 'styled-components';

import backImage from '../../images/city.jpg';

const AddressStyled = styled.address`
  position: relative;
  width: 100%;
  min-height: 400px;
  background: grey;
  box-sizing: border-box;
  padding: 40px;
  background-image: url(${backImage});
  background-position: center;
  background-repeat: repeat;
  font-style: normal;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  transform: translate3d(0, 0, 0);

  & > * {
    transform: translate3d(0, 0, 1px);
  }

  & > p {
    margin: 6px;
    color: white;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    transform: translate3d(0, 0, 0);
  }

  @media screen and (max-width: 800px) {
    padding: 30px;
  }
`;

export { AddressStyled };
