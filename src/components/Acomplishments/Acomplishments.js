import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'bac +3', text: 'années d\'étude', },
  { number: 14, text: 'Projets Open sources'},
  { number: 555, text: 'Contributions l\'année dernière', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplissements personnels</SectionTitle>
    <Boxes>
      {/* prend en paramètre la liste des accomplissements */}
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
