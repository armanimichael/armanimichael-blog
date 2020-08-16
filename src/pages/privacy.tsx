import React from 'react';

import { SEO } from '../components';
import { Layout } from '../containers';

const PrivacyPage: React.FC = () => (
  <Layout
    SEOComponent={
      <SEO
        title="Privacy | Michael Armani"
        description="Website privacy and cookies notice."
      />
    }
  >
    <h1>Privacy</h1>
    <hr />
    <br />
    <p>
      This website uses Google Analytics to collect data about how users
      interact with the website.
    </p>
    <p>
      The owner uses this information for statistical analysis, to improve the
      site and simplify its use, as well as to monitor its correct functioning.
    </p>
    <p>
      This type of cookie collects anonymous information on the activity of
      users on the site and on how they arrived at the site and the pages
      visited. Cookies in this category are sent from the site itself or
      third-party domains.
    </p>
  </Layout>
);

export default PrivacyPage;
