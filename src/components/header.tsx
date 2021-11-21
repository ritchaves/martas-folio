import React from 'react'
import { Flex, Avatar, Heading } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <Flex align="start">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" m={5} />
      <Heading m={5}>Marta Ferreira</Heading>
    </Flex>
  )
}

export default Header
