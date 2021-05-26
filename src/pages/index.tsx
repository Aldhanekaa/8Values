import {
  Text,
  chakra,
  useBreakpointValue,
  Image,
  Box,
  Container,
  Heading,
  useColorModeValue,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero';
import { Container as CostumContainer } from '../components/Container';

// @ts-ignore
import Values from '../values.svg';
import Link from 'next/link';

const Index = () => {
  const [t, i18n] = useTranslation('index');

  return (
    <Box mx={10} pt={100}>
      <Hero />
      <Container mt={20} pb='100px'>
        <Image margin='auto' src={Values} alt='hey' mb={5}></Image>
        <Heading
          as='h1'
          size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
        >
          {t('introduction.title')}
        </Heading>
        <Text mt={5} color={useColorModeValue('gray.800', 'gray.300')}>
          {t('introduction.text')}
        </Text>
        <Text mt={3} color={useColorModeValue('gray.800', 'gray.300')}>
          {t('introduction.questions', { questions: 70 })}
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
          {t('closest-match-means.title')}
        </Heading>
        <Text mt={5} color={useColorModeValue('gray.800', 'gray.300')}>
          {t('closest-match-means.text')}
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

      <CostumContainer
        flexDirection='row'
        position='fixed'
        bottom='0'
        left='0'
        marginLeft={useBreakpointValue({
          base: '-20px',
          sm: '-10px',
          md: '150px',
        })}
        width={useBreakpointValue({ base: '90vw', sm: '90vw', md: '70vw' })}
        py={3}
      >
        <Link href='/instructions'>
          <chakra.a flexGrow={3} mx={2}>
            <Button width='100%' variant='solid' colorScheme='green'>
              {t('startquiz')}
            </Button>
          </chakra.a>
        </Link>

        <ChakraLink
          isExternal
          href='https://github.com/aldhanekaa/8values'
          flexGrow={1}
          mx={2}
        >
          <Button width='100%' variant='outline' colorScheme='green'>
            {t('viewrepo')}
          </Button>
        </ChakraLink>
      </CostumContainer>
    </Box>
  );
};

export default Index;
