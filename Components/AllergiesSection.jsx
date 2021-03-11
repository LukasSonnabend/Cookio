import React, {useState} from 'react';
import Icon from './Icons'
import styles from '../styles/AllergiesSection.module.scss';

export default function AllergiesSection(props){
    const [allergies, setAllergies] = useState({seafood: false, nuts: false, peanuts: false, lactose: false, gluten: false, soy: false});
    
    
    const callBack = (info) => {
        let workingObj = {...allergies}  
        workingObj[info] = !workingObj[info];
        console.log(workingObj)
        setAllergies(workingObj)
        props.callBackAllerg(workingObj)
    }

    return <div className={styles.iconsWrapper + " ml-2"}>
        <div className="d-flex flex-grow-1 flex-column justify-content-center">
        <div className={styles.iconsWrapperInner}>
        <Icon func={(e) => callBack(e)} value="seafood" color={allergies.seafood && "red"} meeresfruechte text="Meeresfrüchte"/>
        <Icon func={(e) => callBack(e)} value="nuts" color={allergies.nuts && "red"} nuss text="Nussallergiker"/>
        <Icon func={(e) => callBack(e)} value="peanuts" color={allergies.peanuts && "red"} erdnuss text="Erdnussallergiker"/>
        <Icon func={(e) => callBack(e)} value="lactose" color={allergies.lactose && "red"} laktose text="Laktose" />
        <Icon func={(e) => callBack(e)} value="gluten" color={allergies.gluten && "red"} gluten text="Gluten"/>
        <Icon func={(e) => callBack(e)} value="soy" color={allergies.soy && "red"} soja text="Soja"/>
        </div>
        <div className="w-100">
        <p className="text-lg-center">Wähle Nahrungsmittel welche aus deinen Plänen ausgeschlossen werden sollen</p>
        </div>
        </div>
        <div className="d-block text-lg-center mb-lg-3"><small>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small></div>
    </div>
}