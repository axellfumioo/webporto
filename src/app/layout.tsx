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
  title: "Axel Azhar Putra Ananca - Software Developer",
  description: "A passionate coder and student at SMK Telkom Purwokerto. Welcome to my portfolio website! 🚀",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Axel Azhar Putra Ananca - Software Developer",
    description: "A passionate coder and student at SMK Telkom Purwokerto. Welcome to my portfolio website! 🚀",
    images: [
      {
        url: "/img/web.jpeg",
        width: 1920,
        height: 1080,
        alt: "Axel Azhar Putra Ananca Portfolio Thumbnail"
      },
    ],
    type: "website",
    url: "https://axellfumioo.my.id",
  },
  twitter: {
    card: "summary_large_image",
    site: "@axellFumioo",
    title: "Axel Azhar Putra Ananca - Software Developer",
    description: "Follow Axel's journey in web development, AI, and open-source contributions.",
    images: ["/img/web.jpeg"],
  },
  authors: [{ name: "Axel Azhar Putra Ananca" }],
  keywords: [
    "Axel Azhar Putra Ananca", "axellFumioo", "Axel Azhar Putra Ananca Portfolio", "axellFumioo Portfolio", "Axel Azhar Putra Ananca Website",
    "axellFumioo Website", "Axel Azhar Putra Ananca Personal Website", "axellFumioo Personal Portfolio",
    "Axel Azhar Putra Ananca LinkedIn", "axellFumioo LinkedIn", "Axel Azhar Putra Ananca GitHub",
    "axellFumioo GitHub", "Axel Azhar Putra Ananca Twitter", "axellFumioo Twitter", "Axel Azhar Putra Ananca Instagram",
    "axellFumioo Instagram", "Axel Azhar Putra Ananca Facebook", "axellFumioo Facebook", "Axel Azhar Putra Ananca YouTube",
    "axellFumioo YouTube", "Axel Azhar Putra Ananca Social Media", "axellFumioo Social Media",
    "Axel Azhar Putra Ananca Web Developer", "axellFumioo Web Developer", "Axel Azhar Putra Ananca Fullstack Developer",
    "axellFumioo Laravel Developer", "Axel Azhar Putra Ananca Next.js Developer", "axellFumioo PHP Developer",
    "Axel Azhar Putra Ananca Coding Portfolio", "axellFumioo Software Engineer", "Axel Azhar Putra Ananca Freelancer",
    "axellFumioo Tech Enthusiast", "Axel Azhar Putra Ananca UI/UX Designer", "axellFumioo Indonesia Developer",
    "Axel Azhar Putra Ananca Programmer", "axellFumioo Web Designer", "Axel Azhar Putra Ananca Social Media Manager",
    "axellFumioo Content Creator", "Axel Azhar Putra Ananca Open Source Contributor", "axellFumioo Tech Blogger",
    "Axel Azhar Putra Ananca SEO Specialist", "axellFumioo Custom Website Developer", "Axel Azhar Putra Ananca Online Shop Developer",
    "axellFumioo Fishing Store Developer", "Axel Azhar Putra Ananca E-commerce Developer", "axellFumioo Personal Branding",
    "Axel Azhar Putra Ananca Digital Creator", "axellFumioo SMK Telkom Purwokerto", "Axel Azhar Putra Ananca Tailwind CSS Expert",
    "axellFumioo Livewire Developer", "Axel Azhar Putra Ananca Web Optimization", "axellFumioo Professional Portfolio",
    "Axel Azhar Putra Ananca Coding Enthusiast", "axellFumioo JavaScript Developer", "Axel Azhar Putra Ananca Tech Innovator",
    "axellFumioo School Project Developer", "Axel Azhar Putra Ananca Career", "axellFumioo Resume",
    "Axel Azhar Putra Ananca CV", "axellFumioo Biography", "Axel Azhar Putra Ananca Work Experience",
    "axellFumioo Projects", "Axel Azhar Putra Ananca Articles", "axellFumioo Blog", "Axel Azhar Putra Ananca Coding Blog",
    "axellFumioo Coding Blog", "Axel Azhar Putra Ananca Tutorials", "axellFumioo Tech Tutorials",
    "Axel Azhar Putra Ananca Interview", "axellFumioo Speaking Engagements", "Axel Azhar Putra Ananca SMK Telkom Purwokerto",
    "axellFumioo SMK Telkom Purwokerto", "Axel Azhar Putra Ananca Student at SMK Telkom Purwokerto",
    "axellFumioo SMK Telkom", "Axel Azhar Putra Ananca Alumni SMK Telkom Purwokerto",
    "axellFumioo SMK Telkom Purwokerto Projects", "Axel Azhar Putra Ananca SMK Telkom Purwokerto Web Developer",
    "axellFumioo School Website Developer", "Axel Azhar Putra Ananca Social Media Designer SMK Telkom Purwokerto", "axellFumioo Services", "Axel Azhar Putra Ananca Experience"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Axel Azhar Putra Ananca" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
