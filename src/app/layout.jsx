import { Space_Grotesk, Inter, Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
});

const inter = Inter({
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Dal Fisio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export { spaceGrotesk };
