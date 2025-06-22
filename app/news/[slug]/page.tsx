import type { Metadata } from 'next';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';
import { getNewsDetail } from '@/app/_libs/microcms';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    const data = await getNewsDetail(params.slug, {
        draftKey: searchParams.dk,
    });

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            images: [data?.thumbnail?.url ?? ''],
        },
    };
}

export default async function Page({ params, searchParams }: Props) {
    const data = await getNewsDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);
    return (
        <>
            <Article data={data} />
            <div className={styles.buttonWrapper}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}
