import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="DevNTell" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>DevNTell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is my amazing website." />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My-Website" />
        <meta property="og:description" content="This is my amazing website." />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="your-website-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My-Website" />
        <meta
          name="twitter:description"
          content="This is my amazing website."
        />
        <meta name="twitter:image" content="your-image-url.jpg" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
