import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationLayout from "@/components/navigation/navigationLayout";

const inter = Inter({ subsets: ["latin"] });

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="h-full  ">
          <div className=" mt-4 fixed w-screen z-40">
            <NavigationLayout />
          </div>
          <div className="">
            <main className=" h-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
