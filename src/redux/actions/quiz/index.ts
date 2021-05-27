import { Dispatch } from 'redux';

export enum QuizActions {
  prevQuiz,
  nextQuiz,
  calc_score,
  initQuiz,
}

export type LanguagesT = 'id' | 'en';
export const Languages = ['id', 'en'];

export interface PrevQuiz {
  type: QuizActions.prevQuiz;
}
export interface InitQuiz {
  type: QuizActions.initQuiz;
}

export interface NextQuiz {
  type: QuizActions.nextQuiz;
  mult: number;
}
export type QuizDispatchTypes = NextQuiz | PrevQuiz | InitQuiz;
