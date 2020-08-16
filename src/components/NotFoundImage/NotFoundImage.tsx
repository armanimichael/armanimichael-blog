import React from 'react';
import styled, { keyframes } from 'styled-components';

import compassImg from '../../images/compass.svg';

const anim = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const NotFoundImageStyled = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  pointer-events: none;

  @media screen and (max-width: 400px) {
    height: 400px;
  }
`;

const Image = styled.div`
  width: 360px;
  height: 360px;
  background-image: url(${compassImg});
  background-position: center;
  background-repeat: no-repeat;
  animation: 14s ${anim} cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  pointer-events: none;
`;

const NotFoundImage: React.FC = () => (
  <NotFoundImageStyled>
    <Image />
  </NotFoundImageStyled>
);

export default NotFoundImage;
