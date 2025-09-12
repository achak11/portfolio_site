import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { site } from '@/lib/siteConfig'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = { title: `${site.name} — ${site.title}`,
                                     description: site.description }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var t = localStorage.getItem('theme');
              if (!t) {
                t = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
              }
              document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
            } catch (e) { document.documentElement.setAttribute('data-theme', 'dark'); }
          })();
        ` }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-center" />
        <Analytics />
      </body>
    </html>
  )
}