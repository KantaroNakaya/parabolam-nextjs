import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles.pcNav}>
                <Link className={styles.pcShop} href="/">
                    <Image
                        src="/logo-shop.png"
                        alt="parabolam"
                        loading="lazy"
                        width={200}
                        height={200}
                    />
                </Link>
                <div className={styles.pcList}>
                    <Link className={styles.pcLink} href="/menu">
                        <Image
                            src="/menu.svg"
                            alt=""
                            loading="lazy"
                            width={200}
                            height={200}
                        />
                        <span>MENU</span>
                    </Link>
                    <Link className={styles.pcLink} href="/map">
                        <Image
                            src="/map.svg"
                            alt=""
                            loading="lazy"
                            width={200}
                            height={200}
                        />
                        <span>MAP</span>
                    </Link>
                    <Link className={styles.pcLink} href="/news">
                        <Image
                            src="/news.svg"
                            alt=""
                            loading="lazy"
                            width={200}
                            height={200}
                        />
                        <span>NEWS</span>
                    </Link>
                    <Link className={styles.pcLink} href="/contact">
                        <Image
                            src="/mail.svg"
                            alt=""
                            loading="lazy"
                            width={200}
                            height={200}
                        />
                        <span>CONTACT</span>
                    </Link>
                </div>
            </div>
            <div className={styles.spNav}>
                <h1>
                    <Link className={styles.spShop} href="/">
                        <Image
                            src="/logo-shop.png"
                            alt="parabolam"
                            loading="lazy"
                            width={500}
                            height={500}
                        />
                    </Link>
                </h1>
                <Link className={styles.spContact} href="/contact">
                    <Image
                        src="/mail.svg"
                        alt="お問い合わせ"
                        loading="lazy"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
        </header>
    );
}
