import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Sapphire Madani Tegal - Hunian Modern di Kota Tegal",
  description: "Temukan properti impian Anda di Sapphire Madani Tegal, hunian modern dengan lokasi strategis di Kota Tegal dengan fasilitas lengkap, dua pilihan cluster, tempat ibadah terintegrasi, taman dan ruang hijau. Developer Kredibel, Legalitas Terjamin, Proses Mudah. Harga terjangkau.",
  icons: {
    icon: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1761065068/Logo_pogacr.jpg",
    shortcut: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1761065068/Logo_pogacr.jpg",
    apple: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1761065068/Logo_pogacr.jpg",
  },
  keywords: [
    "Sapphire Madani Tegal",
    "Perumahan Tegal",
    "Rumah Tegal",
    "Hunian Modern Tegal",
    "Properti Tegal",
    "Madani Tegal",
    "Rumah Terjangkau Tegal",
    "Perumahan Terjangkau",
    "Developer Kredibel",
    "Legalitas Terjamin",
    "Cluster Saba",
    "Cluster Palmyra",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Inline Critical CSS for Above-the-Fold Content */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .header{position:fixed;top:0;left:0;right:0;z-index:50;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
          .header-container{display:flex;align-items:center;justify-content:space-between;height:5rem;gap:2rem;max-width:1280px;margin:0 auto;padding:0 1.5rem}
          .header-logo{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}
          .header-nav{display:none;gap:2.5rem;flex:1;justify-content:center}
          .header-nav-link{color:#333;font-weight:500;font-size:0.95rem;transition:color 0.2s}
          .header-mobile-button{display:block;color:#333;background:none;border:none;cursor:pointer}
          .hero-section{padding-top:5rem;position:relative;overflow:hidden}
          @media(min-width:1024px){.header-nav{display:flex}.header-mobile-button{display:none}}
        `}} />

        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://analytics.tiktok.com" />
        <link rel="preconnect" href="https://www.youtube.com" />

        {/* DNS Prefetch for additional external domains */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Async CSS Loading Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
          !function(e){"use strict";var t=function(t,n,r){var o,i=e.document,d=i.createElement("link");if(n)o=n;else{var s=(i.body||i.getElementsByTagName("head")[0]).childNodes;o=s[s.length-1]}var a=i.styleSheets;d.rel="stylesheet",d.href=t,d.media="only x",function t(e){if(i.body)return e();setTimeout(function(){t(e)})}(function(){o.parentNode.insertBefore(d,n?o:o.nextSibling)});var l=function(e){for(var t=d.href,n=a.length;n--;)if(a[n].href===t)return e();setTimeout(function(){l(e)})};function u(){d.addEventListener&&d.removeEventListener("load",u),d.media=r||"all"}return d.addEventListener&&d.addEventListener("load",u),d.onloadcssdefined=l,l(u),d};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this);
        `}} />

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17369558016" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17369558016');
          `}
        </Script>

        {/* Google Tag Manager */}

        {/* End Google Tag Manager */}

        {/* Facebook Pixel Code */}

        {/* End Facebook Pixel Code */}

        {/* Facebook Pixel (noscript) */}

        {/* End Facebook Pixel (noscript) */}

        {/* TikTok Pixel Code */}

        {/* End TikTok Pixel Code */}
      </head>
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {/* Google Tag Manager (noscript) */}

        {/* End Google Tag Manager (noscript) */}

        <Suspense fallback={null}>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
