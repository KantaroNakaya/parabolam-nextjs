import PageTitle from '@/app/_components/PageTitle';
import styles from './page.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <PageTitle title="MAP" />
            <div className={styles.mapSmall}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.257764704176!2d135.50215281474212!3d34.673443342186296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e710d169203b%3A0x13bbb76f3d5a60d3!2z44CSNTQyLTAwODMg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65p2x5b-D5paO5qmL77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1664095930386!5m2!1sja!2sjp"
                    width="400"
                    height="300"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.mapLarge}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.257764704176!2d135.50215281474212!3d34.673443342186296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e710d169203b%3A0x13bbb76f3d5a60d3!2z44CSNTQyLTAwODMg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65p2x5b-D5paO5qmL77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1664095930386!5m2!1sja!2sjp"
                    width="800"
                    height="600"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.access}>
                <p className={styles.accessText}>心斎橋駅から徒歩4分</p>
                <a
                    className={styles.accessLink}
                    href="https://www.athome.co.jp/rent_store/6976529004/?BKLISTID=002LPC&SEARCHDIV=1&sref=list_simple"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    (「BAR
                    PARABOLAM」は架空のバーです。大阪府大阪市中央区東心斎橋の物件で営業していることを想定しています。）
                </a>
            </div>
        </div>
    );
}
