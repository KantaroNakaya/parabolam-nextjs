'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import styles from './index.module.css';
import type { MvImage } from '@/app/_libs/microcms';

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

type MainVisualProps = {
    images: MvImage[];
};

export default function MainVisual({ images }: MainVisualProps) {
    // orderでソート
    const sortedImages = [...images].sort((a, b) => a.order - b.order);

    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect="fade"
            className={styles.slideContainer}
        >
            {sortedImages.map((image, index) => (
                <SwiperSlide key={image.id} className={styles.slide}>
                    <Image
                        src={image.image.url}
                        alt=""
                        width={image.image.width}
                        height={image.image.height}
                        priority={index === 0}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
