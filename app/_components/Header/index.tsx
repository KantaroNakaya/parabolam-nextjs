import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.pcNav}>
        <a className={styles.pcShop} href="/">
          <Image
            src="/logo-shop.png"
            alt="parabolam"
            loading="lazy"
            width={200}
            height={200}
          />
        </a>
        <div className={styles.pcList}>
          <a className={styles.pcLink} href="/menu">
            <Image
              src="/menu.svg"
              alt=""
              loading="lazy"
              width={200}
              height={200}
            />
            <span>MENU</span>
          </a>
          <a className={styles.pcLink} href="/map">
            <Image
              src="/map.svg"
              alt=""
              loading="lazy"
              width={200}
              height={200}
            />
            <span>MAP</span>
          </a>
          <a className={styles.pcLink} href="/news">
            <Image
              src="/news.svg"
              alt=""
              loading="lazy"
              width={200}
              height={200}
            />
            <span>NEWS</span>
          </a>
          <a className={styles.pcLink} href="/contact">
            <Image
              src="/mail.svg"
              alt=""
              loading="lazy"
              width={200}
              height={200}
            />
            <span>CONTACT</span>
          </a>
        </div>
      </div>
      <div className={styles.spNav}>
        <h1>
          <a className={styles.spShop} href="/">
            <Image
              src="/logo-shop.png"
              alt="parabolam"
              loading="lazy"
              width={500}
              height={500}
            />
          </a>
        </h1>
        <a className={styles.spContact} href="/contact">
          <Image
            src="/mail.svg"
            alt="お問い合わせ"
            loading="lazy"
            width={100}
            height={100}
          />
        </a>
      </div>
    </header>
  );
}
