
import type { AppProps } from "next/app";
import "../styles/reset.scss";
import { Layout } from "@/components/Layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
 
  );
}
