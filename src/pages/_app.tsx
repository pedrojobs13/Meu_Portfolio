
import type { AppProps } from 'next/app'
import '../styles/global.scss'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>)
}
