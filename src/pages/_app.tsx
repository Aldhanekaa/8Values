import '../styles/index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { NextCookieProvider } from 'next-universal-cookie';

import theme from '../theme';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

import { Provider } from 'react-redux';
import store from '../redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextCookieProvider cookie={pageProps.cookie}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </NextCookieProvider>
    </Provider>
  );
}

export default MyApp;
