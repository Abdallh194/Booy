import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import StoreProvider from "@/Redux/StoreProvider";

export const metadata: Metadata = {
  title: "ASR Booky",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
