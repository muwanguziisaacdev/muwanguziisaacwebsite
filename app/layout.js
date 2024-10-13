import localFont from "next/font/local";
import "./globals.css";
import Nav from "./ui/nav";
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
  title: "Portfolio",
  description: "Best portfolio website developed by Muwanguzi Isaac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
      // we shall have a nav bar across different page routes
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Nav/>
        </header>
        {children}
      </body>
    </html>
  );
}
