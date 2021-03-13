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
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((response) => response.json())

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  let dashBoardPages = [
    { title: 'Übersicht', icon: <GrOverview /> },
    { title: 'Kalender', icon: <GrCalendar /> },
    // { title: 'Profil', icon: <GrUser /> },
    { title: 'Einkaufsliste', icon: <GrList />, mobileHidden: true },
    { title: 'Einstellungen', icon: <GrSettingsOption /> },
  ];

  const { data, error } = useSWR('/api/shoppinglist', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>


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
              {activeTab == 2 && <ShoppingListElement data={data.shoppingList}  />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
