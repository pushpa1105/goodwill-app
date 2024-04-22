import "./webinar.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { Footer } from "@/components/footer";
import ChatwootWidget from "@/components/chatwoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webinars",
  description: "Goodwill App - Webinars",
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
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
