import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import FixedNav from "./_components/FixedNav";
import PageTop from "./_components/PageTop";
export const metadata: Metadata = {
  metadataBase: new URL("https://parabolam-nextjs-ruddy-ten.vercel.app/"),
  title: {
    template: "%s | 架空のバー「PARABOLAM」のデモサイト",
    default: "架空のバー「PARABOLAM」のデモサイト",
  },
  description:
    "本サイトは架空のバーのデモサイトです。デモサイトのため、noindexにしています。",
  openGraph: {
    title: `%s | 架空のバー「PARABOLAM」のデモサイト`,
    description:
      "本サイトは架空のバーのデモサイトです。デモサイトのため、noindexにしています。",
    images: ["/ogp.jpg"],
  },
  alternates: {
    canonical: `https://parabolam-nextjs-ruddy-ten.vercel.app/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <PageTop />
        <FixedNav />
      </body>
      <GoogleTagManager gtmId="GTM-KQJ4KX4V" />
    </html>
  );
}
