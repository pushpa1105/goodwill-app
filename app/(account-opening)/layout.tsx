import "./account.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import ChatwootWidget from "@/components/chatwoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Account Opening",
  description: "Goodwill App - Account Opening",
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
