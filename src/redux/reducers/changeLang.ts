import { LangActions, LangDispatchTypes, LanguagesT } from '../actions/lang';

export interface LangState {
  lang: LanguagesT;
}

const defaultLang: LangState = {
  lang: 'en',
};

const LangReducer = (
  state: LangState = defaultLang,
  action: LangDispatchTypes,
): LangState => {
  switch (action.type) {
    case LangActions.setLang:
      return Object.assign({}, state, { lang: action.lang });
    default:
      return state;
  }
};

export default LangReducer;
