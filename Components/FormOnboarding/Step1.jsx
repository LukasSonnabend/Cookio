
import react, { useState } from 'react';
import SvgBand from '../../Components/SvgBand';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import SliderCard from '../../Components/SliderCard';
import styles from '../../styles/OnBoarding.module.scss';

export default function StepOne(props){
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [gender, setGender] = useState(0);
    const [activityLevel, setActivityLevel] = useState(0);
    const [showError,setShowError] = useState(false);
  
    const tabsArray = [
        { title: 'Level 1', img: '/Humaaans-Sitting.png' },
        { title: 'Level 2', img: '/Humaaans-Standing.png' },
        { title: 'Level 3', img: '/Humaaans-Sprint.png' },
      ];



      const completeStep = () => {
        let data = {weight: weight, height: height, gender: gender, activityLevel: activityLevel}
        if (Object.keys(data).some(k => !data[k])) return setShowError(true)
        props.routing(data)

      }







    return  <div className='vw100'>
    <h1 className={styles.superSize}>Hallo.</h1>
    <p className="mx-2">
      Bevor es losgeht brauchen wir ein paar informationen zu Dir und
      deinen Ernährungszielen.
    </p>
    <div className="d-flex justify-content-center">
    <div className={styles.formWrapper + " row justify-content-center  col-12 col-md-8 col-lg-6 mt-2 mx-0 px-0 mx-md-3"}>
    <Form noValidate className={ (showError ? "error" : "") + ' vw100 mx-2'}>
      <Form.Row className='w-100'>
        <Form.Group
          bsPrefix={styles.floatingFormGroup}
          as={Col}
          controlId='validationCustom01'
        >
          <Form.Label bsPrefix={weight ? styles.top : ''}>
            Aktuelles Gewicht
          </Form.Label>
          <input
            className='form-control'
            required
            type='number'
            placeholder='Aktuelles Gewicht (kg)'
            onChange={(e) => setWeight(e.target.value)}
          />
          <small className={(showError && !weight ? "visible" : "invisible") + " text-danger"}>Bitte Gewicht angeben</small>
        </Form.Group>
        <Form.Group
          bsPrefix={styles.floatingFormGroup}
          as={Col}
          controlId='validationCustom02'
        >
          <Form.Label bsPrefix={height ? styles.top : ''}>
            Körpergröße in Centimeter
          </Form.Label>
          <input
            className='form-control'
            required
            type='number'
            placeholder='Körpergröße (cm)'
            onChange={(e) => setHeight(e.target.value)}
          />  
        <small className={(showError && !height ? "visible" : "invisible") + " text-danger"}>Bitte Größe angeben</small>
        </Form.Group>
      </Form.Row>
      <Form.Row className='w-100'>
        <Form.Group
          bsPrefix={styles.floatingFormGroup}
          as={Col}
          controlId='validationCustom01'
        >
          <Form.Label bsPrefix={gender > 0 ? styles.top : ''}>
            Geschlecht
          </Form.Label>
          <select
            value={gender}
            className={
              styles.dropdown +
              ' form-control ' +
              (gender > 0 ? '' : styles.greyed)
            }
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='0' disabled>
              Geschlecht wählen
            </option>
            <option className='text-dark' value="1">
              Weiblich
            </option>
            <option className='text-dark' value='2'>
              Männlich
            </option>
            <option className='text-dark' value='3'>
              Divers
            </option>
          </select>
          <small className={(showError && !gender ? "visible" : "invisible") + " text-danger"}>Bitte Geschlecht angeben</small>
        </Form.Group>
        <Form.Group
          bsPrefix={styles.floatingFormGroup}
          as={Col}
          controlId='validationCustom02'
        >
          <Form.Label bsPrefix={activityLevel > 0 ? styles.top : ''}>
            Aktivitätslevel
          </Form.Label>
          <select
            value={activityLevel}
            className={
              styles.dropdown +
              ' form-control ' +
              (activityLevel > 0 ? '' : styles.greyed)
            }
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value='0' disabled>
              Aktivitätslevel
            </option>
            <option className='text-dark' value='1'>
              1
            </option>
            <option className='text-dark' value='2'>
              2
            </option>
            <option className='text-dark' value='3'>
              3
            </option>
          </select>
          <small className={(showError && !activityLevel ? "visible" : "invisible") + " text-danger"}>Bitte Aktivitätslevel angeben</small>
        </Form.Group>
      </Form.Row>
    </Form>

    <SliderCard
      className='col-12 col-sm-8'
      tabs={tabsArray}
      title='Entscheidungshilfe Aktivitätslevel'
    />
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
              Weiter
            </Button>
            <p className='font-weight-bold'>
              Im nächsten Schritt nehmen wir Deine Ernährungspräferenzen auf
            </p>
          </div>
        </div>
  </div>
}