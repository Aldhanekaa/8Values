import { combineReducers } from 'redux';
import LangReducer from './changeLang';
import QuizReducer from './quizReducer';

const RootReducer = combineReducers({
  lang: LangReducer,
  quiz: QuizReducer,
});

export type RootStore = ReturnType<typeof RootReducer>;

export default RootReducer;
