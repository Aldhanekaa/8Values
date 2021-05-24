import { useColorMode, Stack, Button, Select } from '@chakra-ui/react';
import { useCookie } from 'next-universal-cookie';
import { useEffect, ChangeEvent } from 'react';

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
    console.log(
      Languages.includes(e.currentTarget.value),
      e.currentTarget.value,
    );
    if (Languages.includes(e.currentTarget.value)) {
      // @ts-ignore
      dispatch(SetLang(e.currentTarget.value));
    } else {
      dispatch(SetLang('en-uk'));
    }
  }

  useEffect(() => {
    if (Languages.includes(cookies['lang'])) {
      setCookie('lang', cookies['lang']);

      // @ts-ignore
      // dispatch(SetLang(cookies['lang']));
    } else {
      setCookie('lang', 'en-uk');
      dispatch(SetLang('en-uk'));
    }
  }, []);

  return (
    <>
      <Stack position='fixed' top='1rem' right='1rem' direction='row'>
        <Select
          variant='filled'
          value={cookies['lang'] ? cookies['lang'] : 'EN-UK'}
          onChange={languageOnChange}
        >
          <option value='bahasa'>Bahasa</option>
          <option value='en-uk'>EN-UK</option>
        </Select>
        <Button onClick={toggleColorMode}>{isDark ? 'Light' : 'Dark'}</Button>
      </Stack>
    </>
  );
};
