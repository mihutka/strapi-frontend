import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashley - Creative Agency",
  description: "Creative Agency website built with Next.js + TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
        {children}
      </body>
    </html>
  );
}
