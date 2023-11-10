// app/layout.tsx
"use client";

import { Providers } from "./provider";
import "../app/globals.css";
import { Box } from "@chakra-ui/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Box >
            {/* <Sidebar/> */}
            {children}
          </Box>
        </main>
      </body>
    </html>
  );
}
