import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';

import GlobalStyle from '../../themes/global-style';
import '../../themes/index.css';

import { Navbar, Footer, BackToTop, SEO } from '../../components';

import logoImg from '../../images/logo.png';

import themes from '../../themes/themes';

interface Props {
  noScriptMsg?: string;
  SEOComponent?: React.ReactElement;
  allowPadding?: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  noScriptMsg = 'JavaScript is disabled, theme changing and other functionalities may not work.',
  SEOComponent,
  allowPadding = true,
}) => {
  const [isDarkMode, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const loadedTheme = window.localStorage.getItem('darkmode') || 'true';
    loadedTheme === 'true' ? setIsDarkTheme(true) : setIsDarkTheme(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('darkmode', isDarkMode.toString());
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkTheme(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      {SEOComponent || <SEO />}
      <GlobalStyle />
      <BackToTop />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        sameSite="strict"
      >
        This site uses cookies... {` `}
        <Link to="/privacy/">Read more about privacy.</Link>
      </CookieConsent>
      <header>
        <Navbar
          logoSrc={logoImg}
          isDarkMode={isDarkMode}
          changeTheme={(): void => {
            switchTheme();
          }}
        />
        <noscript>
          <p>{noScriptMsg}</p>
        </noscript>
      </header>
      <main className={allowPadding ? 'general-content' : 'home-content'}>
        {children}
      </main>
      <Footer logoSrc={logoImg} />
    </ThemeProvider>
  );
};

export default Layout;
