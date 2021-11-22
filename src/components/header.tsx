import React from 'react';
import { Flex, Avatar, Heading } from '@chakra-ui/react';
import Onigiri from '../images/Icon_Reboot_1.png';
import { Link } from 'gatsby';

const Header = (): JSX.Element => {
  return (
    <Link to="/">
      <Flex align="start">
        <Avatar name="Maccira Onigiri" src={Onigiri} m={5} />
        <Heading m={5}>Marta Ferreira</Heading>
      </Flex>
    </Link>
  );
};

export default Header;
