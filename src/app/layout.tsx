import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "../index.css";

export const metadata: Metadata = {
  title: "Agenvy",
  description: "Modern Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0f] text-white">
        <Providers>
          <Navbar />
          <div className="relative min-h-screen overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
