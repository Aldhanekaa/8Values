import {
  Text,
  useBreakpointValue,
  Image,
  Box,
  Container,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import { Hero } from '../components/Hero';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
// @ts-ignore
import Values from '../values.svg';

const Index = () => (
  <Box mx={10} pt={100}>
    <Hero />
    <Container mt={20} pb='100px'>
      <Image margin='auto' src={Values} alt='hey' mb={5}></Image>
      <Heading
        as='h1'
        size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
      >
        What is 8values?
      </Heading>
      <Text mt={5} color={useColorModeValue('gray.800', 'gray.300')}>
        8values is, in essence, a political quiz that attempts to assign
        percentages for eight different political values. You will be presented
        by a statement, and then you will answer with your opinion on the
        statement, from Strongly Agree to Strongly Disagree, with each answer
        slightly affecting your scores. At the end of the quiz, your answers
        will be compared to the maximum possible for each value, thus giving you
        a percentage. Answer honestly!
      </Text>
      <Text mt={3} color={useColorModeValue('gray.800', 'gray.300')}>
        There are 70 questions in the test.
      </Text>

      <Heading
        as='h1'
        mt={10}
        size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
      >
        What are the eight values?
      </Heading>
      <Text mt={5} color={useColorModeValue('gray.800', 'gray.300')}>
        some texts should be place here
      </Text>

      <Heading
        as='h1'
        mt={10}
        size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
      >
        What's the "Closest Match" mean at the bottom of the results?
      </Heading>
      <Text mt={5} color={useColorModeValue('gray.800', 'gray.300')}>
        In addition to matching you to the eight values, the quiz also attempts
        to match you to a political ideology. This is a work in progress and is
        much less accurate than the values and axes, so don't take it too
        seriously. If you disagree with your assigned ideology, send us an email
        at eightvalues@gmail.com with your scores, matched ideology, and
        preferred ideology, and we'll look into adjusting the system. Thanks!
      </Text>
      <Heading
        as='h1'
        mt={10}
        size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
      >
        Note
      </Heading>
      <Text mt={5} color={useColorModeValue('gray.800', 'gray.300')}>
        This website is created very much inspired by this website:
        8values.github.io, please visit the website for the original version.
      </Text>
    </Container>

    <DarkModeSwitch />
    <CTA />
  </Box>
);

export default Index;
