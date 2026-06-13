import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const geistRoboto = Roboto({
  variable: "--roboto",
  weight:["400","700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Examen Final",
  description: "Examen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistRoboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
