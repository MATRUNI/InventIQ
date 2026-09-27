import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inventiq.tech"),
  title: {
    default: "InventIQ | Enterprise Cloud Architecture & Sovereign AI Systems",
    template: "%s | InventIQ",
  },
  description:
    "InventIQ engineers resilient multi-cloud architectures, real-time streaming lakehouses, and sovereign GenAI agent pipelines with sub-second page loads and 99.999% SLAs.",
  keywords: [
    "Enterprise AI",
    "Cloud Architecture",
    "Kubernetes Mesh",
    "Generative AI",
    "Low Latency",
    "FinOps",
  ],
  authors: [{ name: "InventIQ Engineering" }],
  creator: "InventIQ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090D16] text-[#F9FAFB]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
