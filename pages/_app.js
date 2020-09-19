import React from "react";
import { NextSeo } from 'next-seo';
import '../css/index.css'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <NextSeo
        openGraph={{
          type: 'website',
          description: "Alexander Benko's Portfolio Website - Made with NextJs",
          locale: 'en_IE',
          url: 'https://www.alexanderbenko.dev',
          site_name: "Alexander Benko-Software Engineer",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}