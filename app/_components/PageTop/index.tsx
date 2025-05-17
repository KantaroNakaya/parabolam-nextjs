"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function PageTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisible = () => {
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    addEventListener("scroll", handleVisible);
    return () => removeEventListener("scroll", handleVisible);
  }, []);

  const handleScrollTo = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollTo}
      className={`${styles.pageTop} ${isVisible ? styles.visible : ""}`}
      aria-label="ページトップへ戻る"
    >
      <span className={styles.pagetop__arrow}></span>
    </button>
  );
}
