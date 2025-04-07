import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS globally

import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NTP Auto Parts",
  description: "High quality car parts at unbeatable prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <a
            href="https://wa.me/971544783056"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              style={{
                fontSize: "5rem", // Increased size
                color: "#fff",
                backgroundColor: "#25d366",
                borderRadius: "50%",
                padding: "10px", // Increased padding
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                margin: "10px",
              }}
            />
          </a>
        </div>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

