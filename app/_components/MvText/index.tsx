import styles from './index.module.css';
export default function MvText() {
    return (
        <div className={styles.content}>
            <p className={styles.text}>
                <span className={styles.text1}>心斎橋駅前バー</span>
                <span className={styles.text2}>PARABOLAM</span>
            </p>
        </div>
    );
}
