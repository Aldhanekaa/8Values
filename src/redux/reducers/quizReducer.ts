import { QuizActions, QuizDispatchTypes } from '../actions/quiz';
import Questions from '../../questions';

export interface QuizState {
  data: {
    econ_array: any[];
    dipl_array: any[];
    govt_array: any[];
    scty_array: any[];
  };
  results?: {
    e: number;
    d: number;
    g: number;
    s: number;
  };
  qn: number;
}

const defaultQuizState: QuizState = {
  qn: 0,
  data: {
    econ_array: new Array(Questions.length),
    dipl_array: new Array(Questions.length),
    govt_array: new Array(Questions.length),
    scty_array: new Array(Questions.length),
  },
};

const LangReducer = (
  state: QuizState = defaultQuizState,
  action: QuizDispatchTypes,
): QuizState => {
  switch (action.type) {
    case QuizActions.nextQuiz:
      const copyOfState = { ...state };

      copyOfState.data.econ_array[state.qn] =
        action.mult * Questions[state.qn].effect.econ;
      copyOfState.data.dipl_array[state.qn] =
        action.mult * Questions[state.qn].effect.dipl;
      copyOfState.data.govt_array[state.qn] =
        action.mult * Questions[state.qn].effect.govt;
      copyOfState.data.scty_array[state.qn] =
        action.mult * Questions[state.qn].effect.scty;
      copyOfState.qn += 1;
      console.log('yeep!', copyOfState.qn);

      if (copyOfState.qn < Questions.length) {
        return Object.assign({}, state, { ...copyOfState });
      }
      console.log('yoooooo!', copyOfState.qn);

      return Object.assign({}, state, { ...copyOfState });

    case QuizActions.prevQuiz:
      if (state.qn == 0) {
        return state;
      }
      return Object.assign({}, state, { qn: --state.qn });
    default:
      return state;
  }
};

export default LangReducer;
