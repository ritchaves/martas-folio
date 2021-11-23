import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Carousel from '../components/carousel';
import Header from '../components/header';
import theme from '../utils/theme';
import '@fontsource/barrio/index.css';
import '@fontsource/bubbler-one/index.css';

const IndexPage = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Carousel />
    </ChakraProvider>
  );
};

export default IndexPage;
