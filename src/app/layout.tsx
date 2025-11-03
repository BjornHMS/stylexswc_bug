import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./reset.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stylex swc plugin - bug",
  description: "Reproducing a bug encountered in stylex-swc-plugin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ display: 'grid', height: '100vh', justifyContent: 'center', alignContent: 'center' }}>
        {children}
      </body>
    </html>
  );
}
