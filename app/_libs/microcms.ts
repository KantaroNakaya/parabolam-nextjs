import { createClient } from 'microcms-js-sdk';
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from 'microcms-js-sdk';

export type Menu = {
    name: string;
    price: number;
    category: MenuCategory;
} & MicroCMSListContent;

export type MenuCategory = {
    name: string;
    type: string[];
    order: number;
    image?: MicroCMSImage;
} & MicroCMSListContent;

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

export type MvImage = {
    image: MicroCMSImage;
    order: number;
} & MicroCMSListContent;

export type Appeal = {
    point: string;
    desc: string;
    image: MicroCMSImage;
    order: number;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMenuList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Menu>({
        endpoint: 'menu',
        queries,
    });
    return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: 'news',
        queries,
    });
    return listData;
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<News>({
        endpoint: 'news',
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};

export const getAllNewsList = async () => {
    const listData = await client.getAllContents<News>({
        endpoint: 'news',
    });
    return listData;
};

export const getAllMenuList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<Menu>({
        endpoint: 'menu',
        queries,
    });
    return listData;
};

export const getAllMenuCategoryList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<MenuCategory>({
        endpoint: 'menu-category',
        queries,
    });
    return listData;
};

export const getMvImages = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<MvImage>({
        endpoint: 'main-visual',
        queries,
    });
    return listData;
};

export const getAppeals = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Appeal>({
        endpoint: 'appeals',
        queries,
    });
    return listData;
};

export const getAllAppeals = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<Appeal>({
        endpoint: 'appeals',
        queries,
    });
    return listData;
};
