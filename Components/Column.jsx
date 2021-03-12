import styles from '../styles/Column.module.scss';
import RecipeCard from '../Components/RecipeCard'
export default function Column(props) {

const strike = (e) => {
    e.currentTarget.classList.toggle(styles.strikeThrough)

}
  if (props.shoppingList)
    return (
      <div className={styles.singleColumn + ( props.hiddenMobile ? " d-none d-lg-flex" : "")}>
        <p className={styles.title + ' text-center'}>{props.title}</p>
        {props.data.map((card) => (
          <div className={styles.cardWrapper + " " + styles.shoppingList + ' d-flex flex-column'}>
            {card.items.map((item) => (
              <div className={ styles.listPoint + " d-flex mx-3 justify-content-between"}>
                  <span className="d-flex justify-content-between flex-grow-1" onClick={(e) => strike(e)}>
                <p className='mt-1 mb-0'>{item.name}</p>
                <p className='mt-1 mb-0'>{item.qnty}</p>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );

  return (
    <div className={styles.singleColumn + " " + props.className}>
      <p className={styles.title + ' text-center'}>{props.title}</p>
      {props.data.map((card) => ( <RecipeCard refreshable={props.refreshable} card={card}/>
      ))}
    </div>
  );
}
