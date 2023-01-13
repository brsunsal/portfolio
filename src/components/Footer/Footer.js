import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mobile Number</LinkTitle>
          <LinkItem>(+90) 553 281 4695</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>brsunsl09@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Thank you for visiting my site.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/brsunsal'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/barış-ünsal-ba7b7820b/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
