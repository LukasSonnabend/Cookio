
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
        img:
          'https://img.chefkoch-cdn.de/rezepte/2642361415194489/bilder/885065/crop-600x400/heidelbeer-hafer-fruehstueck.jpg',
        buttonLink: '/show',
        description: 'Heidelbeer-Hafer-Frühstück',
        recipe: {
          title: 'Heidelbeer-Hafer-Frühstück',
          ingredients: [
            ['5 EL', 'Haferflocken'],
            ['120 ml', 'Milch'],
            ['2 EL', 'Heidelbeeren'],
            ['evtl.', 'Honig'],
            ['evtl.', 'Zimt'],
          ],
          instructions: `Die Haferflocken mit der Milch in eine Schüssel geben und die Heidelbeeren darüber streuen. 12 Stunden, also über Nacht, stehen lassen.
          Am nächsten Tag eventuell mit etwas Honig süßen und als schnelles, sättigendes Frühstück genießen.
          Varianten: Da ich gerne Zimt mag, kam der auch noch obendrauf. Genau so gut kann man das Rezept auch beliebig verändern, z.B. mit anderer Milch, anderen Beeren, Nüssen statt Beeren oder ähnlichem.`
        },
      },
      {
        title: 'Mittagessen',
        img: 'https://img.chefkoch-cdn.de/rezepte/1844061298739441/bilder/1204660/crop-600x400/mozzarella-haehnchen-in-basilikum-sahnesauce.jpg',
        buttonLink: '/show',
        description: 'Hähnchen in Basilikum-Sahnesauce',
        recipe: {
          title: 'Mozzarella-Hähnchen in Basilikum-Sahnesauce',
          ingredients: [
            ['5 EL', 'Haferflocken'],
            ['120 ml', 'Milch'],
            ['2 EL', 'Heidelbeeren'],
            ['evtl.', 'Honig'],
            ['evtl.', 'Zimt'],
          ],
          instructions: `Die Haferflocken mit der Milch in eine Schüssel geben und die Heidelbeeren darüber streuen. 12 Stunden, also über Nacht, stehen lassen.
          Am nächsten Tag eventuell mit etwas Honig süßen und als schnelles, sättigendes Frühstück genießen.
          Varianten: Da ich gerne Zimt mag, kam der auch noch obendrauf. Genau so gut kann man das Rezept auch beliebig verändern, z.B. mit anderer Milch, anderen Beeren, Nüssen statt Beeren oder ähnlichem.`
        },
      },
      {
        title: 'Abendessen',
        img: 'https://img.chefkoch-cdn.de/rezepte/2814751433498134/bilder/906437/crop-600x400/low-carb-pizzarolle.jpg',
        buttonLink: '/show',
        description: 'Low Carb Pizzarolle',
        recipe: {
          title: 'Low Carb Pizzarolle',
          ingredients: [
            ['5 EL', 'Haferflocken'],
            ['120 ml', 'Milch'],
            ['2 EL', 'Heidelbeeren'],
            ['evtl.', 'Honig'],
            ['evtl.', 'Zimt'],
          ],
          instructions: `Den Backofen auf 170 °C vorheizen.
  
          Für den Boden Quark, Eier und 120 g Käse in einer Schüssel miteinander verrühren und würzen.
          Die Masse auf das mit Backpapier ausgelegte Backblech kippen und glatt streichen. 15 Minuten im Ofen backen.
          
          Das Backblech herausnehmen und den Boden beliebig belegen mit z. B. Tomatensauce, Salami, Schinken, Zucchini, Champignons oder Mais. Mit 60 g Käse bestreuen und erneut in den Ofen schieben, bis der Käse eine schöne Farbe hat.
          
          Abkühlen lassen, mit Rucola bestreuen und vorsichtig einrollen.`
        },
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