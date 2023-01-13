import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Barış, <br />
        Welcome to My <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
      I'm a fresh graduate who is passionate about web development and I'm excited to
      get the opportunity to work with
      new people and start my career.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;