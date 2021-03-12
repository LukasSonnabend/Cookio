import Column from './Column';
import styles from '../styles/Column.module.scss';
export default function OverView() {
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

  function getNumberOfWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7) - 1;
  }

  return (
    <div>
      <h2 className='font-weight-bold text-center'>
        Dein Essensplan für die Kalenderwoche {getNumberOfWeek()}
      </h2>
      <div className={styles.columnsWrapper + ' d-flex flex-grow-1'}>
        <Column data={data} title='Das gibts heute' />
        <Column data={data} refreshable title='Der Plan für Morgen' />
        <Column data={shoppingLst} shoppingList hiddenMobile title='Wocheneinkaufsliste' />
      </div>
    </div>
  );
}
