import Head from 'next/head';
import { useRouter } from 'next/router'
import NavBar from '../Components/Navbar';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.scss';
import SvgBackground from '../Components/SvgBackground';
import Footer from '../Components/Footer';
export default function Home() {
  const router = useRouter()
  const goToOnboarding = () => {
    router.push("/onboarding")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      
      <NavBar />

      <main className={styles.main}>
      <SvgBackground bottomStripes={true} bigCircle={true}/>
       <div className="d-flex justify-content-evenly mx-2">
         <div  className="d-flex flex-column justify-content-center">
        <div className='d-flex align-items-end'> 
          <h1 className={styles.superSize}>Jetzt wird gekocht</h1>
        </div>
        <p>
          Zusammen erstellen wir deinen Ernährungsplan und planen deinen
          Wocheinkauf, damit du mehr Zeit für die wichtigen Dinge hast.
        </p>
        <small>Ein Projekt von Lukas Sonnabend</small>
        <div className='d-flex align-items-baseline justify-content-center'>
          <Button variant='primary' size='lg' onClick={goToOnboarding}>
            Los geht's
          </Button>
        </div>
        </div>
        <div className="d-none d-md-block">
          <img src="/iPhoneX.png"/>
        </div>
        </div>


      
      
      </main>

     <Footer/>
    </div>
  );
}
