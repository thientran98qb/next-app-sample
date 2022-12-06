import type { AppProps } from 'next/app'
import "@fontsource/roboto"
import '../styles/main.scss'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}
