import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithin Reddy — Social Media Manager & Digital Marketer",
  description:
    "Portfolio of Chagam Nithin Reddy — social media manager and digital marketer with 6+ years across entertainment, education and brand marketing in Hyderabad.",
  openGraph: {
    title: "Nithin Reddy — Social Media Manager & Digital Marketer",
    description: "Building digital presence through content, campaigns and community.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
