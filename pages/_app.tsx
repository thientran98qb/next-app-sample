import type { AppProps } from 'next/app';
import '@fontsource/roboto';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ToastContainer />
    </SessionProvider>
  );
}
