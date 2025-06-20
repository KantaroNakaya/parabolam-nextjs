import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Menu = {
    name: string;
    price: number;
    category: MenuCategory;
} & MicroCMSListContent;

export type MenuCategory = {
    name: string;
    type: string[];
    order: number;
} & MicroCMSListContent;

export type MenuImage = {
    categoryId: string;
    categoryName: string;
    image: MicroCMSImage;
    categoryType: "drink" | "food";
} & MicroCMSListContent;

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMenuList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Menu>({
        endpoint: "menu",
        queries,
    });
    return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: "news",
        queries,
    });
    return listData;
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<News>({
        endpoint: "news",
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

export const getCategoryDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "news-category",
        contentId,
        queries,
    });
    return detailData;
};

export const getAllNewsList = async () => {
    const listData = await client.getAllContents<News>({
        endpoint: "news",
    });
    return listData;
};

export const getAllCategoryList = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "news-category",
    });
    return listData;
};

export const getAllMenuList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<Menu>({
        endpoint: "menu",
        queries,
    });
    return listData;
};

export const getAllMenuCategoryList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<MenuCategory>({
        endpoint: "menu-category",
        queries,
    });
    return listData;
};

export const getAllMenuImageList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<MenuImage>({
        endpoint: "menu-images",
        queries,
    });
    return listData;
};
