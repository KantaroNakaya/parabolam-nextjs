import Image from 'next/image';
import styles from './index.module.css';
import Date from '@/app/_components/Date';
import Link from 'next/link';
import type { News } from '@/app/_libs/microcms';

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <ul className={styles.listWrapper}>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/news/${article.id}`} className={styles.link}>
                        {article.thumbnail ? (
                            <Image
                                src={article.thumbnail.url}
                                alt=""
                                className={styles.image}
                                width={article.thumbnail.width}
                                height={article.thumbnail.height}
                            />
                        ) : (
                            <Image
                                src="/no-image.jpg"
                                alt="NO Image"
                                className={styles.image}
                                width={1200}
                                height={630}
                            />
                        )}
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
