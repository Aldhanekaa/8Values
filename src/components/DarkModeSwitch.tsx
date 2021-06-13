import {
  useColorMode,
  Stack,
  Button,
  Select,
  Flex,
  Heading,
  Box,
  chakra,
  Container,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link as ChakraLink,
} from '@chakra-ui/react';

import { useCookie } from 'next-universal-cookie';
import { useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import i18next from 'i18next';

import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/index';
import { SetLang } from '../redux/actions/lang/index';

export const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const LangState = useSelector((state: RootStore) => state.lang);
  const [cookies, setCookie, removeCookie] = useCookie(['lang']);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  function languageOnChange(e: React.FormEvent<HTMLSelectElement>) {
    setCookie('lang', e.currentTarget.value);

    if (i18next.languages.find((lang) => lang == e.currentTarget.value)) {
      // @ts-ignore
      dispatch(SetLang(e.currentTarget.value));
    } else {
      dispatch(SetLang('en'));
    }
  }

  useEffect(() => {
    if (i18next.languages.includes(cookies['lang'])) {
      setCookie('lang', cookies['lang']);

      // @ts-ignore
      dispatch(SetLang(cookies['lang']));
    } else {
      setCookie('lang', 'en');
      dispatch(SetLang('en'));
    }
  }, []);

  return (
    <>
      <Stack position='fixed' top='1rem' left='1rem' direction='row'>
        <Link href='/'>
          <Flex
            cursor='pointer'
            justifyContent='center'
            alignItems='center'
            bgClip='text'
            color='gray.400'
          >
            <Heading fontSize='vw'>8Values – Reactjs Version</Heading>
          </Flex>
        </Link>
      </Stack>
      <Stack position='fixed' top='1rem' right='1rem' direction='row'>
        <Select
          variant='filled'
          value={cookies['lang'] ? cookies['lang'] : 'EN-UK'}
          onChange={languageOnChange}
        >
          {i18next.languages.map((lang) => (
            <option value={lang}>{lang}</option>
          ))}
        </Select>
        <Button onClick={toggleColorMode}>
          {isDark ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              style={{ transform: 'scale(2.3)' }}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
              style={{ transform: 'scale(2.3)' }}
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
          )}
        </Button>
      </Stack>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction='row'
          spacing={4}
          justify='center'
        >
          <Text>
            <ChakraLink href='https://8values.github.io'>8Values</ChakraLink>{' '}
            ReactJS Version, remade by{' '}
            <ChakraLink href='https://github.com/aldhanekaa'>
              Aldhanekaa
            </ChakraLink>
          </Text>
        </Container>
      </Box>
    </>
  );
};
