import type { Metadata } from "next";
import { Providers } from "@/app/providers";
export const metadata: Metadata = {
    title: "Leaving Certificate",
  };
  

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <title>Leaving Certificate</title>
        <body
          className={`antialiased`}
        >
          <Providers>
           {children} 
          </Providers>
          
        </body>
      </html>
    );
  }