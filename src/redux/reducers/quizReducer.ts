import { QuizActions, QuizDispatchTypes } from '../actions/quiz';
import Questions from '../../questions';

export interface QuizState {
  data: {
    econ_array: any[];
    dipl_array: any[];
    govt_array: any[];
    scty_array: any[];
  };
  results: {
    e: number;
    d: number;
    g: number;
    s: number;
  };
  possibleScores: {
    max_econ: number;
    max_dipl: number;
    max_govt: number;
    max_scty: number;
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
  results: {
    e: 0,
    d: 0,
    g: 0,
    s: 0,
  },
  possibleScores: {
    max_econ: 0,
    max_dipl: 0,
    max_govt: 0,
    max_scty: 0,
  },
};

function calc_score(score: number, max: number) {
  return ((100 * (max + score)) / (2 * max)).toFixed(1);
}

const QuizReducer = (
  state: QuizState = defaultQuizState,
  action: QuizDispatchTypes,
): QuizState => {
  const copyOfState = { ...state };

  // console.log(action);
  switch (action.type) {
    case QuizActions.calc_score:
      let final_econ = state.data.econ_array.reduce((a, b) => a + b, 0);
      let final_dipl = state.data.dipl_array.reduce((a, b) => a + b, 0);
      let final_govt = state.data.govt_array.reduce((a, b) => a + b, 0);
      let final_scty = state.data.scty_array.reduce((a, b) => a + b, 0);

      copyOfState.results.e = Number(
        calc_score(final_econ, state.possibleScores.max_econ),
      );
      copyOfState.results.d = Number(
        calc_score(final_dipl, state.possibleScores.max_dipl),
      );
      copyOfState.results.g = Number(
        calc_score(final_govt, state.possibleScores.max_govt),
      );
      copyOfState.results.s = Number(
        calc_score(final_scty, state.possibleScores.max_scty),
      );

      return Object.assign({}, state, copyOfState);

    case QuizActions.initQuiz:
      for (var i = 0; i < Questions.length; i++) {
        copyOfState.possibleScores.max_econ += Math.abs(
          Questions[i].effect.econ,
        );
        copyOfState.possibleScores.max_dipl += Math.abs(
          Questions[i].effect.dipl,
        );
        copyOfState.possibleScores.max_govt += Math.abs(
          Questions[i].effect.govt,
        );
        copyOfState.possibleScores.max_scty += Math.abs(
          Questions[i].effect.scty,
        );
      }

      return Object.assign({}, copyOfState, defaultQuizState);

    case QuizActions.nextQuiz:
      copyOfState.data.econ_array[state.qn] =
        action.mult * Questions[state.qn].effect.econ;
      copyOfState.data.dipl_array[state.qn] =
        action.mult * Questions[state.qn].effect.dipl;
      copyOfState.data.govt_array[state.qn] =
        action.mult * Questions[state.qn].effect.govt;
      copyOfState.data.scty_array[state.qn] =
        action.mult * Questions[state.qn].effect.scty;
      copyOfState.qn += 1;
      // console.log('yeep!', copyOfState.qn);

      if (copyOfState.qn < Questions.length) {
        return Object.assign({}, state, copyOfState);
      }
      // console.log('yoooooo!', copyOfState.qn);

      return Object.assign({}, state, copyOfState);

    case QuizActions.prevQuiz:
      // console.log('prev');
      if (state.qn == 0) {
        return state;
      }
      return Object.assign({}, state, { qn: --state.qn });
    default:
      return state;
  }
};

export default QuizReducer;
