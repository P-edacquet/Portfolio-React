import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Téléphone</LinkTitle>
        <LinkItem href="tel:06 37 97 42 73">06 37 97 42 73</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:p-edacquet@hotmail.fr">06 37 97 42 73</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Incroyable ce slogan</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/P-edacquet">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/pierre-emmanuel-dacquet">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
