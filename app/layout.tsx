import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gazely — Intelligence for live presentation",
  description: "Gazely listens during services, recognizes Bible references, and prepares the right scripture for your presentation team.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
