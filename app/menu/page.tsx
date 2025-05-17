import Image from "next/image";
// import { getMenuList } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import MenuList from "@/app/_components/MenuList";
import PageTitle from "@/app/_components/PageTitle";
export default function Page() {
    return (
        <div>
            <PageTitle title="MENU" />
            <MenuList data={[]} />
        </div>
    );
}
