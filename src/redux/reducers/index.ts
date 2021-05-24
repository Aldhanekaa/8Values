import { combineReducers } from 'redux';
import LangReducer from './changeLang';

const RootReducer = combineReducers({
  lang: LangReducer,
});

export type RootStore = ReturnType<typeof RootReducer>;

export default RootReducer;
