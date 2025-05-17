"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./index.module.css";
import MenuCard from "@/app/_components/MenuCard";
import { drinkMenu } from "@/app/_libs/drinkMenu";
import { foodMenu } from "@/app/_libs/foodMenu";

interface DrinkItem {
    name: string;
    price: number;
    genre: string;
}

interface MenuCardProps {
    data: DrinkItem[];
}

export default function MenuList({ data }: MenuCardProps) {
    const beerMenu = drinkMenu.filter((item) => item.genre === "ビール");
    const whiskeyMenu = drinkMenu.filter((item) => item.genre === "ウイスキー");
    const ginMenu = drinkMenu.filter((item) => item.genre === "ジン");
    const vodkaMenu = drinkMenu.filter((item) => item.genre === "ウォッカ");
    const cocktailMenu = drinkMenu.filter((item) => item.genre === "カクテル");
    const softDrinkMenu = drinkMenu.filter(
        (item) => item.genre === "ソフトドリンク"
    );
    const pastaMenu = foodMenu.filter((item) => item.genre === "パスタ");
    const pizzaMenu = foodMenu.filter((item) => item.genre === "ピザ");
    const riceMenu = foodMenu.filter((item) => item.genre === "ライス");

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
                    <SwiperSlide>
                        <MenuCard data={beerMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={whiskeyMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={ginMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={vodkaMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={cocktailMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={softDrinkMenu} />
                    </SwiperSlide>
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
                    <SwiperSlide>
                        <MenuCard data={pastaMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={pizzaMenu} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuCard data={riceMenu} />
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination-food"></div>
            </section>
        </div>
    );
}
