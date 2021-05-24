import { useColorMode, Stack, Switch, Button, Select } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <Stack position='fixed' top='1rem' right='1rem' direction='row'>
        <Select variant='filled'>
          <option value='Bahasa'>Bahasa</option>
          <option value='EN-UK'>EN-UK</option>
          <option value='EN-US'>EN-US</option>
        </Select>
        <Button onClick={toggleColorMode}>{isDark ? 'Light' : 'Dark'}</Button>
      </Stack>
    </>
  );
};
