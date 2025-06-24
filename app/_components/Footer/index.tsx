import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXTwitter,
    faInstagram,
    faFacebookF,
    faAirbnb,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.snsBox}>
                <div className={styles.snsBoxText}>FOLLOW ME</div>
                <div className={styles.snsIcon}>
                    <p className={styles.snsLink}>
                        <FontAwesomeIcon
                            icon={faXTwitter}
                            className={styles.snsLink__icon}
                            aria-label="X（旧Twitter）ロゴ"
                            size="3x"
                        />
                    </p>
                    <p className={styles.snsLink}>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className={styles.snsLink__icon}
                            aria-label="instagramロゴ"
                            size="3x"
                        />
                    </p>
                    <p className={styles.snsLink}>
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            className={styles.snsLink__icon}
                            aria-label="facebookロゴ"
                            size="3x"
                        />
                    </p>
                </div>
            </div>

            <a className={styles.footerLogo} href="/">
                <Image
                    src="/logo-shop.png"
                    alt="parabolam"
                    loading="lazy"
                    width={500}
                    height={500}
                />
            </a>

            <a className={styles.footerLogoType} href="/">
                <Image
                    src="/logo-title.png"
                    alt="parabolam"
                    loading="lazy"
                    width={500}
                    height={500}
                />
            </a>

            <p className={styles.copyright}>
                copyright Parabolam CORP.-All Rights Reserved
            </p>
        </footer>
    );
}
