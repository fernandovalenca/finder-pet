import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import QueryProvider from "@/services/react-query";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryProvider>
  );
}
