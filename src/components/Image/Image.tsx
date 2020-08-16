import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { ImageStyled } from './styles';

interface Props {
  filename: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image: React.FC<Props> = ({
  filename,
  alt,
  width = '100%',
  height = '100%',
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      return (
        <div style={{ width: width }}>
          <ImageStyled
            alt={alt}
            fluid={image.node.childImageSharp.fluid}
            height={height}
          />
        </div>
      );
    }}
  />
);

export default Image;
