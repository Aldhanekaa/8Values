import { LangActions, LangDispatchTypes } from '../actions/lang';

export interface LangState {
  lang: string;
}

const defaultLang: LangState = {
  lang: 'en',
};

const LangReducer = (
  state: LangState = defaultLang,
  action: LangDispatchTypes,
): LangState => {
  // console.log(state);

  switch (action.type) {
    case LangActions.setLang:
      return Object.assign({}, state, { lang: action.lang });
    default:
      return state;
  }
};

export default LangReducer;
