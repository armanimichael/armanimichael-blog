import React from 'react';

import { Button } from '../../components';
import { Hero, ButtonGroup } from '../';

const doSomething = () => {
  alert('!');
};

const HeroContent: React.FC = () => (
  <Hero>
    <h1>Look, I&apos;m a Website!</h1>
    <h2>Feelin&apos; good, mate 👍.</h2>
    <ButtonGroup>
      <Button
        onClick={doSomething}
        styles={{ color: 'black', background: '#39ff14' }}
      >
        Check this out!
      </Button>
      <Button
        anchorTo="/using-typescript/"
        styles={{ color: 'black', background: '#fce205' }}
      >
        About us
      </Button>
    </ButtonGroup>
  </Hero>
);

export default HeroContent;
