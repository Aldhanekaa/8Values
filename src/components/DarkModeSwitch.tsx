import {
  useColorMode,
  Stack,
  Button,
  Select,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { useCookie } from 'next-universal-cookie';
import { useEffect, ChangeEvent } from 'react';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/index';
import { SetLang, Languages } from '../redux/actions/lang/index';

export const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const LangState = useSelector((state: RootStore) => state.lang);
  const [cookies, setCookie, removeCookie] = useCookie(['lang']);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  function languageOnChange(e: React.FormEvent<HTMLSelectElement>) {
    setCookie('lang', e.currentTarget.value);

    if (Languages.find((lang) => lang.value == e.currentTarget.value)) {
      // @ts-ignore
      dispatch(SetLang(e.currentTarget.value));
    } else {
      dispatch(SetLang('en'));
    }
  }

  useEffect(() => {
    if (Languages.includes(cookies['lang'])) {
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
          {Languages.map((lang) => (
            <option value={lang.value}>{lang.label}</option>
          ))}
        </Select>
        <Button onClick={toggleColorMode}>{isDark ? 'Light' : 'Dark'}</Button>
      </Stack>
    </>
  );
};
