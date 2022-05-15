import React from 'react';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';
import profilePic from '../assets/card-pic.jpeg'

const Team: NextPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    const currentTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkTheme(currentTheme);
  }, [isDarkTheme]);

  const team = [
    {
      picture: profilePic,
      name: 'MFK',
      role: 'CHAIRMAN',
      profile:
        'Thirty years plus of initiating and delivering sustained results and effective change, Mr. Mbundu Faustin is the founder and Chairman of MFK Group ventures  that invests  across a wide range of industries including consultancy services, agriculture, real estate to transport and logistics, Faustin Mbundu major experience lies in strategizing and leading cross-functional teams to bring about fundamental change and improvement in strategy, process, and profitability across the board both as the Chairman and successful entrepreneur. In addition to running MFK Group, Faustin holds a Chairman of the board position for  the Kigali Arbitration Center (KIAC), African Leadership University (ALU)  MTN Rwandacell PLC as well as Director of East African Development Bank (EADB). Faustin Mbundu holds experience in leading Rwanda Fine Coffee Association as the Vice Chairperson.',
    },
    {
      picture: profilePic,
      name: 'Kevin Mbundu',
      role: 'MANAGING DIRECTOR',
      profile:
        'Innovator and entrepreneur, Kevin Mbundu is experienced in all aspects from business formation, operation, finance, management and visionary product development. He has worked for MFK Group Ltd based in Kigali, Rwanda. MFK Group is a holding company involved in different sectors ranging from consultancy, agriculture, real estate, transport and logistics.Kevin\'s last role was Managing Director of Garden Fresh Ltd, a horticulture production and export company that specializes in exporting fruits and vegetables to the UK and European retail markets. Currently, Kevin Mbundu is the CEO/Co- Founder of Kivu noir coffee, a coffee brand/product that has gained notoriety from their e-commerce business and innovation within the global coffee supply chain.',
    },
    {
      picture: profilePic,
      name: 'Emmanuel Harelimana',
      role: 'CHIIEF FINANCE OFFICER',
      profile:
      'Emmanuel Harelimana, with 18 years of experience in Private sector business management and International organization Project Management at a higher level of responsibility, his area of expertise is in coffee and Horticulture value chain analysis, quality control at farm and processing facility level, cost analysis, financial management and cooperative governance. For the last four years, Emmanuel Harelimana has been a Chief Finance Officer in MFK Group under Caferwa Ltd.',
    },
    {
      picture: profilePic,
      name: 'Evelyne Nkurikiyijuru',
      role: 'General Manager',
      profile:
        'Highly skilled and results-oriented professional with solid academic background in food science, Evelyn holds experience in running the coffee industry with emphasis in managing the supply chain of coffee from the farm processes to the final packaged roasted coffee beans for domestic use and export worldwide. Evelyn has been working with Caferwa Ltd for over 15 years and contributing to the overall coffee industry development in Rwanda.',
    },
    {
      picture: profilePic,
      name: 'Sylvia Twahirwa',
      role: 'Marketing & Sales Manager',
      profile:
        'Sylvia is a certified Banker trained in Retail Sales with extensive experience in Retail banking, leadership and ability to organize successful teams. With 10 years’ experience in the banking industry and 6 years in management positions, Sylvia’s last role was Marketing and Communications Manager of Garden Fresh Ltd, a horticulture production and export company that specializes in exporting fruits and vegetables to the UK and European retail markets. Currently, she’s the marketing and sales manager of Caferwa.',
    },
    {
      picture: profilePic,
      name: 'Sonia Umulisa',
      role: 'Brand Manager',
      profile:
        'Sonia is a creative and detail-oriented business graduate, with a track record of delivering excellent people service and in handling core business operations in a highly regulated environment. Sonia holds experience in working with international and local organizations in customer services and digital strategy/branding field with institutions like; Vocal views London, Royal Masonic Benevolent Institute and Limoz Rwanda Ltd. Sonia is now working at Caferwa as our brand manager with responsibility of translating brand elements into plans and go-to-market strategies.',
    },
    {
      picture: profilePic,
      name: 'Augustin Bizimana',
      role: 'Senior Accountant',
      profile:
        'Augustin joined Caferwa in August 2021, in his role as a senior accountant is responsible for ensuring that accounts and financial records meet established standards and criteria. Augustin’s duties include analyzing financial documents, recording and verifying transactions, as well as producing payroll.',
    },
    {
      picture: profilePic,
      name: 'Claver P Kabayehe',
      role: 'Farm Manager',
      profile:
        'About 30 years plus experience in coffee estates, Claver joined Caferwa in Jan 2007.He performs overall management and cost control of the farm department, He establishes the farm\'s development and cropping plan. Responsible for developing and adhering to all budgets, targets and costing of operations. Claver is a hands-on farm manager who can supervise all employees, full-time and/or seasonal, and all practices and procedures as directed while maintaining the highest standards of production.',
    },
    {
      picture: profilePic,
      name: 'Assouman Niyonkuru',
      role: 'HEAD BARISTA',
      profile:
        'Assouman joined Kivunoir in July 2020.His role is to provide direct, prompt, efficient and friendly customer service. Train, coach, supervise and evaluate all team members. Maintain performance standards through supervising and participating in all activities. Handles coffee products in a safe manner and ensures the work area is always clean, sanitary, fresh and full. Attains budgeted sales and profit goals of the Department.',
    },
    {
      picture: profilePic,
      name: 'Adalbert Kuramugabo',
      role: 'ROASTER',
      profile:
        'Adalbert is a certified roaster with a certification from SCAF (Specialty Coffee Association).He joined Caferwa ltd in Jan 2022. As a coffee roaster, his role is to roast dried coffee beans for sale to international retail markets, local coffee shops, cafes and supermarkets. Adalbert’s key responsibilities include acquiring coffee beans and roasting them to obtain different taste profiles.',
    },
    {
      picture: profilePic,
      name: 'Venantie Mukandekezi',
      role: 'SORTER',
      profile:
        'Venantie’s role is to efficiently remove a range of defects including discolored beans, immature and insect damaged as well as various foreign materials such as glass, stones, plastic and foreign materials of the same color, like sticks.',
    },
  ];

  return (
    <div>
      <Head>
        <title>Caferwa - Team</title>
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
          <h1 className='text-5xl font-bold mt-4'>Team</h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-4'>{team.map(person => 
          <div key={person.name} className='border-2 border-black'>
            <div>
              <Image src={profilePic} height='420' width='420' />
            </div>
            <div className='px-4 py-3'>
              <h2 className='font-bold text-2xl'>{person.name}</h2>
              <p className='text-sm bg-coffee text-white w-1/2 uppercase p-2 font-bold'>{person.role}</p>
              <p className='text-sm py-2'>{person.profile}</p>
            </div>
          </div>)}</div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Team;
