import React, { useState } from 'react';
// import { Link } from 'gatsby';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
// import CookieConsent from 'react-cookie-consent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';

import { useTheme } from '../../hooks/useTheme';

import { Navbar, Footer, ThemeModal, BackToTop, SEO } from '../../components';

import logoImg from '../../images/logo.png';

import themes from '../../themes/themes';

interface Props {
  noScriptMsg?: string;
  SEOComponent?: React.ReactElement;
  allowPadding?: boolean;
}

const isWebsiteThemed = (): boolean => Object.keys(themes).length > 1;

const Layout: React.FC<Props> = ({
  children,
  noScriptMsg = 'JavaScript is disabled, theme changing and other functionalities may not work.',
  SEOComponent,
  allowPadding = true,
}) => {
  const [showThemeModal, setThemeModalState] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>(
    useTheme().themeName
  );
  const theme: DefaultTheme = useTheme(currentTheme).theme;

  return (
    <ThemeProvider theme={theme}>
      {SEOComponent || <SEO />}
      <GlobalStyle />
      <BackToTop />
      {/* <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        cookieSecurity
      >
        This site uses cookies... {` `}
        <Link to="/privacy/">Read more about privacy.</Link>
      </CookieConsent> */}
      <header>
        {showThemeModal && (
          <ThemeModal
            changeTheme={(newTheme: string): void => {
              setCurrentTheme(newTheme);
            }}
            setVisibility={(): void => {
              setThemeModalState(false);
            }}
          />
        )}
        <Navbar
          logoSrc={logoImg}
          openThemesModal={() => setThemeModalState(true)}
          allowTheming={isWebsiteThemed()}
        />
        <noscript>
          <p>{noScriptMsg}</p>
        </noscript>
      </header>
      <main className={allowPadding ? 'general-content' : 'home-content'}>
        {children}
      </main>
      <Footer logoSrc={logoImg}></Footer>
    </ThemeProvider>
  );
};

export default Layout;
