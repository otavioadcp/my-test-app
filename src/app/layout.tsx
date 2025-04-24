"use client";

import "./globals.css";
import { UserProvider } from "../contexts/UserContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </UserProvider>
    </ThemeProvider>
  );
}
