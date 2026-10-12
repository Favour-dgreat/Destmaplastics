import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
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
  metadataBase: new URL(SITE.url),
  title: {
    default: "Destma Plastic | Plastic Crates, Bottle Caps & Chairs Manufacturer in Lagos",
    template: "%s | Destma Plastic",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "manufacturing",
  keywords: [
    "Destma Plastic",
    "plastic manufacturer in Lagos",
    "plastic manufacturing company Nigeria",
    "plastic injection moulding Lagos",
    "plastic crates Lagos",
    "harvest crates Nigeria",
    "agricultural plastic crates",
    "bottle caps manufacturer Nigeria",
    "38mm tamper evident closures",
    "plastic chairs Nigeria",
    "kids plastic chairs Lagos",
    "plastic stools Nigeria",
    "custom plastic moulding Nigeria",
    "Ikotun Egbe",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: SITE.name,
    title: "Destma Plastic | Plastic Crates, Bottle Caps & Chairs Manufacturer in Lagos",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Destma Plastic | Plastic Manufacturer in Lagos",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className={`${outfit.variable} scroll-smooth dark`} suppressHydrationWarning>
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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ScrollProgress />
        <Header />
        <main className="flex-1 animate-fade-in">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
