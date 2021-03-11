import react, { useState } from 'react';
import SvgBand from '../../Components/SvgBand';
import Form from 'react-bootstrap/Form';
import AllergiesSection from '../../Components/AllergiesSection';
import FireSwiper from '../../Components/FireSwiper';
import styles from '../../styles/OnBoarding.module.scss';
import SvgBackground from '../../Components/SvgBackground';
import Button from 'react-bootstrap/Button';

export default function StepTwo(props) {
  const [preferred, setPreferred] = useState(null);
  const [allergies, setAllergies] = useState(null);

  const savePreferred = (obj) => {
    console.log(obj)
    setPreferred(obj)
  }

  const saveAllergies = (obj) => {
    console.log(obj)
    setAllergies(obj)
  }

  const completeStep = () => {
    let data = {preferred: preferred, allergies: allergies, step: 2}
    props.routing(data)

  }


  return (
    <div className='vw100'>
            <SvgBackground bottomStripes={true} bigCircle={false}/>
      {/* First Half */}
      <div className="d-lg-flex mb-lg-5">
        <div className={styles.sectionOne}>
        <h1 className={styles.superSize + " text-lg-center"}>Präferenz</h1>
        <div className={styles.desktopCard}>
        <p className='mx-2 d-lg-none'>
          Damit wir dir passende Rezepte Vorschlagen können müssen wir wissen
          was du gerne isst.
        </p>
        <span className='d-flex align-items-baseline justify-content-lg-center'>
          <p className='mx-2'>Ernährst du dich vegan?</p>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' />
          </Form.Group>
        </span>
        <div className='d-flex justify-content-center align-items-md-center flex-column text-center'>
          <FireSwiper callBackPref={(arr) => savePreferred(arr)}/>
        </div>
        <p className='mx-2 d-none d-lg-block text-center'>
          Damit wir dir passende Rezepte Vorschlagen können müssen wir wissen
          was du gerne isst.
        </p>
        </div>
        </div>
        {/* Second Half */}
        <div className={styles.secondHalfWrapper}>
        <div className={styles.secondHalfInnerWrapper}>
          <div className={styles.secondSection}>
            <SvgBand color='#FFC278' extraClass="d-lg-none" customViewBox='0 0 500 240' />
            <div className={styles.secondHeading + ' w-100'}>
              <h1 className={styles.superSize + " w-100 text-lg-center"}>Allergien?</h1>
              <h3 className='d-lg-none font-weight-bold'>und Unverträglichkeiten</h3>
            </div>
            <div className={styles.desktopCard}>
          <AllergiesSection callBackAllerg={(arr) => saveAllergies(arr)} />
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className='position-relative'>
          <SvgBand extraClass='d-lg-none' color='#75E3EA' />
          <div className={styles.buttonBox + ' d-flex w-100 text-sm-center'}>
            <Button
              type='submit'
              className='align-self-center'
              size='lg'
              onClick={() => completeStep()}
            >
              Zu deinem Dashboard
            </Button>
          </div>
        </div>
    </div>
  );
}
