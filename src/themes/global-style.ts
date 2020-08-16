import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
  }

  noscript {
    display: block;
    width: 100%;
    background: #f44336;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;

    & p {
      color: white;
      margin: 0;
    }
}

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    background:${props => props.theme.backgrounds.primary};
    color: ${props => props.theme.paragraph.primary};
    overflow-y: auto;    
    scroll-behavior: smooth;
  }

  a, p, li, ul, ol, td, th {
    font-size: 22px;
    line-height: 1.6em;   
    color: ${props => props.theme.paragraph.primary};
  }

  h1, h2, h3, h4, h5, h6 {    
    color: ${props => props.theme.headline.primary};
    line-height: 1.6em;
  }

  h1 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 32px;
    margin: 20px 0;
  }

  h3 {
    font-size: 24px;
    margin: 20px 0;
  }

  main {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 453px);
    display: flex;
    flex-direction: column;
    align-items: center;

    & > section {
      margin-bottom: 80px;
    }

    & > section:last-child {
      margin-bottom: 0;
    }
    
    & > a,
    & > p,
    & > li,
    & > ul,
    & > ol,
    & > h2,
    & > h3,
    & > h4, 
    & > h5,
    & > h6 {
      width: 100%
    }

    & p {
      margin: 4px 0 14px 0;
    }

    & h2, h3, h4 {
      margin: 24px 0 0 0;
    }

    & li {
      margin-bottom: 12px;
    }
  }

  main.home-content {
    padding: 0px;
  }

  main.general-content {
    box-sizing: border-box;
    padding: 0 40px;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    background: ${props => props.theme.backgrounds.secondary};
    box-sizing: border-box;
    padding: 40px;

    & a, p, li {
      color: ${props => props.theme.paragraph.primary};
    }

    & h1, h2, h3, h4, h5, h6 {    
      color: ${props => props.theme.headline.secondary};
    }
  }  

  section.transparent {
    background: transparent;
  }

  hr {
    width: 100%;
    background: ${props => props.theme.backgrounds.secondary};
    opacity: 0.2;
  }

  .centered {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    color: ${props => props.theme.headline.primary};
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0px 0 20px 0;
  }

  .section-title ~ .secondary {
    padding: 80px 0 20px 0;
    background: ${props => props.theme.backgrounds.secondary};
    color: ${props => props.theme.headline.secondary};
  }

  .section-heading-divider {
    margin: 0 0 40px 0;
  }

  .gatsby-highlight > pre {
    border-radius: 0.6em;
    margin: 2em 0 2em 0;
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-resp-image-image {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 32px 32px 0px, rgba(0, 0, 0, 0.15) 0px 16px 16px 0px, rgba(0, 0, 0, 0.15) 0px 8px 8px 0px, rgba(0, 0, 0, 0.15) 0px 4px 4px 0px !important;
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em 0.2em 0.1em 0.2em; 
  }

  .gatsby-resp-image-wrapper {
    margin: 1em 0 1em 0;
  }

  .blog-wrapper {
    width: 50%;
  }


  .CookieConsent {
    z-index: 10000 !important;
    font-size: 18px;
    
    & > div {
      margin: 6px !important;
    }

    & a {
      font-size: 18px;
    }
  }

  @media all and (max-width: 800px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 28px;
      margin: 20px 0;
    }

    h3 {
      font-size: 24px;
      margin: 20px 0 0 0;
    }

    main {
      & > section {
        margin-bottom: 60px;
      }
    }

    main.general-content {
      box-sizing: border-box;
      padding: 0 10px;
    }

    section.socials {
      padding: 0px;
    }

    .section-title ~ .secondary {
      padding: 60px 0 20px 0;
    }

    .section-heading-divider {
      margin: 0 0 24px 0;
    }

    .blog-wrapper {
      width: 90%;
    }
  }
`;

export default GlobalStyle;
