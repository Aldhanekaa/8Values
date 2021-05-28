import { type } from 'os';
import { Dispatch } from 'redux';

export enum QuizActions {
  prevQuiz = 'prevQuiz',
  nextQuiz = 'nextQuiz',
  calc_score = 'calc_score',
  initQuiz = 'initQuiz',
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

export interface CalcScore {
  type: QuizActions.calc_score;
}
export type QuizDispatchTypes = NextQuiz | PrevQuiz | InitQuiz | CalcScore;
