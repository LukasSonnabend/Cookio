import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


import styles from '../styles/SliderCard.module.scss';
export default function SliderCard(props){

    const SwiperItems = props.tabs.map((item) => { return (<SwiperSlide className={styles.swiperSlide}>
            <h3 className="text-center">{item.title}</h3>
            <img className={styles.cardImg} src={item.img}></img>
      </SwiperSlide>)
    });

console.log(SwiperItems)

    return( <div className={props.className}>
        <div className={styles.header}>
            <p className="text-center pb-2 pt-3">{props.title}</p>
            </div>
        <Swiper
        slidesPerView={1}
        className="vw100"
        pagination={{ clickable: true }}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SwiperItems}
      </Swiper>
      </div>
      )
}