import {
  useBreakpointValue,
  Box,
  Container,
  Heading,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import Link from 'next/link';
import { Hero } from '../components/Hero';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const QuizPage = () => (
  <Box mx={10} pt={100}>
    <Hero />
    <Container mt={20} pb='100px'>
      <Heading
        as='h1'
        size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
      >
        Some Texts Here
      </Heading>
      <Flex flexDirection='column' mt={5}>
        <Button
          width='100%'
          color={useColorModeValue('white', 'white')}
          bg={useColorModeValue('green.700', 'green.800')}
          _hover={{ bg: useColorModeValue('green.800', 'green.700') }}
          _active={{ bg: useColorModeValue('green.900', 'green.800') }}
        >
          Strongly Agree
        </Button>
        <Button
          mt={3}
          width='100%'
          color={useColorModeValue('white', 'white')}
          bg={useColorModeValue('green.400', 'green.500')}
          _hover={{ bg: useColorModeValue('green.500', 'green.400') }}
          _active={{ bg: useColorModeValue('green.600', 'green.300') }}
        >
          Agree
        </Button>
        <Button width='100%' mt={3}>
          Netral/not sure
        </Button>
        <Button
          width='100%'
          bg={useColorModeValue('red.400', 'red.400')}
          _hover={{ bg: useColorModeValue('red.500', 'red.300') }}
          _active={{ bg: useColorModeValue('red.600', 'red.300') }}
          mt={3}
          colorScheme='red'
        >
          Disagree
        </Button>
        <Button
          width='100%'
          bg={useColorModeValue('red.600', 'red.600')}
          _hover={{ bg: useColorModeValue('red.700', 'red.600') }}
          _active={{ bg: useColorModeValue('red.800', 'red.500') }}
          mt={3}
          colorScheme='red'
        >
          Strongly Disagree
        </Button>
      </Flex>
    </Container>

    <DarkModeSwitch />
  </Box>
);

export default QuizPage;
