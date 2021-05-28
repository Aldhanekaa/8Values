import Questions from '../questions';

//#value-images
// @ts-ignore
import authority from '../value_images/authority.svg';

// @ts-ignore
import equality from '../value_images/equality.svg';

// @ts-ignore
import liberty from '../value_images/liberty.svg';

// @ts-ignore
import might from '../value_images/might.svg';

// @ts-ignore
import peace from '../value_images/peace.svg';

// @ts-ignore
import progress from '../value_images/progress.svg';

// @ts-ignore
import tradition from '../value_images/tradition.svg';

// @ts-ignore
import wealth from '../value_images/wealth.svg';
//#endvalue-images

import {
  useBreakpointValue,
  Box,
  Container,
  Heading,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import { Hero } from '../components/Hero';
import { useTranslation } from 'react-i18next';

import { useEffect, Fragment, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/index';
import {
  QuizActions,
  NextQuiz,
  PrevQuiz,
  InitQuiz,
} from '../redux/actions/quiz';

import GetQuestionBasedOnLanguage from '../questionsLocaleFunc';

const QuizPage = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const LangState = useSelector((state: RootStore) => state.lang);
  const QuizState = useSelector((state: RootStore) => state.quiz);

  const router = useRouter();

  const [t, i18n] = useTranslation('quiz');
  const [tQuestions, i18nQuestions] = useTranslation('questions');

  // console.log('rendered!', QuizState, Questions.length);

  function nextQuestion(mult: number) {
    dispatch<NextQuiz>({
      type: QuizActions.nextQuiz,
      mult: mult,
    });
  }
  useEffect(() => {
    if (QuizState.qn == Questions.length) {
      console.log(QuizState);
    }
  }, [QuizState.qn]);

  useEffect(() => {
    dispatch<InitQuiz>({
      type: QuizActions.initQuiz,
    });
  }, []);
  console.log('After this text, return will be called', QuizState);

  return (
    <Box mx={10} pt={100}>
      <Fragment>
        {GetQuestionBasedOnLanguage(LangState.lang)[QuizState.qn] && (
          <Hero
            title={t('question_no', {
              current: QuizState.qn + 1,
              total: Questions.length,
            })}
          />
        )}

        <Container mt={10} pb='100px'>
          {/* <div>
            <h2>
              Economic Axis:{' '}
              <span className='weight-300' id='economic-label'></span>
            </h2>
            <div className='axis'>
              <img id='img-equality' src={equality} />
              <div className='bar equality' id='bar-equality'>
                <div className='text-wrapper' id='equality'></div>
              </div>
              <div className='bar wealth' id='bar-wealth'>
                <div className='text-wrapper' id='wealth'></div>
              </div>
              <img id='img-wealth' src={wealth} />
            </div>
            <h2>
              Diplomatic Axis:{' '}
              <span className='weight-300' id='diplomatic-label'></span>
            </h2>
            <div className='axis'>
              <img id='img-might' src={might} />
              <div className='bar might' id='bar-might'>
                <div className='text-wrapper' id='might'></div>
              </div>
              <div className='bar peace' id='bar-peace'>
                <div className='text-wrapper' id='peace'></div>
              </div>
              <img id='img-peace' src={peace} />
            </div>
            <h2>
              Civil Axis: <span className='weight-300' id='state-label'></span>
            </h2>
            <div className='axis'>
              <img id='img-liberty' src={liberty} />
              <div className='bar liberty' id='bar-liberty'>
                <div className='text-wrapper' id='liberty'></div>
              </div>
              <div className='bar authority' id='bar-authority'>
                <div className='text-wrapper' id='authority'></div>
              </div>
              <img id='img-authority' src={authority} />
            </div>
            <h2>
              Societal Axis:{' '}
              <span className='weight-300' id='society-label'></span>
            </h2>
            <div className='axis'>
              <img id='img-tradition' src={tradition} height='128pt' />
              <div
                className='bar tradition'
                style={{ width: '30%' }}
                id='bar-tradition'
              >
                <div className='text-wrapper' id='tradition'>
                  30%
                </div>
              </div>
              <div
                className='bar progress'
                id='bar-progress'
                style={{ width: '70%' }}
              >
                <div className='text-wrapper' id='progress'>
                  70%
                </div>
              </div>
              <img id='img-progress' src={progress} height='128pt' />
            </div>
          </div> */}

          <Heading
            as='h1'
            size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
          >
            {GetQuestionBasedOnLanguage(LangState.lang)[QuizState.qn] &&
              GetQuestionBasedOnLanguage(LangState.lang)[QuizState.qn].question}
          </Heading>

          {GetQuestionBasedOnLanguage(LangState.lang)[QuizState.qn] ? (
            <Flex flexDirection='column' alignItems='center' mt={5}>
              <Button
                width='100%'
                color={useColorModeValue('white', 'white')}
                bg={useColorModeValue('green.700', 'green.800')}
                _hover={{ bg: useColorModeValue('green.800', 'green.700') }}
                _active={{ bg: useColorModeValue('green.900', 'green.800') }}
                onClick={() => nextQuestion(1.0)}
              >
                {t('buttons.strongly_agree')}
              </Button>
              <Button
                mt={3}
                width='100%'
                color={useColorModeValue('white', 'white')}
                bg={useColorModeValue('green.400', 'green.500')}
                _hover={{ bg: useColorModeValue('green.500', 'green.400') }}
                _active={{ bg: useColorModeValue('green.600', 'green.300') }}
                onClick={() => nextQuestion(0.5)}
              >
                {t('buttons.agree')}
              </Button>
              <Button width='100%' mt={3} onClick={() => nextQuestion(0.0)}>
                {t('buttons.neutral')}
              </Button>
              <Button
                width='100%'
                bg={useColorModeValue('red.400', 'red.400')}
                _hover={{ bg: useColorModeValue('red.500', 'red.300') }}
                _active={{ bg: useColorModeValue('red.600', 'red.300') }}
                mt={3}
                colorScheme='red'
                onClick={() => nextQuestion(-0.5)}
              >
                {t('buttons.disagree')}
              </Button>
              <Button
                width='100%'
                bg={useColorModeValue('red.600', 'red.600')}
                _hover={{ bg: useColorModeValue('red.700', 'red.600') }}
                _active={{ bg: useColorModeValue('red.800', 'red.500') }}
                mt={3}
                colorScheme='red'
                onClick={() => nextQuestion(-1.0)}
              >
                {t('buttons.strongly_disagree')}
              </Button>

              <Button
                width='60%'
                mt={10}
                colorScheme='gray'
                onClick={() =>
                  dispatch<PrevQuiz>({
                    type: QuizActions.prevQuiz,
                  })
                }
                isDisabled={QuizState.qn == 0}
              >
                {t('buttons.back')}
              </Button>
            </Flex>
          ) : (
            'done! congrats!'
          )}
        </Container>
      </Fragment>
    </Box>
  );
};

export default QuizPage;
