interface questionI {
  effect: {
    econ: number;
    dipl: number;
    govt: number;
    scty: number;
  };
}
const questions: Array<questionI> = [
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: -5,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 5,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: -5,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 5,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -5,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -5,
      dipl: 10,
      govt: 10,
      scty: 5,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -5,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -5,
      dipl: -10,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 5,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 5,
      govt: -5,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -5,
      govt: -10,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -5,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -5,
      govt: -10,
      scty: -5,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: -5,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 5,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 5,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -5,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 5,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    effect: { econ: 0, dipl: 0, govt: 0, scty: -10 },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 2,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 5,
      scty: 10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -5,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -5,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    effect: { econ: 0, dipl: 10, govt: 10, scty: 0 },
  },
  {
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 0,
    },
  },
  {
    effect: {
      econ: -10,
      dipl: -10,
      govt: -10,
      scty: -10,
    },
  },
  {
    effect: {
      econ: 10,
      dipl: 10,
      govt: 10,
      scty: 10,
    },
  },
];

export default questions;
