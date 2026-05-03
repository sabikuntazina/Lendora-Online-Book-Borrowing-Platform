import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const poppins= Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400',"500","600","700"]
})

export const metadata = {
  title: "Lendora",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <Navbar></Navbar>
        <main className="">

        {children}
        </main>
        <ToastContainer />
        <Footer></Footer>
        </body>
    </html>
  );
}
