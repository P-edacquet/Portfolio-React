import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row  nopadding>
    <LeftSection>
      <SectionTitle main cneter>
        Pierre-Emmanuel <br />
        Dacquet
      </SectionTitle>
      <SectionText>
        Je suis un développeur React on Rails junior. Je suis actuellement en formation à la Tech&Code Factory. Je serai disponible à partir d'Octobre 2022.
      </SectionText>
      <Button onClick={() => window.location = '#projets'}>En Savoir Plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;