import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RamadhanHub",
  description: "Gathering Muslims in the Holy Month of Ramadan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./ramadhanhub.svg"></link>
      <link href="https://fonts.cdnfonts.com/css/ramadhan" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
