
import styles from '../styles/ShoppingList.module.scss'
export default function ShoppingList(props){

    const strike = (e) => {
        e.currentTarget.classList.toggle(styles.strikeThrough)
    
    }
    
      const ekListe =  Object.keys(props.data[0]).filter((keyName) => keyName != "_id").map((keyName, i) => (<>
        <p className="font-weight-bold text-center mb-0">{props.data[0][keyName].name}</p>
        <div className={styles.cardWrapper + " " + styles.shoppingList + ' d-flex flex-column'}>
           {props.data[0][keyName]["items"].map((item) =>     <div className={ styles.listPoint + " d-flex mx-3 justify-content-between"}>
                    <span className="d-flex justify-content-between flex-grow-1" onClick={(e) => strike(e)}>
                  <p className='mt-1 mb-0'>{item.name}</p>
                  <p className='mt-1 mb-0'>{item.qnty}</p>
                  </span>
                </div>)}
        </div>
        </>
        ))
  
      return (
        <div className={styles.singleColumn + ( props.hiddenMobile ? " d-none d-lg-flex" : "")}>
          <p className={styles.title + ' text-center'}>{props.title}</p>
          {ekListe}        
        </div>
      );
  }