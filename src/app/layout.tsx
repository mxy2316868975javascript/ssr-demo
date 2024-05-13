import Page from "./page";
import { Inter } from "next/font/google";
import StoreWrappr from "../store/RootStore";
import "./globals.css";
import { StoreProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Page>{children}</Page>
        </StoreProvider>
      </body>
    </html>
  );
}
