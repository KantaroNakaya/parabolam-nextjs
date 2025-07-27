import styles from '@/app/page.module.css';
import { getNewsList, getMvImages, getAllAppeals } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import dynamic from 'next/dynamic';
import MvText from '@/app/_components/MvText';
import Appeal from '@/app/_components/Appeal';
import ButtonLink from '@/app/_components/ButtonLink';

const MainVisual = dynamic(() => import('@/app/_components/MainVisual'), {
    ssr: false,
    loading: () => <div className={styles.mvSkeleton} />,
});

export const revalidate = 60;

export default async function Home() {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });
    const mvImages = await getMvImages();
    const appeals = await getAllAppeals();

    // orderでソート
    const sortedAppeals = [...appeals].sort((a, b) => a.order - b.order);

    return (
        <>
            <section className={styles.mv}>
                <MainVisual images={mvImages.contents} />
                <MvText />
            </section>
            <section className={styles.feature}>
                {sortedAppeals.map((appeal, index) => (
                    <Appeal key={appeal.id} data={appeal} index={index + 1} />
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
