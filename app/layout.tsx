import './globals.css';
import type { Metadata } from 'next';
import { Kaisei_HarunoUmi, Noto_Serif_JP } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { GoogleTagManager } from '@next/third-parties/google';
import FixedNav from './_components/FixedNav';
import PageTop from './_components/PageTop';

const kaiseiHarunoUmi = Kaisei_HarunoUmi({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://parabolam-nextjs.vercel.app/'),
    title: {
        template: '%s | 架空のバー「PARABOLAM」のデモサイト',
        default: '架空のバー「PARABOLAM」のデモサイト',
    },
    description:
        '本サイトは架空のバーのデモサイトです。デモサイトのため、noindexにしています。',
    openGraph: {
        title: `%s | 架空のバー「PARABOLAM」のデモサイト`,
        description:
            '本サイトは架空のバーのデモサイトです。デモサイトのため、noindexにしています。',
        images: ['/ogp.jpg'],
    },
    alternates: {
        canonical: `https://parabolam-nextjs.vercel.app/`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={kaiseiHarunoUmi.className}>
            <body className={notoSerifJP.className}>
                <Header />
                <main>{children}</main>
                <Footer />
                <PageTop />
                <FixedNav />
            </body>
            <GoogleTagManager gtmId="GTM-5627SN3F" />
        </html>
    );
}
