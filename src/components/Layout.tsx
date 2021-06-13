import { useEffect } from 'react';
import { useCookie } from 'next-universal-cookie';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import InternalisationWrapper from '../locales/index';

import { useSelector } from 'react-redux';
import { RootStore } from '../redux/index';

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const LangState = useSelector((state: RootStore) => state.lang);
  const [cookies, setCookie, removeCookie] = useCookie(['lang']);

  return (
    <>
      {children}
      <DarkModeSwitch />
    </>
  );
}
