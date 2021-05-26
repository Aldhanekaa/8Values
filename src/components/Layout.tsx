import { useEffect } from 'react';

// index locales
import Bahasa_Locale from '../locales/bahasa/index.json';
import EN_Locale from '../locales/en/index.json';

// quiz locales
import Bahasa_QUIZ_Locale from '../locales/bahasa/quiz.json';
import EN_Quiz_Locale from '../locales/en/quiz.json';

import { useCookie } from 'next-universal-cookie';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { DarkModeSwitch } from '../components/DarkModeSwitch';

import { useSelector } from 'react-redux';
import { RootStore } from '../redux/index';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en',
  fallbackLng: 'en', // language to use
  resources: {
    id: {
      index: Bahasa_Locale,
      quiz: Bahasa_QUIZ_Locale,
    },
    en: {
      index: EN_Locale,
      quiz: EN_Quiz_Locale,
    },
  },
});

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const LangState = useSelector((state: RootStore) => state.lang);
  const [cookies, setCookie, removeCookie] = useCookie(['lang']);

  useEffect(() => {
    i18next.changeLanguage(LangState.lang);
    // console.log('hey');
  }, [LangState.lang]);

  return (
    <>
      <I18nextProvider i18n={i18next}>
        {children}
        <DarkModeSwitch />
      </I18nextProvider>
    </>
  );
}
