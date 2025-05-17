import Image from "next/image";
import Link from "next/link";
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
              src="/logo-menu.png"
              alt="メニューページへ"
              loading="lazy"
              width={200}
              height={200}
            />
          </a>
          <a className={styles.pcLink} href="/map">
            <Image
              src="/logo-map.png"
              alt="マップページへ"
              loading="lazy"
              width={200}
              height={200}
            />
          </a>
          <a className={styles.pcLink} href="/news">
            <Image
              src="/logo-news.png"
              alt="ニュースページへ"
              loading="lazy"
              width={200}
              height={200}
            />
          </a>
          <a className={styles.pcLink} href="/contact">
            <Image
              src="/logo-contact.png"
              alt="お問い合わせページへ"
              loading="lazy"
              width={200}
              height={200}
            />
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
            src="/logo-contact.png"
            alt="お問い合わせページへ"
            loading="lazy"
            width={200}
            height={200}
          />
        </a>
      </div>
    </header>
  );
}
