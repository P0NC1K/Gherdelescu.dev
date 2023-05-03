import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { HelmetProvider } from "react-helmet-async";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BF4TRGMPF0`}
      />

      <Script strategy="lazyOnload" id="GoogleTag">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BF4TRGMPF0', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <HelmetProvider>
        <Component {...pageProps} />
      </HelmetProvider>
    </>
  );
}
