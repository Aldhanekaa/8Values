import {
  useBreakpointValue,
  Box,
  Container,
  Heading,
  Flex,
  Button,
} from '@chakra-ui/react';

import Link from 'next/link';
import { Hero } from '../components/Hero';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Instructions = () => (
  <Box mx={10} pt={100}>
    <Hero />
    <Container mt={20} pb='100px'>
      <Heading
        as='h1'
        size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
      >
        You will be presented with a series of statements. For each one, click
        the button with your opinion on it.
      </Heading>
      <Flex flexDirection='column' mt={5}>
        <Link href='/quiz'>
          <Button width='100%'>Got it!</Button>
        </Link>
        <Link href='/'>
          <Button width='100%' mt={3} colorScheme='red'>
            Nope, I don't mind!
          </Button>
        </Link>
      </Flex>
    </Container>

    <DarkModeSwitch />
  </Box>
);

export default Instructions;
