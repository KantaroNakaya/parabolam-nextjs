import styles from "./index.module.css";
import Image from "next/image";
import { menuImage } from "@/app/_libs/menuImage";

interface DrinkItem {
    name: string;
    price: number;
    genre: string;
}

interface MenuCardProps {
    data: DrinkItem[];
}

export default function MenuCard({ data }: MenuCardProps) {
    const imageGenre = data[0].genre as keyof typeof menuImage;
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <span>{data[0].genre}</span>
            </div>
            <table className={styles.menu}>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.name}>
                            <td className={styles.name}>{item.name}</td>
                            <td className={styles.price}>￥{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Image
                className={styles.photo}
                src={menuImage[imageGenre]}
                alt=""
                loading="lazy"
                width={100}
                height={100}
            />
        </div>
    );
}
