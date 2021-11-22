import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Gallery from 'react-photo-gallery';
import Header from '../components/header';
import theme from '../utils/theme';
import photos from '../utils/photo-char-design';

const CharacterDesign = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box m="20">
        <Gallery photos={photos} direction="column" />;
      </Box>
    </ChakraProvider>
  );
};

export default CharacterDesign;
