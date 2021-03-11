import Column from './Column';
import styles from '../styles/Column.module.scss';
export default function OverView() {
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

  let shoppingLst = [
    {title: "Fisch & Fleisch", items: [{name: "Hackfleisch", qnty: "200g"}, {name: "Rinder Beinscheibe", qnty: "300g"}, {name: "Kabeljau Filet", qnty: "300g"}]},
    {title: "Beilagen", items: [{name: "Kartoffeln", qnty: "600g"}, {name: "Spaghetti", qnty: "300g"}, {name: "Reis", qnty: "250g"}]},
    {titel: "Obst & Gemüse", items: [{name: "Tomaten", qnty: "5 Stück"}, {name: "Gurke", qnty: "1 Stück"}, {name: "Äpfel", qnty: "2 Stück"}, {name: "Bananen", qnty: "2 Stück"}]},
    {titel: "Sonstiges", items: [{name: "Mehl", qnty: "500g"}, {name: "Haferflocken", qnty: "200g"}]}  
]


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
        <Column data={shoppingLst} shoppingList title='Wocheneinkaufsliste' />
        </div>
    </div>
  );
}
