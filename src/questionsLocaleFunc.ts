import { LanguagesT } from './redux/actions/lang';
import { useEffect } from 'react';

import Bahasa_questions_Locale from './locales/bahasa/questions.json';
import EN_questions_Locale from './locales/en/questions.json';

export default function GetQuestionBasedOnLanguage(lang: LanguagesT) {
  switch (lang) {
    case 'en':
      return EN_questions_Locale;

      break;
    case 'id':
      return Bahasa_questions_Locale;
      break;
    default:
      return EN_questions_Locale;

      break;
  }
}
