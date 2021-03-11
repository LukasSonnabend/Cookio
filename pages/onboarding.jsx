import react, { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';

import SvgBand from '../Components/SvgBand';

import styles from '../styles/OnBoarding.module.scss';
import NavBar from '../Components/Navbar';

import StepOne from '../Components/FormOnboarding/Step1';
import StepTwo from '../Components/FormOnboarding/Step2';
import Footer from '../Components/Footer';

export default function onBoarding() {
  const [step, setStep] = useState(1);
  const router = useRouter()

  const routing = (obj) => {
    //if no user items exists save
    let checkUser = localStorage.getItem("user");
    if (!checkUser) localStorage.setItem("user", JSON.stringify(obj))
    if (obj.hasOwnProperty("step")) localStorage.setItem("user", JSON.stringify({...JSON.parse(checkUser), obj}))



    if (step == 0) setStep(1)
    else router.push("/dashboard")
  }



  return (
    <div className={styles.container + ' w-100'}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <NavBar addClass={styles.NavBarBg} bgClass='bg-tuerkis' />
      <div className={styles.topBand}>
        <SvgBand top={true} color='#75E3EA' />
      </div>
      <main>
        <div className='d-flex align-items-end'>
          {step == 0 && <StepOne routing={(obj) => routing(obj)}/>}
          {step == 1 && <StepTwo routing={(obj) => routing(obj)}/>}
        </div>
      </main>

      <Footer />
    </div>
  );
}
