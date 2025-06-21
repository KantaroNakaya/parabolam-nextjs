import styles from "./index.module.css";
import Image from "next/image";
import type { Menu as MenuItem } from "@/app/_libs/microcms";

interface MenuCardProps {
    data: MenuItem[];
}

export default function MenuCard({ data }: MenuCardProps) {
    const category = data[0].category;
    const imageUrl = category.image?.url || "/no-image.jpg";

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <span>{category.name}</span>
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
                src={imageUrl}
                alt=""
                loading="lazy"
                width={100}
                height={100}
            />
        </div>
    );
}
