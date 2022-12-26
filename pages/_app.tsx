import type { AppProps } from 'next/app';
import '@fontsource/roboto';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout/Layout';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}
