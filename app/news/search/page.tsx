import NewsList from '@/app/_components/NewsList';
import SearchField from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <div className={styles.container}>
            <SearchField />
            <NewsList news={news} />
            <div className={styles.buttonWrapper}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </div>
    );
}
