import '../styles/index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { NextCookieProvider } from 'next-universal-cookie';

import theme from '../theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

import { Provider } from 'react-redux';
import store from '../redux';
import InternalisationWrapper from '../locales/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:400,700'
          rel='stylesheet'
        />

        <meta name='theme-color' content='#f0efeb' />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' href='/icon.png'></link>
      </Head>
      <Provider store={store}>
        <NextCookieProvider cookie={pageProps.cookie}>
          <ChakraProvider resetCSS theme={theme}>
            <Layout>
              <InternalisationWrapper>
                <Component {...pageProps} />
              </InternalisationWrapper>
            </Layout>
          </ChakraProvider>
        </NextCookieProvider>
      </Provider>
    </>
  );
}

export default MyApp;
