import NavBar from "./components/NavBar";
import "./globals.css";
import { Cabin, Inter, Josefin_Sans } from "next/font/google";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Open Dine | Table for any occasion!",
  description: "Open Dine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cabin.className} min-h-screen w-full bg-gray-100`}>
        <header className="max-w-screen-2xl m-auto bg-white">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
