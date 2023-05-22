import NavBar from "./components/NavBar";
import AuthContext from "./context/AuthContext";
import "./globals.css";
import { Cabin } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";

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
        <AuthContext>
          <header className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
          </header>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
