import { getNewsList } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import NewsList from "@/app/_components/NewsList";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
      <div className={styles.buttonWrapper}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
