import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/global.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800"],
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
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
