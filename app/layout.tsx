import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/global.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Analytics from "./components/analytics";
import { Suspense } from "react";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Svetlana Eliseeva",
  description: "Front-end Developer | NextJS ReactJS TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-BZ0266P94V`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BZ0266P94V', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
        <Header />
        <Footer />
      </body>
    </html>
  );
}
