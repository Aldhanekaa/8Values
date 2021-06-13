import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootStore } from '../redux/index';

import  en as ENLocale from './en';
import  id as BahasaLocale  from './bahasa';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en',
  fallbackLng: ['en', 'id'], // language to use
  lowerCaseLng: true,
  resources: {
    id: BahasaLocale,
    en: ENLocale,
  },
});

export default function InternalisationWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const LangState = useSelector((state: RootStore) => state.lang);

  useEffect(() => {
    i18next.changeLanguage(LangState.lang);
    // console.log('hey');
    console.log('i18next.languages', i18next);
  }, [LangState.lang]);
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
