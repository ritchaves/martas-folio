import { ChakraProvider, Text, Box, Flex } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Header from '../components/header';
import theme from '../utils/theme';

const EP_1 =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/ep-01-for/viewer?title_no=426568&episode_no=1';
const EP_2 =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/ep-02-this/viewer?title_no=426568&episode_no=2';
const EP_3 =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/ep-03-time/viewer?title_no=426568&episode_no=3';

const Webtoons = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Box marginLeft="40" marginRight="40" marginTop="10">
        <Text align="start" fontSize="5xl">
          Webtoon
        </Text>
        <Flex p="5" m="10">
          <StaticImage
            src="../images/webtoons/igie_bannersaturated.jpg"
            alt="webtoon_p1"
            width={350}
            height={350}
          />
          <Flex direction="column" m="10" w="50%">
            <Text fontSize="3xl" marginBottom="5">
              Title: ichi-go ichi-e: for this time only
            </Text>
            <Text fontSize="2xl">
              一期一会 (ichi-go ichi-e), noun. once-in-a-lifetime encounter. ---
              Any encounter in life can never be repeated. Even if you gather
              the same people in the same place, that singular moment with all
              its nuances can never be replicated. And so, it should be
              treasured as such. You never know when one of these single moments
              can change the entire course of your life.
            </Text>
          </Flex>
        </Flex>
        <Text
          align="start"
          marginTop="20"
          marginRight="20"
          marginLeft="20"
          marginBottom="5"
          fontSize="3xl"
        >
          Chapters
        </Text>
        <Flex w="50%" alignContent="space-evenly">
          <Flex flexDirection="column" marginLeft="20">
            <StaticImage
              src="../images/webtoons/thumbnail_p1.jpg"
              alt="webtoon_p1"
              width={160}
              height={120}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(EP_1, '_blank')}
            />
            <Text fontSize="s" align="end">
              Ch 1
            </Text>
          </Flex>
          <Flex flexDirection="column" marginLeft="20">
            <StaticImage
              src="../images/webtoons/thumbnail_p2.jpg"
              alt="webtoon_p2"
              width={160}
              height={120}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(EP_2, '_blank')}
            />
            <Text fontSize="s" align="end">
              Ch 2
            </Text>
          </Flex>
          <Flex flexDirection="column" marginLeft="20">
            <StaticImage
              src="../images/webtoons/thumbnail_p3.jpg"
              alt="webtoon_p3"
              width={160}
              height={120}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(EP_3, '_blank')}
            />
            <Text fontSize="s" align="end">
              Ch 3
            </Text>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Webtoons;
