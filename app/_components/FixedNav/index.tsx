import styles from "./index.module.css";
import Image from "next/image";

export default function FixedNav() {
  return (
    <div className={styles.bottomNav}>
      <a className={styles.bottomLink} href="/menu">
        <Image
          src="/fixedLogo-menu.png"
          alt="メニューページへ"
          width={100}
          height={100}
        />
      </a>
      <a className={styles.bottomLink} href="/map">
        <Image
          src="/fixedLogo-map.png"
          alt="マップページへ"
          width={100}
          height={100}
        />
      </a>
      <a className={styles.bottomLink} href="/news">
        <Image
          src="/fixedLogo-news.png"
          alt="ニュースページへ"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
}
