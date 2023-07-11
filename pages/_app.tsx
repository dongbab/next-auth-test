import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <div className="mx-auto w-full max-w-xl">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
