import styles from "./index.module.css";
import Image from "next/image";
import { menuImage } from "@/app/_libs/menuImage";
import type { Menu as MenuItem } from "@/app/_libs/microcms";

interface MenuCardProps {
    data: MenuItem[];
}

export default function MenuCard({ data }: MenuCardProps) {
    const categoryId = data[0].category.id as keyof typeof menuImage;
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <span>{data[0].category.name}</span>
            </div>
            <table className={styles.menu}>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.name}>{item.name}</td>
                            <td className={styles.price}>￥{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Image
                className={styles.photo}
                src={menuImage[categoryId]}
                alt=""
                loading="lazy"
                width={100}
                height={100}
            />
        </div>
    );
}
