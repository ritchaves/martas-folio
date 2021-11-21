import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/header'
import theme from '../utils/theme'

const AboutMe = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default AboutMe
