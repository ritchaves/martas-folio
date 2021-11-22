import React from 'react';
import { Flex, Box, Avatar, Heading } from '@chakra-ui/react';
import Onigiri from '../images/Icon_Reboot_1.png';
import { Link } from 'gatsby';
import SocialMediaIcons from './social-media-icons';

const Header = (): JSX.Element => {
  return (
    <Flex>
      <Link to="/">
        <Flex align="start">
          <Avatar name="Maccira Onigiri" src={Onigiri} m={5} />
          <Heading m={5}>Marta Ferreira</Heading>
        </Flex>
      </Link>
      <Flex alignSelf="center">
        <SocialMediaIcons />
      </Flex>
    </Flex>
  );
};

export default Header;
