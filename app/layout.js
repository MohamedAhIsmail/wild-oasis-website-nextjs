import localFont from "next/font/local";
import "./globals.css";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "The Wild Oasis",
  description: "The Wild Oasis Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
