import Sheet from '@/app/_components/Sheet';

export const metadata = {
    title: 'ニュース',
};

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Sheet>{children}</Sheet>
        </>
    );
}
