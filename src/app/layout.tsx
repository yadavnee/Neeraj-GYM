import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neeraj Gym | Premium 3D Fitness",
  description: "Experience the next generation of fitness with our premium gym, smart AI planner, and interactive 3D platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Chatbot />
        <footer className="footer-global">
          <p>© 2026 Neeraj Gym. All Rights Reserved. Created by Neeraj</p>
        </footer>
      </body>
    </html>
  );
}
