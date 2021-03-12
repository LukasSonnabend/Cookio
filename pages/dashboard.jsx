import React, { useState } from 'react';
import NavBar from '../Components/Navbar';
import Head from 'next/head';
import styles from '../styles/Dashboard.module.scss';
import SvgBackground from '../Components/SvgBackground';
import Overview from '../Components/OverView';
import ShoppingListElement from '../Components/ShoppingListElement'
import Calendar from '../Components/Calendar';
import {
  GrOverview,
  GrCalendar,
  GrUser,
  GrList,
  GrSettingsOption,
} from 'react-icons/gr';
import Footer from '../Components/Footer';
import Column from '../Components/Column';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  let dashBoardPages = [
    { title: 'Übersicht', icon: <GrOverview /> },
    { title: 'Kalender', icon: <GrCalendar /> },
    // { title: 'Profil', icon: <GrUser /> },
    { title: 'Einkaufsliste', icon: <GrList />, mobileHidden: true },
    { title: 'Einstellungen', icon: <GrSettingsOption /> },
  ];


  let shoppingLst = [
    {
      title: 'Fisch & Fleisch',
      items: [
        { name: 'Hackfleisch', qnty: '200g' },
        { name: 'Rinder Beinscheibe', qnty: '300g' },
        { name: 'Kabeljau Filet', qnty: '300g' },
      ],
    },
    {
      title: 'Beilagen',
      items: [
        { name: 'Kartoffeln', qnty: '600g' },
        { name: 'Spaghetti', qnty: '300g' },
        { name: 'Reis', qnty: '250g' },
      ],
    },
    {
      titel: 'Obst & Gemüse',
      items: [
        { name: 'Tomaten', qnty: '5 Stück' },
        { name: 'Gurke', qnty: '1 Stück' },
        { name: 'Äpfel', qnty: '2 Stück' },
        { name: 'Bananen', qnty: '2 Stück' },
      ],
    },
    {
      titel: 'Sonstiges',
      items: [
        { name: 'Mehl', qnty: '500g' },
        { name: 'Haferflocken', qnty: '200g' },
      ],
    },
  ];

  return (
    <div className={styles.container + ' w-100'}>
      <Head>
        <title>Deine Übersicht</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <SvgBackground bottomStripes={true} bigCircle={false} />
      <NavBar addClass={styles.NavBarBg} />
      <main className={styles.main}>
        <div className={styles.dashboardWrapper}>
          <div className={styles.navigation + ' px-4 mx-4'}>
            {dashBoardPages.map((item, index) => (
              <div className={ (item.hasOwnProperty("mobileHidden") ?  'd-flex d-lg-none'  : 'd-flex') + " flex-column align-items-center"}>
                <div
                  onClick={() => setActiveTab(index)}
                  className={
                    styles.navigationItem +
                    ' ' +
                    (index == activeTab ? styles.active : '')
                  }
                >
                  {item.icon}
                </div>
                <small>{item.title}</small>
              </div>
            ))}
          </div>
            {/* RightSide  */}
              {activeTab == 0 && <Overview />}
              {activeTab == 1 && <Calendar />}
              {activeTab == 2 && <ShoppingListElement data={shoppingLst}  />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
