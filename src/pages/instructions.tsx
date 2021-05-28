import {
  useBreakpointValue,
  Box,
  Container,
  Heading,
  Flex,
  Button,
} from '@chakra-ui/react';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo';

const Instructions = () => {
  const [t, i18n] = useTranslation('quiz');

  return (
    <>
      <NextSeo title='8Values Quiz' />

      <Box mx={10} pt={100}>
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
    </>
  );
};

export default Instructions;
