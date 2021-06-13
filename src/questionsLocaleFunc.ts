import i18next from 'i18next';

import EN_questions_Locale from './locales/en/questions.json';

export default function GetQuestionBasedOnLanguage() {
  // @ts-ignore
  const langQuestions = i18next.getDataByLanguage(i18next.language).questions;

  //i18next.getDataByLanguage('id')
  if (!langQuestions) {
    return EN_questions_Locale;
  }

  return langQuestions;
}
