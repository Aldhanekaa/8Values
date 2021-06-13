import i18next from 'i18next';

export default function GetQuestionBasedOnLanguage() {
  // @ts-ignore
  const langQuestions = i18next.getDataByLanguage(i18next.language).questions;

  //i18next.getDataByLanguage('id')
  if (!langQuestions) {
    return EN_questions_Locale;
  }

  return langQuestions;
}
