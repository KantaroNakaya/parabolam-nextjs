import styles from '@/app/page.module.css';
import { getNewsList, getMvImages } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import MvSlider from '@/app/_components/MvSlider';
import MvText from '@/app/_components/MvText';
import Card from '@/app/_components/IntroCard';
import { cards } from '@/app/_libs/card';
import ButtonLink from '@/app/_components/ButtonLink';

export default async function Home() {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });
    const mvImages = await getMvImages();

    return (
        <>
            <section className={styles.mv}>
                <MvSlider images={mvImages.contents} />
                <MvText />
            </section>
            <section className={styles.feature}>
                {cards.map((card, index) => (
                    <Card
                        key={card.key}
                        point={card.point}
                        desc={card.desc}
                        image={card.image}
                        index={index + 1}
                    />
                ))}
            </section>
            <section className={styles.news}>
                <h2 className={styles.sectionTitle}>NEWS</h2>
                <NewsList news={data.contents} />
                <div className={styles.buttonWrapper}>
                    <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
                </div>
            </section>
        </>
    );
}
