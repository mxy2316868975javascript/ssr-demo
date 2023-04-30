import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/global.css';
import { CONSTANTES } from '../utils';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>OTTO Cyprien</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='Personal github page of OTTO Cyprien'
        />
        <link
          rel='icon'
          href={CONSTANTES.FILES_SRC.favicon}
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
