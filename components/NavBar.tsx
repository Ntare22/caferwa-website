import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/caferwa-logo.svg';

const NavBar = () => {
  const [menu, setMenu] = useState(false)

  const closeMenu = () => {
    setMenu(false)
  }

  const openMenu = () => {
    setMenu(true)
  }

  

  return (
    <div className='flex items-center justify-between'>
      <Image alt='caferwa logo' src={logo} width='60' height='60' />
      <ul className='hidden lg:flex uppercase sm:text-xs md:text-sm font-bold w-1/2 justify-between items-center'>
        <a className='underline underline-offset-8 decoration-2 decoration-coffee'>
          Home
        </a>
        <a className='underline underline-offset-8 decoration-2 decoration-coffee'>
          About Us
        </a>
        <a className='underline underline-offset-8 decoration-2 decoration-coffee'>
          Products
        </a>
        <a className='underline underline-offset-8 decoration-2 decoration-coffee'>
          Contact Us
        </a>
        <button className='uppercase bg-coffee w-24 p-2 text-white'>
          Try Now
        </button>
      </ul>
      <div className='lg:hidden'>
        <div className='p-3' onClick={openMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      </div>
      <div className={`lg:hidden mt-8 bg-white absolute text-center pt-24 mx-auto w-full ${menu ? '' : 'hidden'}`}>
        <div className='flex justify-end mr-2 pt-8' onClick={closeMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            />
          </svg>
        </div>
        <div className='uppercase flex flex-col underline underline-offset-8 decoration-2 bg-white pb-4'>
          <a className='decoration-coffee'>Home</a>
          <a className='mt-4 decoration-coffee'>About</a>
          <a className='mt-4 decoration-coffee'>Products</a>
          <a className='mt-4 decoration-coffee'>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
