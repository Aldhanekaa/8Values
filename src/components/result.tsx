import Questions from '../questions';
import ideologies from '../ideologies';

import {
  authority,
  equality,
  liberty,
  peace,
  might,
  progress,
  tradition,
  wealth,
} from '../images';

import {
  useBreakpointValue,
  Box,
  Container,
  Heading,
  Flex,
  Button,
  Text,
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

const ResultComponent = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const LangState = useSelector((state: RootStore) => state.lang);
  const QuizState = useSelector((state: RootStore) => state.quiz);

  const [t, i18n] = useTranslation('axis');
  const [tMathes, i18nMatches] = useTranslation('matches');

  // console.log('After this text, return will be called', QuizState);

  useEffect(() => {
    console.log(
      // @ts-ignore
      i18nMatches.getDataByLanguage(i18nMatches.language).matches,
    );

    dispatch({
      type: QuizActions.calc_score,
    });

    // @ts-ignore
    const matches = i18nMatches.getDataByLanguage(i18nMatches.language).matches;

    const equality = QuizState.results.e;
    const peace = QuizState.results.d;
    const liberty = QuizState.results.g;
    const progress = QuizState.results.s;
    const wealth = Number((100 - equality).toFixed(1));
    const might = Number((100 - peace).toFixed(1));
    const authority = Number((100 - liberty).toFixed(1));
    const tradition = Number((100 - progress).toFixed(1));

    setBarValue('equality', equality);
    setBarValue('wealth', wealth);
    setBarValue('peace', peace);
    setBarValue('might', might);
    setBarValue('liberty', liberty);
    setBarValue('authority', authority);
    setBarValue('progress', progress);
    setBarValue('tradition', tradition);

    // @ts-ignore
    document.getElementById('economic-label').innerHTML = setLabel(
      equality,
      matches.econ,
    );
    // @ts-ignore
    document.getElementById('diplomatic-label').innerHTML = setLabel(
      peace,
      matches.dipl,
    );
    // @ts-ignore
    document.getElementById('state-label').innerHTML = setLabel(
      liberty,
      matches.govt,
    );
    // @ts-ignore
    document.getElementById('society-label').innerHTML = setLabel(
      progress,
      matches.scty,
    );

    let ideology = '';
    let ideodist = Infinity;

    for (var i = 0; i < ideologies.length; i++) {
      let dist = 0;
      dist += Math.pow(Math.abs(ideologies[i].stats.econ - equality), 2);
      dist += Math.pow(Math.abs(ideologies[i].stats.govt - liberty), 2);
      dist += Math.pow(Math.abs(ideologies[i].stats.dipl - peace), 1.73856063);
      dist += Math.pow(
        Math.abs(ideologies[i].stats.scty - progress),
        1.73856063,
      );
      if (dist < ideodist) {
        ideology = ideologies[i].name;
        ideodist = dist;
      }
    }
    // @ts-ignore
    document.getElementById('ideology-label').innerHTML = ideology;

    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    c.width = 800;
    c.height = 650;
    if (ctx) {
      ctx.fillStyle = '#EEEEEE';
      ctx.fillRect(0, 0, 800, 650);

      var img = document.getElementById('img-equality') as HTMLCanvasElement;
      ctx.drawImage(img, 20, 170, 100, 100);
      img = document.getElementById('img-wealth') as HTMLCanvasElement;
      ctx.drawImage(img, 680, 170, 100, 100);
      img = document.getElementById('img-might') as HTMLCanvasElement;
      ctx.drawImage(img, 20, 290, 100, 100);
      img = document.getElementById('img-peace') as HTMLCanvasElement;
      ctx.drawImage(img, 680, 290, 100, 100);
      img = document.getElementById('img-liberty') as HTMLCanvasElement;
      ctx.drawImage(img, 20, 410, 100, 100);
      img = document.getElementById('img-authority') as HTMLCanvasElement;
      ctx.drawImage(img, 680, 410, 100, 100);
      img = document.getElementById('img-tradition') as HTMLCanvasElement;
      ctx.drawImage(img, 20, 530, 100, 100);
      img = document.getElementById('img-progress') as HTMLCanvasElement;
      ctx.drawImage(img, 680, 530, 100, 100);

      ctx.fillStyle = '#222222';
      ctx.fillRect(120, 180, 560, 80);
      ctx.fillRect(120, 300, 560, 80);
      ctx.fillRect(120, 420, 560, 80);
      ctx.fillRect(120, 540, 560, 80);
      ctx.fillStyle = '#f44336';
      ctx.fillRect(120, 184, 5.6 * equality - 2, 72);
      ctx.fillStyle = '#00897b';
      ctx.fillRect(682 - 5.6 * wealth, 184, 5.6 * wealth - 2, 72);
      ctx.fillStyle = '#ff9800';
      ctx.fillRect(120, 304, 5.6 * might - 2, 72);
      ctx.fillStyle = '#03a9f4';
      ctx.fillRect(682 - 5.6 * peace, 304, 5.6 * peace - 2, 72);
      ctx.fillStyle = '#ffeb3b';
      ctx.fillRect(120, 424, 5.6 * liberty - 2, 72);
      ctx.fillStyle = '#3f51b5';
      ctx.fillRect(682 - 5.6 * authority, 424, 5.6 * authority - 2, 72);
      ctx.fillStyle = '#8bc34a';
      ctx.fillRect(120, 544, 5.6 * tradition - 2, 72);
      ctx.fillStyle = '#9c27b0';
      ctx.fillRect(682 - 5.6 * progress, 544, 5.6 * progress - 2, 72);
      ctx.fillStyle = '#222222';
      ctx.font = '700 80px Montserrat';
      ctx.textAlign = 'left';
      ctx.fillText('8values', 20, 90);
      ctx.font = '50px Montserrat';
      ctx.fillText(ideology, 20, 140);

      ctx.textAlign = 'left';
      if (equality > 30) {
        ctx.fillText(equality + '%', 130, 237.5);
      }
      if (might > 30) {
        ctx.fillText(might + '%', 130, 357.5);
      }
      if (liberty > 30) {
        ctx.fillText(liberty + '%', 130, 477.5);
      }
      if (tradition > 30) {
        ctx.fillText(tradition + '%', 130, 597.5);
      }
      ctx.textAlign = 'right';
      if (wealth > 30) {
        ctx.fillText(wealth + '%', 670, 237.5);
      }
      if (peace > 30) {
        ctx.fillText(peace + '%', 670, 357.5);
      }
      if (authority > 30) {
        ctx.fillText(authority + '%', 670, 477.5);
      }
      if (progress > 30) {
        ctx.fillText(progress + '%', 670, 597.5);
      }

      ctx.font = '30px Montserrat';
      ctx.fillText('8values.now.sh', 780, 60);
      ctx.fillText('Test Edition #1', 780, 90);
      ctx.textAlign = 'center';
      ctx.fillText(
        'Economic Axis: ' +
          // @ts-ignore
          document.getElementById('economic-label').innerHTML,
        400,
        175,
      );
      ctx.fillText(
        'Diplomatic Axis: ' +
          // @ts-ignore
          document.getElementById('diplomatic-label').innerHTML,
        400,
        295,
      );
      ctx.fillText(
        'Civil Axis: ' +
          // @ts-ignore
          document.getElementById('state-label').innerHTML,
        400,
        415,
      );
      ctx.fillText(
        'Societal Axis: ' +
          // @ts-ignore
          document.getElementById('society-label').innerHTML,
        400,
        535,
      );

      var banner = document.getElementById('banner') as HTMLImageElement;
      banner.src = c.toDataURL();
    }
    // @ts-ignore
    //   document.getElementById('banner').src = c.toDataURL();
  }, []);

  return (
    <div>
      <h2>
        {t('economic_axis')}{' '}
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
        {t('diplomatic_axis')}{' '}
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
        {t('civic_axis')} <span className='weight-300' id='state-label'></span>
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
        {t('societal_axis')}{' '}
        <span className='weight-300' id='society-label'></span>
      </h2>
      <div className='axis'>
        <img id='img-tradition' src={tradition} height='128pt' />
        <div className='bar tradition' id='bar-tradition'>
          <div className='text-wrapper' id='tradition'></div>
        </div>
        <div className='bar progress' id='bar-progress'>
          <div className='text-wrapper' id='progress'></div>
        </div>
        <img id='img-progress' src={progress} height='128pt' />
      </div>
      <Heading mt={10}>
        {t('closest_match')}{' '}
        <span className='weight-300' id='ideology-label'></span>
      </Heading>
      <Text mt={2} mb={3}>
        Ideological matching is a work in progress, and is much less accurate
        than the values and axes.
      </Text>

      <hr />
      <img src='' id='banner' />
    </div>
  );
};

export default ResultComponent;

function setLabel(val: number, ary: Array<any>) {
  if (val > 100) {
    return '';
  } else if (val > 90) {
    return ary[0];
  } else if (val > 75) {
    return ary[1];
  } else if (val > 60) {
    return ary[2];
  } else if (val >= 40) {
    return ary[3];
  } else if (val >= 25) {
    return ary[4];
  } else if (val >= 10) {
    return ary[5];
  } else if (val >= 0) {
    return ary[6];
  } else {
    return '';
  }
}

function setBarValue(name: string, value: string | number) {
  let innerel = document.getElementById(name);
  let outerel = document.getElementById('bar-' + name);
  if (innerel && outerel) {
    outerel.style.width = value + '%';
    innerel.innerHTML = value + '%';
    if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
      innerel.style.visibility = 'hidden';
    }
  }
}
