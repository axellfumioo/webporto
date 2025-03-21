import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axel Azhar Putra Ananca - Portofolio",
  description: "A passionate coder and student at SMK Telkom Purwokerto. Welcome to my portfolio website! 🚀",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    "Axel Azhar Putra Ananca Portfolio", "AxellFumioo Portfolio", "Axel Azhar Putra Ananca Website",
    "AxellFumioo Website", "Axel Azhar Putra Ananca Personal Website", "AxellFumioo Personal Portfolio",
    "Axel Azhar Putra Ananca LinkedIn", "AxellFumioo LinkedIn", "Axel Azhar Putra Ananca GitHub",
    "AxellFumioo GitHub", "Axel Azhar Putra Ananca Twitter", "AxellFumioo Twitter", "Axel Azhar Putra Ananca Instagram",
    "AxellFumioo Instagram", "Axel Azhar Putra Ananca Facebook", "AxellFumioo Facebook", "Axel Azhar Putra Ananca YouTube",
    "AxellFumioo YouTube", "Axel Azhar Putra Ananca Social Media", "AxellFumioo Social Media",
    "Axel Azhar Putra Ananca Web Developer", "AxellFumioo Web Developer", "Axel Azhar Putra Ananca Fullstack Developer",
    "AxellFumioo Laravel Developer", "Axel Azhar Putra Ananca Next.js Developer", "AxellFumioo PHP Developer",
    "Axel Azhar Putra Ananca Coding Portfolio", "AxellFumioo Software Engineer", "Axel Azhar Putra Ananca Freelancer",
    "AxellFumioo Tech Enthusiast", "Axel Azhar Putra Ananca UI/UX Designer", "AxellFumioo Indonesia Developer",
    "Axel Azhar Putra Ananca Programmer", "AxellFumioo Web Designer", "Axel Azhar Putra Ananca Social Media Manager",
    "AxellFumioo Content Creator", "Axel Azhar Putra Ananca Open Source Contributor", "AxellFumioo Tech Blogger",
    "Axel Azhar Putra Ananca SEO Specialist", "AxellFumioo Custom Website Developer", "Axel Azhar Putra Ananca Online Shop Developer",
    "AxellFumioo Fishing Store Developer", "Axel Azhar Putra Ananca E-commerce Developer", "AxellFumioo Personal Branding",
    "Axel Azhar Putra Ananca Digital Creator", "AxellFumioo SMK Telkom Purwokerto", "Axel Azhar Putra Ananca Tailwind CSS Expert",
    "AxellFumioo Livewire Developer", "Axel Azhar Putra Ananca Web Optimization", "AxellFumioo Professional Portfolio",
    "Axel Azhar Putra Ananca Coding Enthusiast", "AxellFumioo JavaScript Developer", "Axel Azhar Putra Ananca Tech Innovator",
    "AxellFumioo School Project Developer", "Axel Azhar Putra Ananca Career", "AxellFumioo Resume",
    "Axel Azhar Putra Ananca CV", "AxellFumioo Biography", "Axel Azhar Putra Ananca Work Experience",
    "AxellFumioo Projects", "Axel Azhar Putra Ananca Articles", "AxellFumioo Blog", "Axel Azhar Putra Ananca Coding Blog",
    "AxellFumioo Coding Blog", "Axel Azhar Putra Ananca Tutorials", "AxellFumioo Tech Tutorials",
    "Axel Azhar Putra Ananca Interview", "AxellFumioo Speaking Engagements", "Axel Azhar Putra Ananca SMK Telkom Purwokerto",
    "AxellFumioo SMK Telkom Purwokerto", "Axel Azhar Putra Ananca Student at SMK Telkom Purwokerto",
    "AxellFumioo SMK Telkom", "Axel Azhar Putra Ananca Alumni SMK Telkom Purwokerto",
    "AxellFumioo SMK Telkom Purwokerto Projects", "Axel Azhar Putra Ananca SMK Telkom Purwokerto Web Developer",
    "AxellFumioo School Website Developer", "Axel Azhar Putra Ananca Social Media Designer SMK Telkom Purwokerto"
  ]
  , 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
