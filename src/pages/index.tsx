import React from 'react';

import { ServiceCard, Contact, Address } from '../components/';
import { Layout, Socials, Section, OpeningHours, Infos } from '../containers/';

const IndexPage: React.FC = () => (
  <Layout showHero allowPadding={false}>
    <Socials />
    <Infos>
      <section>
        <Contact type="phone" value="999 9999999" />
        <Contact type="social" value="FB Messenger" />
        <Contact type="mail" value="some@mail.com" />
      </section>
      <Address>
        <p>Something Street 99</p>
        <p>Some place, Earth</p>
      </Address>
    </Infos>

    <OpeningHours />
    <Section title="Services">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </Section>
  </Layout>
);

export default IndexPage;
