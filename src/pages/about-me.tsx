import { Flex, ChakraProvider, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Header from '../components/header';
import SocialMediaIcons from '../components/social-media-icons';
import theme from '../utils/theme';

const AboutMeText = ({ children }: { children: string }) => {
  return (
    <Text background="#FAEFE9" p="2" m="3" css={{ width: 'fit-content' }}>
      {children}
    </Text>
  );
};

const AboutMe = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex
        marginTop="150"
        marginLeft="250"
        marginRight="250"
        css={{ position: 'relative', alignItems: 'center' }}
      >
        <Flex
          flexDirection="column"
          css={{
            position: 'absolute',
            zIndex: 1,
            lineHeight: 2,
            alignItems: 'flex-end',
            marginLeft: '-60px',
          }}
        >
          <AboutMeText>Hello!</AboutMeText>
          <AboutMeText>
            My name is Marta Ferreira, although I more commonly go by my artist
            name "maccira" online.
          </AboutMeText>
          <AboutMeText>
            I'm a portuguese artist currently attending first year at Sheridan
            Animation in Oakville, Canada.
          </AboutMeText>
          <AboutMeText>
            My passions lay mainly in Storyboarding and Layout, but I strive to
            improve in all areas that I can.
          </AboutMeText>
          <AboutMeText>
            Above all, I love storytelling and using art as a medium for it,
            which I hope shows in all my pieces!
          </AboutMeText>
        </Flex>
        <Flex flexDirection="column" style={{ marginLeft: 'auto' }}>
          <StaticImage
            src="../images/Icon_Reboot_1.png"
            alt="maccira"
            width={500}
          />
          <SocialMediaIcons />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default AboutMe;
