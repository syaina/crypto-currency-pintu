import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Harga Crypto Hari Ini (IDR) | Pintu",
  description:
    "Pantau harga cryptocurrency terbaru dalam IDR hari ini di Pintu. Temukan info lengkap tentang pergerakan pasar crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id-ID">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
