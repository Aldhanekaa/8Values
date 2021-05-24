import { Dispatch } from 'redux';

export enum LangActions {
  setLang,
  deleteLang,
}

export type LanguagesT = 'bahasa' | 'en-uk';
export const Languages = ['bahasa', 'en-uk'];

export interface SetLang {
  type: LangActions.setLang;
  lang: string;
}
export type LangDispatchTypes = SetLang;

export const SetLang =
  (Lang: LanguagesT) => (dispatch: Dispatch<LangDispatchTypes>) => {
    dispatch({
      type: LangActions.setLang,
      lang: Lang,
    });

    // console.log('hey');
  };
