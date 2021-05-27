import Questions from '../questions';

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

import { useEffect, Fragment } from 'react';
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

const QuizPage = () => {
  const router = useRouter();

  const [t, i18n] = useTranslation('quiz');
  const [tQuestions, i18nQuestions] = useTranslation('questions');

  const dispatch = useDispatch();
  const QuizState = useSelector((state: RootStore) => state.quiz);
  const LangState = useSelector((state: RootStore) => state.lang);
  // console.log('rendered!', QuizState, Questions.length);

  useEffect(() => {
    dispatch<InitQuiz>({
      type: QuizActions.initQuiz,
    });
  }, []);

  useEffect(() => {
    if (QuizState.qn == Questions.length) {
      router.push('/results');
    }
  }, [QuizState.qn]);

  function nextQuestion(mult: number) {
    dispatch<NextQuiz>({
      type: QuizActions.nextQuiz,
      mult: mult,
    });
  }

  return (
    <Box mx={10} pt={100}>
      <Fragment>
        <Hero
          title={t('question_no', {
            current: QuizState.qn + 1,
            total: Questions.length,
          })}
        />
        <Container mt={20} pb='100px'>
          {QuizState.qn == 0 && (
            <>
              <Heading
                as='h1'
                size={useBreakpointValue({ base: 'lg', sm: 'xl', md: 'xl' })}
              >
                {
                  GetQuestionBasedOnLanguage(LangState.lang)[QuizState.qn]
                    .question
                }
              </Heading>
              <Flex flexDirection='column' mt={5}>
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
              </Flex>
            </>
          )}
        </Container>
      </Fragment>
    </Box>
  );
};

export default QuizPage;
