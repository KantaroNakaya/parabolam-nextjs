import styles from './index.module.css';

type Props = {
    title: string;
};

export default function PageTitle({ title }: Props) {
    return <div className={styles.title}>{title}</div>;
}
