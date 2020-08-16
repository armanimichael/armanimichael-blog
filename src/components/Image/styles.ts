import styled from 'styled-components';
import Img from 'gatsby-image';

interface ImageStyledProps {
  height?: string;
}

const ImageStyled = styled(Img)<ImageStyledProps>`
  position: relative;
  width: 100%;
  height: ${props => props.height};
`;

export { ImageStyled };
