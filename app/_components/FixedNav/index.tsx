import styles from "./index.module.css";
import Image from "next/image";

export default function FixedNav() {
  return (
    <div className={styles.bottomNav}>
      <a className={styles.bottomLink} href="/menu">
        <span>MENU</span>
        <Image
          src="/fixedLogo-menu.svg"
          alt=""
          width={100}
          height={100}
        />
      </a>
      <a className={styles.bottomLink} href="/map">
        <span>MAP</span>
        <Image
          src="/fixedLogo-map.svg"
          alt=""
          width={100}
          height={100}
        />
      </a>
      <a className={styles.bottomLink} href="/news">
        <span>NEWS</span>
        <Image
          src="/fixedLogo-news.svg"
          alt=""
          width={100}
          height={100}
        />
      </a>
    </div>
  );
}
