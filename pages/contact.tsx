import React from 'react';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    const currentTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkTheme(currentTheme);
  }, [isDarkTheme]);

  return (
    <div>
      <Head>
        <title>Caferwa - Contact</title>
        <meta name='description' content='Caferwa Website' />
        <link
          rel='icon'
          href={isDarkTheme ? '/favicon-white.ico' : '/favicon.ico'}
          id='favicon'
        />
      </Head>
      <main>
        <NavBar />
        <div className='lg:mx-64'>
          this is the contact page
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Contact
