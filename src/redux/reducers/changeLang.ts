import { LangActions, LangDispatchTypes } from '../actions/lang';

export interface LangState {
  lang: string;
}

const defaultLang: LangState = {
  lang: 'en-uk',
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
