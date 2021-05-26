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
import { useTranslation } from 'react-i18next';

const Instructions = () => {
  const [t, i18n] = useTranslation('quiz');

  return (
    <Box mx={10} pt={100}>
      <Hero />
      <Container mt={20} pb='100px'>
        <Heading
          as='h1'
          size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
        >
          {t('instruction')}
        </Heading>
        <Flex flexDirection='column' mt={5}>
          <Link href='/quiz'>
            <Button width='100%'> {t('got_it')}</Button>
          </Link>
          <Link href='/'>
            <Button width='100%' mt={3} colorScheme='red'>
              {t('back')}
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Instructions;
