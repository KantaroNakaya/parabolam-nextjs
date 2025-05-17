"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import styles from "./index.module.css";

// Swiperのスタイルをインポート
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
type MvSwiperProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function MvSwiper({ images }: MvSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="fade"
      className={styles.slideContainer}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={281}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
