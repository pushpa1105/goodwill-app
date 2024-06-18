import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import ChatwootWidget from "@/components/chatwoot";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Policy/Terms & Conditions",
  description: "Goodwill App - Policy/Terms & Conditions",
  verification: {
    google: "iNFOpJoRD8LF5URbfwXuSNrLJh9odI9kFzhmAWt2fb0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
        <Providers>
          <>
          <ConfettiProvider />
          <ToastProvider />
          <ChatwootWidget />
          {children}
          </>
        </Providers>
        </body>
      </html>
  );
}
