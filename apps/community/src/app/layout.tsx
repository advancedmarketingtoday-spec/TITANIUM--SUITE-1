import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Corona Shoutouts · Community",
    template: "%s · Corona Shoutouts",
  },
  description: "Discover source-backed events in Corona, California.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/events" className="brand">
            <span className="brand-mark">CS</span>
            <span>
              Corona Shoutouts<small>OUR CITY. OUR COMMUNITY.</small>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/events" className="nav-active">
              Events
            </Link>
            <Link href="/review">Review workflow</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Made for Corona, California.{" "}
          <span>Independent community publication · Times in Pacific Time</span>
        </footer>
      </body>
    </html>
  );
}
