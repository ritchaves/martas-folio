import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/header'
import theme from '../utils/theme'

const Storyboards = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default Storyboards