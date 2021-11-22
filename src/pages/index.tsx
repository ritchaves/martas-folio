import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Carousel from '../components/carousel';
import Header from '../components/header';
import theme from '../utils/theme';
import '@fontsource/annie-use-your-telescope/index.css';
import '@fontsource/carrois-gothic-sc/index.css';

const IndexPage = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Carousel />
    </ChakraProvider>
  );
};

export default IndexPage;
