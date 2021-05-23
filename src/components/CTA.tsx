import {
  Link as ChakraLink,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Container } from './Container';

export const CTA = () => (
  <Container
    flexDirection='row'
    position='fixed'
    bottom='0'
    left='0'
    marginLeft={useBreakpointValue({ base: '-20px', sm: '-10px', md: '150px' })}
    width={useBreakpointValue({ base: '90vw', sm: '90vw', md: '70vw' })}
    py={3}
  >
    <ChakraLink flexGrow={3} mx={2} href='/instructions'>
      <Button width='100%' variant='solid' colorScheme='green'>
        Start Quiz
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href='https://github.com/aldhanekaa/8values'
      flexGrow={1}
      mx={2}
    >
      <Button width='100%' variant='outline' colorScheme='green'>
        View Repo
      </Button>
    </ChakraLink>
  </Container>
);
