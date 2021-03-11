import styles from '../styles/Home.module.scss';

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
          href='https://lukassonnabend.github.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Cookio Concept by Lukas Sonnabend
        </a>
      </footer>
    )
}