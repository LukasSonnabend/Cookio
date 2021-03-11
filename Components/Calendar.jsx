
import dynamic from "next/dynamic";
//import Calendar from 'react-calendar'
import React, {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import Column from './Column';
import Head from 'next/head';
const Calendar = dynamic(() => import('react-calendar'), { ssr: false });


export default function UseCalendar() {
    const [menu, setMenu] = useState(null);

    let data = [
        {
          title: 'Frühstück',
          img: '/bowls.jpg',
          buttonLink: '/show',
          description: 'hier ist die Beschreibung',
        },
        {
          title: 'Mittagessen',
          img: '/bowls.jpg',
          buttonLink: '/show',
          description: 'hier ist die Beschreibung',
        },
        {
          title: 'Abendessen',
          img: '/bowls.jpg',
          buttonLink: '/show',
          description: 'hier ist die Beschreibung',
        },
      ];

    let nowDate = new Date();
    let maxDate = new Date(nowDate)
    maxDate.setDate(maxDate.getDate()+7)
    let minDate = new Date(nowDate);
    minDate.setDate(nowDate.getDate()-7)

    const calendarFunction = (e) =>{
    console.log(e)
    setMenu(e)

}






        return (<>
              <Head>
        <title>Dein Kalender</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className="d-flex flex-column flex-xl-row flex-grow-1 align-items-center justify-content-evenly"> 
        <Calendar onClickDay={(e) => calendarFunction(e)} maxDate={maxDate} minDate={minDate}/>
        <div className="my-4 mx-3 flex-md-grow-1">
        { menu && <Column data={data} className="py-2 flex-grow-1" title={`Plan für den ${menu.toLocaleDateString("de")}`}/>}
        </div>
        </div>
</>
        );

}