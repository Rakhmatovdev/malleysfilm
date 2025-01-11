import Footer from "@/pages/rootapp/Footer";
import "./globals.css";
import QueryProvider from "../lib/provider/Query";

export const metadata = {
  title: "Malleys",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
      <QueryProvider>
          {children}
          <Footer />
      </QueryProvider>
        </body>
    </html>
  );
}
