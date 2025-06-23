'use client';

import { useEffect, useRef } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import type { Appeal } from '@/app/_libs/microcms';

type AppealProps = {
    data: Appeal;
    index: number;
};

export default function Appeal({ data, index }: AppealProps) {
    const scrollRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = scrollRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.inview);
                    } else {
                        entry.target.classList.remove(styles.inview);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div className={`${styles.card} ${styles[`card${index}`]}`}>
            <div className={styles.pin}>
                <Image
                    src="/pin.png"
                    alt=""
                    loading="lazy"
                    width={200}
                    height={200}
                />
            </div>
            <div className={styles.text}>
                <p className={styles.point}>
                    <span className={styles.animateLine} ref={scrollRef}>
                        {data.point}
                    </span>
                </p>
                <p className={styles.desc}>{data.desc}</p>
            </div>
            <div className={styles.image}>
                <Image
                    src={data.image?.url || '/no-image.jpg'}
                    alt=""
                    loading="lazy"
                    width={data.image?.width || 200}
                    height={data.image?.height || 150}
                />
            </div>
        </div>
    );
}
