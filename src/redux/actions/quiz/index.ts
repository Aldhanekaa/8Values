import { Dispatch } from 'redux';

export enum QuizActions {
  prevQuiz,
  nextQuiz,
  calc_score,
}

export type LanguagesT = 'id' | 'en';
export const Languages = ['id', 'en'];

export interface PrevQuiz {
  type: QuizActions.prevQuiz;
}
export interface NextQuiz {
  type: QuizActions.nextQuiz;
  mult: number;
}
export type QuizDispatchTypes = NextQuiz | PrevQuiz;
