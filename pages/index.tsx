import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import mainImg from '../assets/pic-one.png';
import cardImg from '../assets/card-pic.jpeg';
import sfbaycoffee from '../assets/sf-bay-coffee.png';
import cccoffee from '../assets/CCC_logo_071316_transparent.webp';
import olam from '../assets/olam-logo.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home: NextPage = () => {
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
        <title>Caferwa - 100% Rwandan Coffee</title>
        <meta name='description' content='Caferwa Website' />
        <link
          rel='icon'
          href={isDarkTheme ? '/favicon-white.ico' : '/favicon.ico'}
          id='favicon'
        />
      </Head>
      <main>
        <NavBar />
        <div className='flex items-center py-12 lg:mx-24 lg:py-44 justify-center'>
          <div className='lg:-ml-96'>
            <h1 className='uppercase font-bold text-2xl lg:text-6xl w-66 '>100% Rwandan <br /> Coffee</h1>
            <p className='w-96'>
              A few short words written about the amazing rwandan coffee and
              caferwa’s role
            </p>
            <button className='bg-coffee px-4 py-2 text-white uppercase font-bold mt-4'>Try Now</button>
          </div>
          <div className='absolute lg:ml-96'>
            <Image src={mainImg} className='-z-10' alt='main image' />
          </div>
        </div>
        {/* <div className='bg-gray-500 flex justify-center -z-10'>
          <Image src={mainImg} />
          <div className='absolute mt-40'>
            <p>Some text here</p>
          </div>
        </div> */}
        <div className='flex justify-center py-6 items-center bg-light-coffee'>
          <div className='hidden lg:flex'>
            <div className='bg-white h-80'>
              <Image src={cardImg} width='250' height='250' alt='process image 1' />
              <h1 className='font-bold uppercase'>Process 1</h1>
              <p>some text here</p>
            </div>
            <div className='bg-white h-80 mt-12 ml-5'>
              <Image src={cardImg} width='250' height='250' alt='process image 2' />
              <h1 className='font-bold uppercase'>Process 2</h1>
              <p>some text here</p>
            </div>
          </div>
          <div className='mx-14 w-96'>
            <h1 className='text-2xl font-bold'>The Process</h1>
            <p className='py-2'>
              A few words about the roasting that will act as a call to action
              to checkout the whole process.
            </p>
            <a>
              <button className='uppercase bg-coffee text-white text-sm font-bold py-2 px-2'>Learn More</button>
            </a>
          </div>
        </div>
        <div className='flex flex-col py-16'>
          <div className='mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Join our mailing list</h1>
            <div className='py-6'>
              <input placeholder='Enter your email' className='border px-4 py-2 mx-3' />
              <button className='bg-coffee px-4 py-2 text-white font-bold uppercase'>Join</button>
            </div>
          </div>
          <div>
            <h1 className='text-center text-3xl font-bold mt-6'>Our Partners</h1>
            <div className='py-3 mt-3 flex flex-col items-center lg:flex-row justify-evenly lg:mx-96'>
              <a href='https://sfbaycoffee.com/' target='_blank' rel="noreferrer">
                <Image src={sfbaycoffee} height="60" width='120' alt='partner logo 1' />
              </a>
              <a href='https://www.olamgroup.com/' target='_blank' rel="noreferrer">
                <Image src={olam} height="60" width='180' alt='partner logo 2' />
              </a>
              <a href='https://counterculturecoffee.com/' target='_blank' rel="noreferrer">
                <Image src={cccoffee} height="60" width='60' alt='partner logo 3' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-coffee py-24'>
          <h1 className='mx-auto text-center text-5xl font-bold text-white'>Buy Rwandan Coffee!</h1>
          <a className='mx-auto'>
            <button className='uppercase text-sm bg-white mt-6 py-3 px-7 font-bold text-coffee'>Buy Now</button>
          </a>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
