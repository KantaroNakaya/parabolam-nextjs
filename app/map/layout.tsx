import Sheet from '@/app/_components/Sheet';

export const metadata = {
    title: 'メニュー',
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Sheet>{children}</Sheet>
        </>
    );
}
