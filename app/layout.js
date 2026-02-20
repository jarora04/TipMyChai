import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {SessionWrapper} from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Get Tea- Funding Projects ",
  description: "This website is crowdfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-slate-950"><div class=" rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen  bg-slate-950"><div class=" rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            {children}
          </div></div>
          <Footer />
        </SessionWrapper>
        </body>
    </html>
  );
}

