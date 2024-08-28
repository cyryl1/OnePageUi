import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar"
// import Card from "@/components/Card";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnePage UI",
  description: "A One Page UI built with next.js and tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"font-sans"}>
        {/* <Navbar />
        <Card/> */}
        {children}
      </body>
    </html>
  );
}
