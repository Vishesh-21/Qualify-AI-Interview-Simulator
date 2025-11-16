import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import HomeNavbar from "./_components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Qualify AI – AI-Powered Interview & Feedback Tool",
  description:
    "Qualify AI is an intelligent interview assistant that conducts mock interviews, evaluates responses, and provides detailed feedback to help you prepare for real-world job opportunities.",
  keywords: [
    "AI interview",
    "mock interview",
    "job preparation",
    "interview feedback",
    "Qualify AI",
    "AI career assistant",
    "practice interviews",
    "career growth",
    "interview practice tool",
  ],
  icons: {
    icon: "/logo.svg",
  },
  authors: [
    {
      name: "Vishu Verma",
      url: "https://viishu-portfolio.vercel.app/",
    },
  ],
  publisher: "Qualify AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressContentEditableWarning={true}>
        <body
          className={`${poppins.className} antialiased overflow-x-hidden dark:bg-black max-w-7xl mx-auto`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <HomeNavbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
