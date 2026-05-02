import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunwayCalc — Real-time Burn Rate & Runway Tracker",
  description: "Connect your bank accounts and expense tools to calculate real-time runway with scenario planning. Built for startup founders, CFOs, and finance teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="45585738-2b55-4793-8c70-00de8aea8b18"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
