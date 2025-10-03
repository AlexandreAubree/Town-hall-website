import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../styles/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
