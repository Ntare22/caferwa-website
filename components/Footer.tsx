import React from 'react';
import Image from 'next/image';
import logo from '../assets/caferwa-logo.svg';

const Footer = () => {
  return (
    <div className='border-t-2'>
      <div className='flex items-center justify-between py-9 lg:mx-64'>
        <Image alt='caferwa logo' src={logo} width='60' height='60' />
        <div className='grid grid-cols-3 text-sm font-bold lg:w-1/2'>
          <div className='flex flex-col'>
            <a href='#'>Partners</a>
            <a href='#'>Products</a>
          </div>
          <div className='flex flex-col'>
            <a href='#'>About Us</a>
            <a href='#'>CSR</a>
          </div>
          <div className='flex flex-col'>
            <a href='#'>Twitter</a>
            <a href='#'>Linkedin</a>
            <a href='#'>Facebook</a>
          </div>
        </div>
      </div>
      <hr className='mx-auto w-1/2' />
      <p className='text-center text-xs font-bold py-5'>Rwanda&apos;s Finest Coffee. &copy;2022 Caferwa, All rights reserved.</p>
    </div>
  )
}

export default Footer
