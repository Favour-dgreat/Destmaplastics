import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050b18",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://destmaplastics.com"),
  title: {
    default: "Destma Plastic | Quality • Strength • Value",
    template: "%s | Destma Plastic",
  },
  description:
    "Nigeria's premier manufacturer of heavy-duty agricultural harvest crates, precision tamper-evident closures, ergonomic kids seating, and durable household plastics. Quality • Strength • Value.",
  keywords: [
    "Destma Plastic",
    "plastic manufacturer Nigeria",
    "heavy duty harvest crates",
    "agricultural plastic crates",
    "beverage closures 38mm",
    "plastic chairs Nigeria",
    "kids plastic bear chair",
    "plastic injection moulding Lagos",
  ],
  icons: {
    icon: "/images/DestmaPlastics.jpeg",
    apple: "/images/DestmaPlastics.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://destmaplastics.com",
    title: "Destma Plastic | Quality • Strength • Value",
    description:
      "Durable, precision plastics manufactured in Nigeria. Heavy-duty agro crates, closures, and seating.",
    siteName: "Destma Plastic",
    images: [
      {
        url: "/images/DestmaPlastics.jpeg",
        width: 1024,
        height: 900,
        alt: "Destma Plastic - Quality • Strength • Value",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Prevent extension-injected attributes (e.g. Bitdefender bis_skin_checked) from causing hydration mismatches
                  var origSet = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, val) {
                    if (name === 'bis_skin_checked') return;
                    return origSet.apply(this, arguments);
                  };

                  // Prevent chrome extension errors from polluting Next.js terminal logs
                  window.addEventListener('unhandledrejection', function(e) {
                    var reason = e && e.reason;
                    var str = (reason && (reason.stack || reason.message)) ? String(reason.stack || reason.message) : String(reason || '');
                    if (str.indexOf('chrome-extension:') !== -1 || str.indexOf('M_ID') !== -1 || str.indexOf('CeloExtensionWallet') !== -1) {
                      e.preventDefault();
                      e.stopImmediatePropagation();
                    }
                  }, true);
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#050b18] text-slate-100 font-sans antialiased flex flex-col selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        <ScrollProgress />
        <Header />
        <main className="flex-1 animate-fade-in">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
