import React from 'react'
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About: NextPage = () => {
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
        <title>Caferwa - About</title>
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
          this is the about page it has been adjusted
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default About
