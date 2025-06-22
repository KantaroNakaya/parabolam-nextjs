import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import PageTitle from '@/app/_components/PageTitle';
export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });
    return (
        <div className={styles.container}>
            <PageTitle title="NEWS" />
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount} current={1} />
            <div className={styles.buttonWrapper}>
                <ButtonLink href="/">トップページへ</ButtonLink>
            </div>
        </div>
    );
}
