"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./index.module.css";
import MenuCard from "@/app/_components/MenuCard";
import type { Menu, MenuCategory } from "@/app/_libs/microcms";

interface MenuListProps {
    menuData: Menu[];
    categoryData: MenuCategory[];
}

export default function MenuList({ menuData, categoryData }: MenuListProps) {
    // カテゴリーデータをtypeで分類
    const drinkCategories = categoryData
        .filter((category) => category.type[0] === "drink")
        .sort((a, b) => a.order - b.order);

    const foodCategories = categoryData
        .filter((category) => category.type[0] === "food")
        .sort((a, b) => a.order - b.order);

    // ドリンクメニューをカテゴリー別にフィルタリング
    const drinkMenus = drinkCategories
        .map((category) =>
            menuData.filter(
                (item) => item.category && item.category.id === category.id
            )
        )
        .filter((menu) => menu.length > 0);

    // フードメニューをカテゴリー別にフィルタリング
    const foodMenus = foodCategories
        .map((category) =>
            menuData.filter(
                (item) => item.category && item.category.id === category.id
            )
        )
        .filter((menu) => menu.length > 0);

    return (
        <div className={`menuList ${styles.container}`}>
            <section className={styles.section}>
                <h3 className={styles.title}>〜DRINK MENU〜</h3>
                <Swiper
                    pagination={{
                        el: ".swiper-pagination-drink",
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={32}
                    slidesPerView={1}
                    autoHeight={true}
                >
                    {drinkMenus.map((menu, index) => (
                        <SwiperSlide key={index}>
                            <MenuCard data={menu} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination-drink"></div>
            </section>
            <section className={styles.section}>
                <h3 className={styles.title}>〜FOOD MENU〜</h3>
                <Swiper
                    pagination={{
                        el: ".swiper-pagination-food",
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={32}
                    slidesPerView={1}
                >
                    {foodMenus.map((menu, index) => (
                        <SwiperSlide key={index}>
                            <MenuCard data={menu} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination-food"></div>
            </section>
        </div>
    );
}
