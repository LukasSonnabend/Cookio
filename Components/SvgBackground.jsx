import styles from '../styles/SvgBackground.module.scss';
export default function SvgBackground(props) {

    return  <> 
    <div className={styles.bgDiv}>
    <div>
    {props.bottomStripes && <>
  <svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill="#75E3EA"/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill='#FFC278'/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill="#75E3EA"/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill="#75E3EA"/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill='#FFC278'/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill='#FFC278'/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill='#75E3EA'/>
</svg>

<svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 53.0157L420 0.498779V64.4988L0 117.016V53.0157Z" fill='#FFC278'/>
</svg>
</>
}

{props.bigCircle && <div className={styles.bigCircle}></div>}
      <div className={styles.littleCircle + ' ' + styles.one}></div>
      <div className={styles.littleCircle + ' ' + styles.two}></div>
    


</div>
</div>
</>
}