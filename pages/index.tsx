import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  useEffect(() => {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkTheme(currentTheme)
  }, [isDarkTheme])

  return (
    <div className='lg:mx-36'>
      <Head>
        <title>Caferwa - 100% Rwandan Coffee</title>
        <meta name='description' content='Caferwa Website' />
        <link rel='icon' href={isDarkTheme? '/favicon-white.ico' : '/favicon.ico'} id='favicon' />
      </Head>
      <NavBar />
      <main className="container">
        this is the body
      </main>
      <Footer />
    </div>
  );
};

export default Home;
