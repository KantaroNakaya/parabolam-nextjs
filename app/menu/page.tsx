import styles from './page.module.css';
import MenuList from '@/app/_components/MenuList';
import PageTitle from '@/app/_components/PageTitle';
import { getAllMenuList, getAllMenuCategoryList } from '@/app/_libs/microcms';

export default async function Page() {
    const menuData = await getAllMenuList();
    const categoryData = await getAllMenuCategoryList();

    return (
        <div className={styles.container}>
            <PageTitle title="MENU" />
            <MenuList menuData={menuData} categoryData={categoryData} />
        </div>
    );
}
