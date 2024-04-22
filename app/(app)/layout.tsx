import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import ChatwootWidget from "@/components/chatwoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goodwill App",
  description: "Goodwill app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          <ChatwootWidget />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
