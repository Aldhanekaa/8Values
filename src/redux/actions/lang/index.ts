import { Dispatch } from 'redux';
import i18next from 'i18next';

export enum LangActions {
  setLang = 'setLang',
  deleteLang = 'deleteLang',
}

export interface SetLang {
  type: LangActions.setLang;
  lang: string;
}
export type LangDispatchTypes = SetLang;

export const SetLang =
  (Lang: string) => (dispatch: Dispatch<LangDispatchTypes>) => {
    dispatch({
      type: LangActions.setLang,
      lang: Lang,
    });

    // console.log('hey');
  };
