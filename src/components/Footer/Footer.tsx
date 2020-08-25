import React from 'react';
import { Link } from 'gatsby';

import { IoIosPaper, IoMdInformationCircleOutline } from 'react-icons/io';

import { DefaultSocials } from '../../utils/socialsHandler';

import { useSiteMetadata } from '../../queries/useSiteMetadata';
import { generateLinks } from '../../utils/generateLinks';

import { FooterStyled, Logo, SocialsContainer, LinksContainer } from './styles';

interface Props {
  logoSrc?: string;
  logoBackground?: string;
  customTitle?: string;
}

const Footer: React.FC<Props> = ({ logoSrc, customTitle, logoBackground }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <FooterStyled>
        <div>
          <h3>{customTitle || title}</h3>
          {logoSrc && (
            <Logo
              image={logoSrc}
              backgroundColor={logoBackground}
              title="Homepage"
            />
          )}
        </div>
        <div>
          <h3>
            <IoIosPaper />
          </h3>
          <LinksContainer>{generateLinks()}</LinksContainer>
        </div>
        <div>
          <h3>
            <IoMdInformationCircleOutline />
          </h3>
          <Link to="/privacy">Sitemap</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <a
            href="https://armanimichael.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Developed by Me
          </a>
        </div>
      </FooterStyled>
      <SocialsContainer>
        <DefaultSocials isSmall />
      </SocialsContainer>
    </>
  );
};

export default Footer;
