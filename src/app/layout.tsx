import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Loop",
  description: "Work Loop is an innovative app designed to streamline your workflow, helping you manage tasks, projects, and deadlines efficiently. " +
    <br /> +
    "Stay organized and keep track of your progress with powerful tools and seamless integration, ensuring you stay focused and productive throughout your workday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
