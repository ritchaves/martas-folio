import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/header'
import theme from '../utils/theme'

const CharacterDesign = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default CharacterDesign
