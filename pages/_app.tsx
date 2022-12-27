import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps : { session, ...pageProps }, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <SessionProvider session={session}>
        <Layout router={router}>
            <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </AnimatePresence>

  );
}
