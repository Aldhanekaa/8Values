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
import { NextSeo } from 'next-seo';
const Index = () => {
  const [t, i18n] = useTranslation('index');

  return (
    <>
      <NextSeo title='8Values' />
      <Box mx={10} pt={100}>
        <Hero />
        <Container mt={10} pb='100px'>
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
            {t('the-eight-values.title')}
          </Heading>
          <Text> {t('the-eight-values.desc')}</Text>

          {/* Equality */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='red'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.equality.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (Economic)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.equality.text')}
          </Text>

          {/* Markets */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='green'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.markets.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (Economic)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.markets.text')}
          </Text>

          {/* Nation */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='orange'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.nation.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (Diplomatic)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.nation.text')}
          </Text>

          {/*  Globe */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='blue.500'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.globe.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (Diplomatic)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.globe.text')}
          </Text>

          {/*  Liberty */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='yellow.400'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.liberty.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (State)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.liberty.text')}
          </Text>

          {/* authority */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='#303f9f'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.authority.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (State)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.authority.text')}
          </Text>

          {/* Tradition */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='green'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.tradition.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (Society)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.tradition.text')}
          </Text>

          {/* Progress */}
          <Text mt={5}>
            <Heading
              as='h3'
              fontWeight={500}
              color='purple'
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              {t('the-eight-values.progress.title')}
            </Heading>
            <Heading
              as='h3'
              ml={3}
              fontWeight={500}
              display='inline-block'
              size={useBreakpointValue({ base: 'md', sm: 'md', md: 'md' })}
            >
              (Society)
            </Heading>
          </Text>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.300')}>
            {t('the-eight-values.progress.text')}
          </Text>

          {/* "Closest Match" mean */}
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
            8values.github.io, please visit the website for the original
            version.
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
    </>
  );
};

export default Index;
