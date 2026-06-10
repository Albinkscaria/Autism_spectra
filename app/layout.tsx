import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/Provider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { Toaster } from "sonner";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Speelan - Therapy Platform for Speech, Autism & Mental Health",
  description: "Comprehensive therapy platform for speech therapy, autism care, and mental health support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <TRPCProvider>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
