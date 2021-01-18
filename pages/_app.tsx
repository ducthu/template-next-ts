import App from 'next/app';
import React from 'react';

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// STYLING
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

// NProgress
import NextNProgress from 'nextjs-progressbar';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider attribute='class'>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <NextNProgress color='#48BB78' options={{ easing: 'ease', showSpinner: false }} />
      </ThemeProvider>
    );
  }
};