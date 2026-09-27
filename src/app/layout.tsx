import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
