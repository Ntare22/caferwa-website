import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from '../assets/caferwa-logo.svg'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between'>
      <Image alt='caferwa logo' src={logo} width='60' height='60'/>
      <ul className='hidden lg:flex uppercase sm:text-xs md:text-sm font-bold w-1/2 justify-between items-center'>
        <li className='underline underline-offset-8 decoration-2 decoration-coffee'>Home</li>
        <li className='underline underline-offset-8 decoration-2 decoration-coffee'>About Us</li>
        <li className='underline underline-offset-8 decoration-2 decoration-coffee'>Products</li>
        <li className='underline underline-offset-8 decoration-2 decoration-coffee'>Contact Us</li>
        <button className='uppercase bg-coffee w-24 p-2 text-white'>Try Now</button>
      </ul>
      <div className='lg:hidden'>
        <button>X</button>
      </div>
    </div>
  )
}

export default NavBar
