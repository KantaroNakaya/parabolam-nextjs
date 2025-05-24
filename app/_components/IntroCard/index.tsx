"use client";

import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Image from "next/image";

type CardProps = {
  point: string;
  desc: string;
  image: string;
  index: number;
};

export default function Card(card: CardProps) {
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
      },
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
    <div className={`${styles.card} ${styles[`card${card.index}`]}`}>
      <div className={styles.pin}>
        <Image src="/pin.png" alt="" loading="lazy" width={200} height={200} />
      </div>
      <div className={styles.text}>
        <p className={styles.point}>
          <span className={styles.animateLine} ref={scrollRef}>
            {card.point}
          </span>
        </p>
        <p className={styles.desc}>{card.desc}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={card.image}
          alt=""
          loading="lazy"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
